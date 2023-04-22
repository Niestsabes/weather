import { createSelector } from "@ngrx/store";
import { AppState } from "../models/state/app-state.interface";

export const selectUserParams = (state: AppState) => state.userParams;
// export const selectWeatherData = (state: AppState) => { console.log(state); return state.weather; }

// export const selectWeather = createSelector(
//     selectWeatherData,
//     (weather) => weather?.value
// );