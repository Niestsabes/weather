import { createAction, props } from "@ngrx/store";
import { AppUserParams } from "../../models/state/app-state.interface";

export const editUserParams = createAction(
    '[To DO] Edit User Params',
    props<{ content: AppUserParams }>()
);
