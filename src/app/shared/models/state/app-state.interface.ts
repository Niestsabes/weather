import { ELoadingStatus } from "../../enums/loading-status.enum";
import { EPresureUnit } from "../../enums/presure-unit.enum";
import { ETemperatureUnit } from "../../enums/temparature-unit.enum";
import { EWindUnit } from "../../enums/wind-unit.enum";
import { City, RecordCity } from "../city.interface";
import { Weather, WeatherForecast } from "../weather.interface";

export type AppState = {
    userParams: AppUserParams,
    weather: AppStateLoadedValue<RecordCity<Weather>>,
    weatherForecast: AppStateLoadedValue<RecordCity<WeatherForecast>>,
};

export type AppStateKey = keyof AppState;

export type AppUserParams = {
    temperatureUnit: ETemperatureUnit;
    windUnit: EWindUnit;
    presureUnit: EPresureUnit;
    listCity: City[];
};

export type AppStateLoadedValue<T = unknown> = {
    value: T|null,
    status: ELoadingStatus,
    error: string|null,
}