import { Injectable } from "@angular/core";
import { Actions, createEffect } from "@ngrx/effects";
import { ofType } from "@ngrx/effects";
import { catchError, filter, map, of, switchMap, withLatestFrom } from "rxjs";
import { Weather, WeatherForecast } from "../../models/weather.interface";
import { WeatherApiService } from "../../services/api/weather-api.service";
import { loadWeather, loadWeatherSuccess, loadWeatherError, loadWeatherForecastSuccess, loadWeatherForecast } from "./weather.action";
import { WeatherUtilsService } from "../../services/utils/weather-utils.service";
import { appConfig } from "src/config/config";
import { AppState } from "../../models/state/app-state.interface";
import { Store, select } from "@ngrx/store";
import { selectWeatherData, selectWeatherForecastData } from "./weather.selector";
import { ELoadingStatus } from "../../enums/loading-status.enum";

@Injectable({ providedIn: 'root' })
export class WeatherEffect {

	constructor(
		private _actions$: Actions,
		private _store: Store<AppState>,
		private _weatherApiService: WeatherApiService,
		private _weatherUtilsService: WeatherUtilsService
	) {}

	public loadWeather$ = createEffect(() =>
		this._actions$.pipe(
			ofType(loadWeather),
			withLatestFrom(this._store.pipe(select(selectWeatherData))),
			filter(([_, weatherData]) => weatherData.status !== ELoadingStatus.Success),
			switchMap(() => this._weatherApiService.getCurrentWeatherByCity('Lyon')),
			map((weather: Weather) => loadWeatherSuccess({ value: weather })),
			catchError((err: string) => of(loadWeatherError({ message: err })))
		)
	)
	
	public loadWeatherForecast$ = createEffect(() =>
		this._actions$.pipe(
			ofType(loadWeatherForecast),
			withLatestFrom(this._store.pipe(select(selectWeatherForecastData))),
			filter(([_, weatherForecastData]) => {
				return appConfig.forecastDays > 0 && weatherForecastData.status !== ELoadingStatus.Success;
			}),
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