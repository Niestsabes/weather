import { createReducer, on } from "@ngrx/store";
import { ELoadingStatus } from "../../enums/loading-status.enum";
import { AppStateLoadedValue } from "../../models/state/app-state.interface";
import { Weather, WeatherForecast } from "../../models/weather.interface";
import { loadWeather, loadWeatherError, loadWeatherForecast, loadWeatherForecastError, loadWeatherForecastSuccess, loadWeatherSuccess } from "./weather.action";

export const weatherReducer = buildReducer<Weather>(
    loadWeather, loadWeatherSuccess, loadWeatherError
);

export const weatherForecastReducer = buildReducer<WeatherForecast>(
    loadWeatherForecast, loadWeatherForecastSuccess, loadWeatherForecastError
);

function buildReducer<T>(
    loadAction: any,
    successAction: any,
    errorAction: any
) {
    return createReducer(
        { value: null, status: ELoadingStatus.Pending, error: null },
        on(loadAction, (state: AppStateLoadedValue<T>, {}) => ({
            ...state,
            value: null,
            error: null,
            status: ELoadingStatus.Loading
        })),
        on(successAction, (state: AppStateLoadedValue<T>, { value }) => ({
            ...state,
            value: value,
            error: null,
            status: ELoadingStatus.Success
        })),
        on(errorAction, (state: AppStateLoadedValue<T>, { message }) => ({
            ...state,
            value: null,
            error: message,
            status: ELoadingStatus.Error
        }))
    );
}