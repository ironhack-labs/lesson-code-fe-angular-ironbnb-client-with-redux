import { createAction, props } from "@ngrx/store";
import { Apartment } from "src/app/models/apartment.model";

export const initCreateApartment = createAction(
  '[Create Apartment] Init Create Apartment',
);

export const createApartment = createAction(
  '[Create Apartment] Create Apartment',
    props<{ apartment: Apartment }>()
);

export const createApartmentSuccess = createAction(
  '[Create Apartment] Create Apartment Success',
);

export const createApartmentFailure = createAction(
  '[Create Apartment] Create Apartment Failure',
);