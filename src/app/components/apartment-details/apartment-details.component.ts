import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { Apartment } from 'src/app/models/apartment.model';
import { AppState } from 'src/app/state/app.state';
import { selectApartment } from 'src/app/state/selectors/apartment-details.selector';
import { loadingApartment } from 'src/app/state/actions/apartment-details.action';
import { selectDarkMode } from 'src/app/state/selectors/header.selector';

@Component({
  selector: 'app-apartment-details',
  templateUrl: './apartment-details.component.html',
  styleUrls: ['./apartment-details.component.css']
})
export class ApartmentDetailsComponent implements OnInit {

  id: string;
  apartment$: Observable<Apartment>;
  darkMode$: Observable<boolean>;


  constructor(
    private route: ActivatedRoute,
    private store: Store<AppState>,
    private router: Router,
  ) {
    this.id = '';
    this.apartment$ = new Observable<Apartment>();
    this.darkMode$ = new Observable<boolean>();
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.apartment$ = this.store.select(selectApartment);
    this.darkMode$ = this.store.select(selectDarkMode);

    this.store.dispatch(loadingApartment({ id: this.id }));
  }

}
