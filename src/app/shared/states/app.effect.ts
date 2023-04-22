import { Injectable } from "@angular/core";
import { Actions, createEffect } from "@ngrx/effects";
import { ofType } from "@ngrx/effects";
import { Store } from "@ngrx/store";
import { catchError, map, of, switchMap, withLatestFrom } from "rxjs";
import { WeatherApiService } from "../services/api/weather-api.service";
import { AppState } from "../models/state/app-state.interface";
import { Weather } from "../models/weather.interface";
import { selectUserParams } from "./app.selector";
import { editUserParams } from "./user/user.action";

@Injectable({ providedIn: 'root' })
export class AppEffect {
    
    constructor(
        private actions$: Actions,
        private _store: Store<AppState>,
        private _weatherApiService: WeatherApiService
    ) {}

    public saveUserParams$ = createEffect(() => 
        this.actions$.pipe(
            ofType(editUserParams),
            withLatestFrom(this._store.select(selectUserParams)),
            // switchMap(([action, listTask]) => { return this._apiTask.saveTasks(listTask); })
        ),
        { dispatch: false }
    )

}