import { createAction, props } from "@ngrx/store";
import { AppUserParams } from "../../models/state/app-state.interface";
import { City } from "../../models/city.interface";

export const editUserParams = createAction(
    '[To DO] Edit User Params',
    props<{ content: AppUserParams }>()
);

export const editUserParamsSucces = createAction(
    '[To Do] Edit User Params success'
);

export const changeUserLanguage = createAction(
    '[To DO] Edit User Language',
    props<{ content: string }>()
);

export const addCity = createAction(
    '[To DO] Add City',
    props<{ city: City }>()
);

export const removeCity = createAction(
    '[To DO] Remove City',
    props<{ cityId: string }>()
);
