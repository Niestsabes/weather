import { createAction, props } from "@ngrx/store";
import { Weather, WeatherForecast } from "../../models/weather.interface";
import { City, RecordCity } from "../../models/city.interface";

export const loadWeather = createAction(
    '[To DO] Load Weather'
);

export const loadWeatherSuccess = createAction(
    '[To Do] Load Weather success',
    props<{ value: RecordCity<Weather> }>()
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
    props<{ value: RecordCity<WeatherForecast> }>()
);

export const loadWeatherForecastError = createAction(
    '[To Do] Load WeatherForecast failed',
    props<{ message: string }>()
);

export const loadWeatherForCity = createAction(
    '[To DO] Load Weather for city',
    props<{ city: City }>()
);

export const loadWeatherForecastForCity = createAction(
    '[To DO] Load WeatherForecast for city',
    props<{ city: City }>()
);

export const loadWeatherForCitySuccess = createAction(
    '[To Do] Load Weather for city success',
    props<{ cityId: string, weather: Weather }>()
);

export const loadWeatherForecastForCitySuccess = createAction(
    '[To Do] Load WeatherForecast for city success',
    props<{ cityId: string; weather: WeatherForecast }>()
);

export const loadWeatherForCityError = createAction(
    '[To Do] Load Weather for city failed',
    props<{ message: string }>()
);

export const loadWeatherForecastForCityError = createAction(
    '[To Do] Load WeatherForecast for city failed',
    props<{ message: string }>()
);

export const removeWeatherForCity = createAction(
    '[To Do] Remove Weather for city',
    props<{ cityId: string }>()
);

export const removeWeatherForecastForCity = createAction(
    '[To Do] Remove WeatherForecast for city',
    props<{ cityId: string }>()
);

