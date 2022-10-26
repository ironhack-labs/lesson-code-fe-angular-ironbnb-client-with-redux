import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { concatMap, map } from "rxjs";
import { IronbnbAPIService } from "src/app/services/ironbnb-api.service";
import { createApartment, createApartmentSuccess } from "../actions/create-apartments.action";

@Injectable()
export class CreateApartmentEffects {
  constructor(
    private actions$: Actions,
    private ironbnbAPIService: IronbnbAPIService
  ) {}

  createApartment$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(createApartment),
      concatMap(action => this.ironbnbAPIService.createApartment(action.apartment) // Create the apartment
        .pipe(
          map(result => createApartmentSuccess() // dispatch the createApartmentSuccess action
          )
        ),
      )
    );
   
  });
}
