import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Apartment } from 'src/app/models/apartment.model';
import { loadingApartments } from 'src/app/state/actions/apartments.action';
import { AppState } from 'src/app/state/app.state';
import { selectApartments, selectLoading } from 'src/app/state/selectors/apartments.selector';
import { selectDarkMode } from 'src/app/state/selectors/header.selector';

@Component({
  selector: 'app-apartment-list',
  templateUrl: './apartment-list.component.html',
  styleUrls: ['./apartment-list.component.css']
})
export class ApartmentListComponent implements OnInit {
  loading$: Observable<boolean>;
  apartments$: Observable<Apartment[]>;

  darkMode$: Observable<boolean>;

  constructor(
    private store: Store<AppState>,
  ) {
    this.loading$ = new Observable<boolean>();
    this.apartments$ = new Observable<Apartment[]>();
    this.darkMode$ = new Observable<boolean>();
  }

  ngOnInit(): void {

    this.loading$ = this.store.select(selectLoading);
    this.apartments$ = this.store.select(selectApartments);
    this.darkMode$ = this.store.select(selectDarkMode);

    this.store.dispatch(loadingApartments());
   
  }

}
