import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { WeatherApiService } from "../../services/api/weather-api.service";
import { WeatherUtilsService } from "../../services/utils/weather-utils.service";
import { AppState } from "../../models/state/app-state.interface";
import { Store } from "@ngrx/store";
import { City } from "../../models/city.interface";
import { tap, switchMap, map, catchError, of, mergeMap } from "rxjs";
import { Weather } from "../../models/weather.interface";
import { loadWeatherForCitySuccess, loadWeatherError, loadWeatherForCity, loadWeatherForecastForCity, removeWeatherForCity, removeWeatherForecastForCity } from "../weather/weather.action";
import { addCity, removeCity } from "./user.action";

@Injectable({ providedIn: 'root' })
export class UserEffect {

	constructor(
		private _actions$: Actions,
	) {}

	public loadDataForCity$ = createEffect(() => {
		return this._actions$.pipe(
			ofType(addCity),
			switchMap((city) => [
				loadWeatherForCity({ cityName: city.content.name }),
				loadWeatherForecastForCity({ cityName: city.content.name })
			])
		)
	});

	public unloadDataForCity$ = createEffect(() => {
		return this._actions$.pipe(
			ofType(removeCity),
			switchMap((city) => [
				removeWeatherForCity({ cityName: city.content.name }),
				removeWeatherForecastForCity({ cityName: city.content.name })
			])
		)
	});

}