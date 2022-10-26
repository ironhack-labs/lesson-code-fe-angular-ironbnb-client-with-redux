import { createReducer, on } from "@ngrx/store";
import { createApartmentSuccess, initCreateApartment } from "../actions/create-apartments.action";

export interface CreateApartmentState {
  created: boolean,
}

export const initialState: CreateApartmentState = {
  created: false,
};

export const createApartmentReducer = createReducer(
  initialState,
  on(initCreateApartment, (state) => {
    return {
      ...state,
      created: false,
    };
  }),
  on(createApartmentSuccess, (state) => {
    return {
      ...state,
      created: true,
    };
  })
);
