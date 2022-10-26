import { createAction, props } from "@ngrx/store";
import { Apartment } from "src/app/models/apartment.model";

export const loadingApartment = createAction(
  '[Apartments] Loading Apartment',
  props<{ id: string }>()
);

export const loadApartment = createAction(
  '[Apartments] Load Apartment',
  props<{ apartment: Apartment }>()
);