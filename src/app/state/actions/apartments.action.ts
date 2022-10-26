import { createAction, props } from "@ngrx/store";
import { Apartment } from "src/app/models/apartment.model";

export const loadingApartments = createAction(
  '[Apartments] Loading Apartments',
);

export const loadApartments = createAction(
  '[Apartments] Load Apartments',
  props<{ apartments: Apartment[] }>()
);
 