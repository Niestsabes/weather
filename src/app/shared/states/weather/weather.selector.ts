import { createSelector } from "@ngrx/store";
import { AppState } from "../../models/state/app-state.interface";

export const selectWeatherData = (state: AppState) => state.weather;

export const selectWeather = createSelector(
    selectWeatherData,
    (weather) => weather?.value
);

export const selectWeatherForecastData = (state: AppState) => state.weatherForecast;

export const selectWeatherForecast = createSelector(
    selectWeatherForecastData,
    (weatherForecast) => weatherForecast?.value
);