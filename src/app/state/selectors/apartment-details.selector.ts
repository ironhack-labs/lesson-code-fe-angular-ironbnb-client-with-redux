import { createSelector } from '@ngrx/store';
import { AppState } from '../app.state';
import { ApartmentDetailState } from '../reducers/apartment-details.reducer';
 

export const selectApartmentDetailState = (state: AppState) => state.apartmentDetailStates;

export const selectApartment = createSelector(
  selectApartmentDetailState,
  (state: ApartmentDetailState) => {
    return state.apartment;
  }
);