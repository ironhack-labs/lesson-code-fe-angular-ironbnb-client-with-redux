import { createSelector } from '@ngrx/store';
import { AppState } from '../app.state';
import { CreateApartmentState } from '../reducers/create-apartments.reducer';
 

export const selectCreateApartmentState = (state: AppState) => state.createApartmentStates;

export const selectCreateApartmentSuccess = createSelector(
  selectCreateApartmentState,
  (state: CreateApartmentState) => {
    return state.created;
  }
);