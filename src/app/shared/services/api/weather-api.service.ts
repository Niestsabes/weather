import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, forkJoin, map } from 'rxjs';
import { Weather, WeatherForecast } from '../../models/weather.interface';
import { City, RecordCity } from '../../models/city.interface';
import { environment } from 'src/environments/environment';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class WeatherApiService {

  constructor(
    private _http: HttpClient,
    private _translate: TranslateService
  ) { }

  public getCurrentWeatherByCity(cityName: string): Observable<Weather> {
    return this._http.get<Weather>(
      `${environment.weatherApiUrl}/weather`,
      { params: { q: cityName, appid: environment.weatherApiKey, lang: this._translate.currentLang } }
    );
  }

  public getCurrentWeatherByCities(listCity: City[]): Observable<RecordCity<Weather>> {
    let recordCityRequest: RecordCity<Observable<Weather>> = {};
    listCity.forEach(city => recordCityRequest[city.name] = this.getCurrentWeatherByCity(city.name));
    return forkJoin(recordCityRequest);
  }

  public getForecastByCity(cityName: string): Observable<WeatherForecast> {
    return this._http.get<WeatherForecast>(
      `${environment.weatherApiUrl}/forecast`,
      { params: { q: cityName, appid: environment.weatherApiKey, lang: this._translate.currentLang } }
    );
  }

	public getGroupedForecastByCity(cityName: string): Observable<WeatherForecast> {
		return this.getForecastByCity(cityName).pipe(
			map(forecast => {
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
