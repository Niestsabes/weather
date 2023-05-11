import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { switchMap, tap, withLatestFrom } from "rxjs";
import { loadWeatherForCity, loadWeatherForecastForCity, removeWeatherForCity, removeWeatherForecastForCity } from "../weather/weather.action";
import { addCity, changeUserLanguage, editUserParams, removeCity, saveListCity } from "./user.action";
import { TranslateService } from "@ngx-translate/core";
import { AppState } from "../../models/state/app-state.interface";
import { Store, select } from "@ngrx/store";
import { selectUserParams } from "./user.selector";
import { EStorageKey } from "../../enums/storage-key.enum";
import { StorageService } from "../../services/storage/storage.service";

@Injectable({ providedIn: 'root' })
export class UserEffect {

	constructor(
		private _actions$: Actions,
		private _store: Store<AppState>,
		private _translate: TranslateService,
		private _storage: StorageService
	) {}

	public onAddCity$ = createEffect(() => {
		return this._actions$.pipe(
			ofType(addCity),
			withLatestFrom(this._store.pipe(select(selectUserParams))),
			switchMap(([city, userParams]) => {
				const listCity = userParams.listCity;
				if (!userParams.listCity.find(c => c.name === city.content.name)) {
					listCity.push(city.content);
				}
				return [
					loadWeatherForCity({ cityName: city.content.name }),
					loadWeatherForecastForCity({ cityName: city.content.name }),
					saveListCity({ content: listCity })
				]}
			)
		)
	});

	public onRemoveCity$ = createEffect(() => {
		return this._actions$.pipe(
			ofType(removeCity),
			withLatestFrom(this._store.pipe(select(selectUserParams))),
			switchMap(([city, userParams]) => {
				const listCity = userParams.listCity.filter(c => c.name !== city.content.name);
				return [
					removeWeatherForCity({ cityName: city.content.name }),
					removeWeatherForecastForCity({ cityName: city.content.name }),
					saveListCity({ content: listCity })
				]
			})
		)
	});

	public onSaveListCity$ = createEffect(() => {
		return this._actions$.pipe(
			ofType(saveListCity),
			switchMap((listCity) => {
				this._storage.set(EStorageKey.LIST_CITY, listCity.content);
				return [];
			})
		);
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