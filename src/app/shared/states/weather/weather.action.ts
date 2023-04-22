import { createAction, props } from "@ngrx/store";
import { Weather, WeatherForecast } from "../../models/weather.interface";

export const loadWeather = createAction(
    '[To DO] Load Weather'
);

export const loadWeatherSuccess = createAction(
    '[To Do] Load Weather success',
    props<{ value: Weather }>()
);

export const loadWeatherError = createAction(
    '[To Do] Load Weather failed',
    props<{ message: string }>()
);

export const loadWeatherForecast = createAction(
    '[To DO] Load WeatherForecast'
);

export const loadWeatherForecastSuccess = createAction(
    '[To Do] Load WeatherForecast success',
    props<{ value: WeatherForecast }>()
);

export const loadWeatherForecastError = createAction(
    '[To Do] Load WeatherForecast failed',
    props<{ message: string }>()
);