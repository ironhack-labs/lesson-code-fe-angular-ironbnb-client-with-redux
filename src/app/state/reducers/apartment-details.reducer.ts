import { createReducer, on } from "@ngrx/store";
import { Apartment } from "src/app/models/apartment.model";
import { loadApartment } from "../actions/apartment-details.action";

export interface ApartmentDetailState {
  apartment: Apartment,
}

export const initialState: ApartmentDetailState = {
  apartment: {} as Apartment,
};

export const apartmentDetailsReducer = createReducer(
  initialState,
  on(loadApartment, (state, { apartment }) => {
    return {
      ...state,
      apartment: apartment,
    };
  })
);
