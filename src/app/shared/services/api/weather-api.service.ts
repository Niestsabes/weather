import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable, forkJoin, map, of } from 'rxjs';
import { Weather, WeatherForecast } from '../../models/weather.interface';
import { HttpClient } from '@angular/common/http';
import { WEATHER_FORECAST_MOCK } from 'src/app/mock/weather-forecast.mock';
import { WEATHER_MOCK } from 'src/app/mock/weather.mock';
import { City, RecordCity } from '../../models/city.interface';
import { WeatherUtilsService } from '../utils/weather-utils.service';
import { appConfig } from 'src/config/config';

@Injectable({
  providedIn: 'root'
})
export class WeatherApiService {

  constructor(
    private http: HttpClient,
    private _weatherUtilsService: WeatherUtilsService
  ) { }

  public getCurrentWeatherByCity(cityName: string): Observable<Weather> {
    // return this.http.get<Weather>(
    //   `${environment.weatherApiUrl}/weather`,
    //   { params: { q: cityName, appid: environment.weatherApiKey } }
    // );
    return of(WEATHER_MOCK)
  }

  public getCurrentWeatherByCities(listCity: City[]): Observable<RecordCity<Weather>> {
    let recordCityRequest: RecordCity<Observable<Weather>> = {};
    listCity.forEach(city => recordCityRequest[city.name] = this.getCurrentWeatherByCity(city.name));
    return forkJoin(recordCityRequest);
  }

  public getForecastByCity(cityName: string): Observable<WeatherForecast> {
    // return this.http.get<WeatherForecast>(
    //   `${environment.weatherApiUrl}/forecast`,
    //   { params: { q: cityName, appid: environment.weatherApiKey } }
    // );
    return of(WEATHER_FORECAST_MOCK)
  }

	public getGroupedForecastByCity(cityName: string): Observable<WeatherForecast> {
		return this.getForecastByCity(cityName).pipe(
			map(forecast => {
				forecast.list = this._weatherUtilsService.groupWeatherByDate(forecast.list).slice(0, appConfig.forecastDays);
				return forecast;
			})
		);
	}

  public getGroupedForcastByCities(listCity: City[]): Observable<RecordCity<WeatherForecast>> {
		let recordCityRequest: RecordCity<Observable<WeatherForecast>> = {};
		listCity.forEach(city => recordCityRequest[city.name] = this.getGroupedForecastByCity(city.name));
		return forkJoin(recordCityRequest);
	}

}
