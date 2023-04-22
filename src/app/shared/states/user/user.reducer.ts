import { createReducer, on } from "@ngrx/store";
import { EPresureUnit } from "../../enums/presure-unit.enum";
import { ETemperatureUnit } from "../../enums/temparature-unit.enum";
import { EWindUnit } from "../../enums/wind-unit.enum";
import { AppUserParams } from "../../models/state/app-state.interface";
import { editUserParams } from "./user.action";

const initialState: AppUserParams = {
    temperatureUnit: ETemperatureUnit.Celsius,
    windUnit: EWindUnit.KM_H,
    presureUnit: EPresureUnit.HPA
}

export const userReducer = createReducer(
    initialState,
    on(editUserParams, (state: AppUserParams, { content }) => ({
        ...state,
        ...content
    }))
);