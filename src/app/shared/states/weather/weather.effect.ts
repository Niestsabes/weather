import { Injectable } from "@angular/core";
import { Actions, createEffect } from "@ngrx/effects";
import { ofType } from "@ngrx/effects";
import { catchError, map, of, switchMap } from "rxjs";
import { Weather, WeatherForecast } from "../../models/weather.interface";
import { WeatherApiService } from "../../services/api/weather-api.service";
import { loadWeather, loadWeatherSuccess, loadWeatherError, loadWeatherForecastSuccess } from "./weather.action";
import { WeatherUtilsService } from "../../services/utils/weather-utils.service";
import { appConfig } from "src/config/config";

@Injectable({ providedIn: 'root' })
export class WeatherEffect {
    
	constructor(
		private _actions$: Actions,
		private _weatherApiService: WeatherApiService,
		private _weatherUtilsService: WeatherUtilsService
	) {}

	public loadWeather$ = createEffect(() =>
		this._actions$.pipe(
			ofType(loadWeather),
			switchMap(() => this._weatherApiService.getCurrentWeatherByCity('Lyon')),
			map((weather: Weather) => loadWeatherSuccess({ value: weather })),
			catchError((err: string) => of(loadWeatherError({ message: err })))
		)
	)
	
	public loadWeatherForecast$ = createEffect(() =>
		this._actions$.pipe(
			ofType(loadWeather),
			switchMap(() => this._weatherApiService.getForecastByCity('Lyon')),
			map(forecast => {
				forecast.list = this._weatherUtilsService.groupWeatherByDate(forecast.list).slice(0, appConfig.forecastDays);
				return forecast;
			}),
			map((forecast: WeatherForecast) => loadWeatherForecastSuccess({ value: forecast })),
			catchError((message: string) => of(loadWeatherError({ message })))
		)
	)

}