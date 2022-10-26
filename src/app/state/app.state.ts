import { ActionReducerMap } from "@ngrx/store";
import { apartmentDetailsReducer, ApartmentDetailState } from "./reducers/apartment-details.reducer";
import { apartmentsReducer, ApartmentState } from "./reducers/apartments.reducer";
import { createApartmentReducer, CreateApartmentState } from "./reducers/create-apartments.reducer";
import { headerReducer } from "./reducers/header.reducer";

export interface AppState {
  apartmentStates: ApartmentState;
  apartmentDetailStates: ApartmentDetailState;
  createApartmentStates: CreateApartmentState;
  headerStates: boolean
}

export const ROOT_REDUCERS: ActionReducerMap<AppState> = {
  apartmentStates: apartmentsReducer,
  apartmentDetailStates: apartmentDetailsReducer,
  createApartmentStates: createApartmentReducer,
  headerStates: headerReducer
};