import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable, of } from 'rxjs';
import { Weather, WeatherForecast } from '../../models/weather.interface';
import { HttpClient } from '@angular/common/http';
import { WEATHER_FORECAST_MOCK } from 'src/app/mock/weather-forecast.mock';
import { WEATHER_MOCK } from 'src/app/mock/weather.mock';

@Injectable({
  providedIn: 'root'
})
export class WeatherApiService {

  constructor(
    private http: HttpClient
  ) { }

  public getCurrentWeatherByCity(city: string): Observable<Weather> {
    // return this.http.get<Weather>(
    //   `${environment.weatherApiUrl}/weather`,
    //   { params: { q: city, appid: environment.weatherApiKey } }
    // );
    return of(WEATHER_MOCK)
  }

  public getForecastByCity(city: string): Observable<WeatherForecast> {
    // return this.http.get<WeatherForecast>(
    //   `${environment.weatherApiUrl}/forecast`,
    //   { params: { q: city, appid: environment.weatherApiKey } }
    // );
    return of(WEATHER_FORECAST_MOCK)
  }

}
