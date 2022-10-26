import { createReducer, on } from "@ngrx/store";
import { Apartment } from "src/app/models/apartment.model";
import { loadApartments, loadingApartments } from "../actions/apartments.action";

export interface ApartmentState {
  loading: boolean,
  apartments: Apartment[],
}

export const initialState: ApartmentState = {
  apartments: [],
  loading: false,
};

export const apartmentsReducer = createReducer(
  initialState,
  on(loadingApartments, (state) => {
    return {
      ...state,
      loading: true,
    };
  }),
  on(loadApartments, (state, { apartments }) => {
    return {
      ...state,
      apartments: apartments,
      loading: false,
    };
  })
);
