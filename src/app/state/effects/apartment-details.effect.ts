import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { map, mergeMap } from "rxjs";
import { IronbnbAPIService } from "src/app/services/ironbnb-api.service";
import { loadApartment, loadingApartment } from "../actions/apartment-details.action";

@Injectable()
export class ApartmentDetailsEffects {
  constructor(
    private actions$: Actions,
    private ironbnbAPIService: IronbnbAPIService
  ) {}

  loadingApartment$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(loadingApartment),
      mergeMap(action => this.ironbnbAPIService.getApartmentById(action.id) // return the data from the API
        .pipe( // success case
          map(apartment => loadApartment({ apartment }) // dispatch the loadAparment action
          )
        ),
      )
    );
  });
}
