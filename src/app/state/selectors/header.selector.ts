import { createSelector } from '@ngrx/store';
import { AppState } from '../app.state';
 

export const selectApartmentState = (state: AppState) => state.headerStates;

export const selectDarkMode = createSelector(
  selectApartmentState,
  (state: boolean) => {
    return state;
  }
);
