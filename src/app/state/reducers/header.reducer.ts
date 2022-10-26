import { createReducer, on } from "@ngrx/store";
import { switchDarkMode } from "../actions/header.action";


export const initialState: boolean = false;

export const headerReducer = createReducer(
  initialState,
  on(switchDarkMode, (state) => {
    return !state;
  }),
);
