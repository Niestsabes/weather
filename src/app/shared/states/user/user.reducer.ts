import { createReducer, on } from "@ngrx/store";
import { EPresureUnit } from "../../enums/presure-unit.enum";
import { ETemperatureUnit } from "../../enums/temparature-unit.enum";
import { EWindUnit } from "../../enums/wind-unit.enum";
import { AppUserParams } from "../../models/state/app-state.interface";
import { addCity, editUserParams, removeCity } from "./user.action";

const initialState: AppUserParams = {
    temperatureUnit: ETemperatureUnit.Celsius,
    windUnit: EWindUnit.KM_H,
    presureUnit: EPresureUnit.HPA,
    listCity: []
}

export const userReducer = createReducer(
    initialState,
    on(editUserParams, (state: AppUserParams, { content }) => ({
        ...state,
        ...content
    })),
    on(addCity , (state: AppUserParams, { content }) => {
        if (state.listCity.find(city => city.name === content.name)) {
            return state;
        }
        return {
            ...state,
            listCity: [...state.listCity, content]
        }
    }),
    on(removeCity , (state: AppUserParams, { content }) => ({
        ...state,
        listCity: state.listCity.filter(city => city.name !== content.name)
    })),
);