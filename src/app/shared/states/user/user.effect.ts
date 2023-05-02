import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { switchMap, tap, withLatestFrom } from "rxjs";
import { loadWeatherForCity, loadWeatherForecastForCity, removeWeatherForCity, removeWeatherForecastForCity } from "../weather/weather.action";
import { addCity, changeUserLanguage, editUserParams, removeCity } from "./user.action";
import { TranslateService } from "@ngx-translate/core";
import { AppState } from "../../models/state/app-state.interface";
import { Store, select } from "@ngrx/store";
import { selectUserParams } from "./user.selector";

@Injectable({ providedIn: 'root' })
export class UserEffect {

	constructor(
		private _actions$: Actions,
		private _store: Store<AppState>,
		private _translate: TranslateService
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

	public changeUserLanguage$ = createEffect(() => {
		return this._actions$.pipe(
			ofType(changeUserLanguage),
			tap((language) => this._translate.use(language.content)),
			withLatestFrom(this._store.pipe(select(selectUserParams))),
			switchMap(([language, user]) => [editUserParams({ content: { ...user, language: language.content } })])
		)
	})

}