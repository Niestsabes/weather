import { createSelector } from "@ngrx/store";
import { AppState } from "../../models/state/app-state.interface";

export const selectUserParams = (state: AppState) => state.userParams;