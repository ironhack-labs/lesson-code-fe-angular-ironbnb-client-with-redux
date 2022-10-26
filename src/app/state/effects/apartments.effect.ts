import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { exhaustMap, map } from "rxjs";
import { IronbnbAPIService } from "src/app/services/ironbnb-api.service";
import { loadApartments, loadingApartments } from "../actions/apartments.action";

@Injectable()
export class ApartmentsEffects {
  constructor(
    private actions$: Actions,
    private ironbnbAPIService: IronbnbAPIService
  ) {}

  loadingApartments$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(loadingApartments),
      exhaustMap(() => this.ironbnbAPIService.getApartments() // return the data from the API
        .pipe( // success case
          map(apartments => loadApartments({ apartments }) // dispatch the loadAparments action
          )
        ),
      )
    );
  });
}
