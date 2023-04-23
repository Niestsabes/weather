import { AppState } from "../../models/state/app-state.interface";

export const selectUserParams = (state: AppState) => state.userParams;

export const selectListCity = (state: AppState) => state.userParams.listCity;