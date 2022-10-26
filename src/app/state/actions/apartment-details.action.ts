import { createAction, props } from "@ngrx/store";
import { Apartment } from "src/app/models/apartment.model";

export const loadingApartment = createAction(
  '[Apartment Details] Loading Apartment',
  props<{ id: string }>()
);

export const loadApartment = createAction(
  '[Apartment Details] Load Apartment',
  props<{ apartment: Apartment }>()
);