import { createReducer, on } from "@ngrx/store";
import { EPresureUnit } from "../../enums/presure-unit.enum";
import { ETemperatureUnit } from "../../enums/temparature-unit.enum";
import { EWindUnit } from "../../enums/wind-unit.enum";
import { AppUserParams } from "../../models/state/app-state.interface";
import { addCity, editUserParams, removeCity, saveListCity } from "./user.action";
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
    //     if (state.listCity.find(city => city.name === content.name)) {
    //         return state;
    //     }
    //     const listCity = [...state.listCity, content];
    //     return {
    //         ...state,
    //         listCity: listCity
    //     }
    // }),
    // on(removeCity , (state: AppUserParams, { content }) => {
    //     const listCity = state.listCity.filter(city => city.name !== content.name);
    //     return {
    //         ...state,
    //         listCity: listCity
    //     }
    // }),
    on(saveListCity, (state: AppUserParams, { content }) => {
        return {
            ...state,
            listCity: content
        }
    })
);