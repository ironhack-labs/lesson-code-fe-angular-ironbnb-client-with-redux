import { createSelector } from '@ngrx/store';
import { AppState } from '../app.state';
import { ApartmentState } from '../reducers/apartments.reducer';
 

export const selectApartmentState = (state: AppState) => state.apartmentStates;

export const selectApartments = createSelector(
  selectApartmentState,
  (state: ApartmentState) => {
    return state.apartments;
  }
);

export const selectLoading = createSelector(
  selectApartmentState,
  (state: ApartmentState) => {
    return state.loading;
  }
);
