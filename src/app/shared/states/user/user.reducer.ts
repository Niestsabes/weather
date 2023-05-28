import { createReducer, on } from "@ngrx/store";
import { EPresureUnit } from "../../enums/presure-unit.enum";
import { ETemperatureUnit } from "../../enums/temparature-unit.enum";
import { EWindUnit } from "../../enums/wind-unit.enum";
import { AppUserParams } from "../../models/state/app-state.interface";
import { addCity, editUserParams, removeCity } from "./user.action";
import { appConfig } from "src/config/config";

const initialState: AppUserParams = {
    temperatureUnit: ETemperatureUnit.Celsius,
    windUnit: EWindUnit.KM_H,
    presureUnit: EPresureUnit.HPA,
    language: appConfig.lang.default,
    listCity: []
}

export const userReducer = createReducer(
    initialState,
    on(editUserParams, (state: AppUserParams, { content }) => ({
        ...state,
        ...content
    })),
    on(addCity , (state: AppUserParams, { city }) => {
        if (state.listCity.find(c => c.id === city.id)) {
            return state;
        }
        return {
            ...state,
            listCity: [...state.listCity, city]
        }
    }),
    on(removeCity , (state: AppUserParams, { cityId }) => ({
        ...state,
        listCity: state.listCity.filter(city => city.id !== cityId)
    })),
);
