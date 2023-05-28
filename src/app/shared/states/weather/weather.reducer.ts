import { createReducer, on } from "@ngrx/store";
import { ELoadingStatus } from "../../enums/loading-status.enum";
import { AppStateLoadedValue } from "../../models/state/app-state.interface";
import { Weather, WeatherForecast } from "../../models/weather.interface";
import { loadWeather, loadWeatherError, loadWeatherForCity, loadWeatherForCityError, loadWeatherForCitySuccess, loadWeatherForecast, loadWeatherForecastError, loadWeatherForecastForCity, loadWeatherForecastForCityError, loadWeatherForecastForCitySuccess, loadWeatherForecastSuccess, loadWeatherSuccess, removeWeatherForCity, removeWeatherForecastForCity } from "./weather.action";
import { RecordCity } from "../../models/city.interface";

export const weatherReducer = buildReducer<Weather>(
    {},
    loadWeather, loadWeatherSuccess, loadWeatherError,
    loadWeatherForCity, loadWeatherForCitySuccess, loadWeatherForCityError,
    removeWeatherForCity
);

export const weatherForecastReducer = buildReducer<WeatherForecast>(
    {},
    loadWeatherForecast, loadWeatherForecastSuccess, loadWeatherForecastError,
    loadWeatherForecastForCity, loadWeatherForecastForCitySuccess, loadWeatherForecastForCityError,
    removeWeatherForecastForCity
);

function buildReducer<T>(
    defaultValue: RecordCity<T>,
    loadAction: any,
    successAction: any,
    errorAction: any,
    loadActionByCity?: any,
    successActionByCity?: any,
    errorActionByCity?: any,
    removeActionByCity?: any,
) {
    return createReducer(
      { value: defaultValue, status: ELoadingStatus.Pending, error: null },
      on(loadAction, (state: AppStateLoadedValue<RecordCity<T>>, {}) => ({
        ...state,
        value: defaultValue,
        error: null,
        status: ELoadingStatus.Loading,
      })),
      on(
        successAction,
        (state: AppStateLoadedValue<RecordCity<T>>, { value }) => ({
          ...state,
          value: value,
          error: null,
          status: ELoadingStatus.Success,
        })
      ),
      on(
        errorAction,
        (state: AppStateLoadedValue<RecordCity<T>>, { message }) => ({
          ...state,
          value: defaultValue,
          error: message,
          status: ELoadingStatus.Error,
        })
      ),
      on(
        loadActionByCity,
        (state: AppStateLoadedValue<RecordCity<T>>, { cityId }) => ({
          ...state,
          error: null,
          status: ELoadingStatus.Loading,
        })
      ),
      on(
        successActionByCity,
        (state: AppStateLoadedValue<RecordCity<T>>, { cityId, weather }) => ({
          ...state,
          value: {
            ...state.value,
            [cityId]: weather,
          },
          error: null,
          status: ELoadingStatus.Success,
        })
      ),
      on(
        errorActionByCity,
        (state: AppStateLoadedValue<RecordCity<T>>, { message }) => ({
          ...state,
          error: message,
          status: ELoadingStatus.Error,
        })
      ),
      on(
        removeActionByCity,
        (state: AppStateLoadedValue<RecordCity<T>>, { cityId }) => {
          const value = { ...state.value };
          delete value[cityId];
          return {
            ...state,
            value,
            error: null,
            status: ELoadingStatus.Success,
          };
        }
      )
    );
}
