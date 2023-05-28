import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { map, switchMap, tap, withLatestFrom } from "rxjs";
import { loadWeatherForCity, loadWeatherForecastForCity, removeWeatherForCity, removeWeatherForecastForCity } from "../weather/weather.action";
import { addCity, changeUserLanguage, editUserParams, editUserParamsSucces, removeCity } from "./user.action";
import { TranslateService } from "@ngx-translate/core";
import { AppState } from "../../models/state/app-state.interface";
import { Store, select } from "@ngrx/store";
import { selectUserParams } from "./user.selector";
import { DataService } from "../../services/database/data.service";

@Injectable({ providedIn: 'root' })
export class UserEffect {
  constructor(
    private _actions$: Actions,
    private _store: Store<AppState>,
    private _translate: TranslateService,
    private _cacheDb: DataService
  ) {}

  public loadDataForCity$ = createEffect(() => {
    return this._actions$.pipe(
      ofType(addCity),
      withLatestFrom(this._store.pipe(select(selectUserParams))),
      map(([city, userParams]) => {
        this._cacheDb.set('userParams', userParams).subscribe();
        return city;
      }),
      switchMap((response) => [
        loadWeatherForCity({ city: response.city }),
        loadWeatherForecastForCity({ city: response.city }),
      ])
    );
  });

  public unloadDataForCity$ = createEffect(() => {
    return this._actions$.pipe(
      ofType(removeCity),
      withLatestFrom(this._store.pipe(select(selectUserParams))),
      map(([city, userParams]) => {
        this._cacheDb.set('userParams', userParams).subscribe();
        return city;
      }),
      switchMap((response) => [
        removeWeatherForCity({ cityId: response.cityId }),
        removeWeatherForecastForCity({ cityId: response.cityId }),
      ])
    );
  });

  public changeUserLanguage$ = createEffect(() => {
    return this._actions$.pipe(
      ofType(changeUserLanguage),
      tap((language) => this._translate.use(language.content)),
      withLatestFrom(this._store.pipe(select(selectUserParams))),
      switchMap(([language, user]) => [
        editUserParams({ content: { ...user, language: language.content } }),
      ])
    );
  });

  public editUserParams$ = createEffect(() => {
    return this._actions$.pipe(
      ofType(editUserParams),
      switchMap((userParams) => this._cacheDb.set('userParams', userParams.content)),
      switchMap((response) => [])
    );
  });
}
