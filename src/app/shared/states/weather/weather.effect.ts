import { Injectable } from "@angular/core";
import { Actions, createEffect } from "@ngrx/effects";
import { ofType } from "@ngrx/effects";
import { catchError, filter, map, of, switchMap, tap, withLatestFrom } from "rxjs";
import { Weather, WeatherForecast } from "../../models/weather.interface";
import { WeatherApiService } from "../../services/api/weather-api.service";
import { loadWeather, loadWeatherSuccess, loadWeatherError, loadWeatherForecastSuccess, loadWeatherForecast, loadWeatherForCity, removeWeatherForCity, loadWeatherForCitySuccess, loadWeatherForCityError, loadWeatherForecastForCity, loadWeatherForecastForCitySuccess, loadWeatherForecastForCityError } from "./weather.action";
import { appConfig } from "src/config/config";
import { AppState } from "../../models/state/app-state.interface";
import { Store, select } from "@ngrx/store";
import { selectWeatherData, selectWeatherForecastData } from "./weather.selector";
import { ELoadingStatus } from "../../enums/loading-status.enum";
import { selectListCity } from "../user/user.selector";
import { City, RecordCity } from "../../models/city.interface";

@Injectable({ providedIn: 'root' })
export class WeatherEffect {

	public mockCity = 'Lyon';

	constructor(
		private _actions$: Actions,
		private _store: Store<AppState>,
		private _weatherApiService: WeatherApiService
	) {}

	public loadWeather$ = createEffect(() =>
		this._actions$.pipe(
			ofType(loadWeather),
			withLatestFrom(this._store.pipe(select(selectWeatherData))),
			filter(([_, weatherData]) => weatherData.status !== ELoadingStatus.Success),
			withLatestFrom(this._store.pipe(select(selectListCity))),
			switchMap(([_, listCity]) => this._weatherApiService.getCurrentWeatherByCities(listCity)),
			map((weather: RecordCity<Weather>) => loadWeatherSuccess({ value: weather })),
			catchError((err: string) => of(loadWeatherError({ message: err })))
		)
	)

	public loadWeatherForecast$ = createEffect(() =>
		this._actions$.pipe(
			ofType(loadWeatherForecast),
			withLatestFrom(this._store.pipe(select(selectWeatherForecastData))),
			filter(([_, weatherForecastData]) => {
				return appConfig.nbDaysShortForecast > 0 && weatherForecastData.status !== ELoadingStatus.Success;
			}),
			withLatestFrom(this._store.pipe(select(selectListCity))),
			switchMap(([_, listCity]) => this._weatherApiService.getGroupedForcastByCities(listCity)),
			map((forecast: RecordCity<WeatherForecast>) => loadWeatherForecastSuccess({ value: forecast })),
			catchError((message: string) => of(loadWeatherError({ message })))
		)
	)

	public loadWeatherPerCity$ = createEffect(() =>	{
		let loadedCity: City;
		return this._actions$.pipe(
      ofType(loadWeatherForCity),
      tap((response) => (loadedCity = response.city)),
      withLatestFrom(this._store.pipe(select(selectWeatherData))),
      filter(
        ([_, weatherData]) =>
          !Object.keys(weatherData.value).includes(loadedCity.id)
      ),
      switchMap(() =>
        this._weatherApiService.getCurrentWeatherByCoordinates(
          loadedCity.coord.lat,
          loadedCity.coord.lon
        )
      ),
      map((weather: Weather) => {
        return loadWeatherForCitySuccess({
          cityId: loadedCity.id,
          weather: weather,
        });
      }

      ),
      catchError((err: string) => of(loadWeatherForCityError({ message: err })))
    );
	})

	public loadWeatherForecastPerCity$ = createEffect(() =>	{
		let loadedCity: City;
		return this._actions$.pipe(
      ofType(loadWeatherForecastForCity),
      tap((response) => (loadedCity = response.city)),
      withLatestFrom(this._store.pipe(select(selectWeatherForecastData))),
      filter(
        ([_, weatherData]) =>
          !Object.keys(weatherData.value).includes(loadedCity.id)
      ),
      switchMap(() =>
        this._weatherApiService.getGroupedForecastByCoordinates(
          loadedCity.coord.lat,
          loadedCity.coord.lon
        )
      ),
      map((weather: WeatherForecast) =>
        loadWeatherForecastForCitySuccess({
          cityId: loadedCity.id,
          weather: weather,
        })
      ),
      catchError((err: string) =>
        of(loadWeatherForecastForCityError({ message: err }))
      )
    );
	})

}
