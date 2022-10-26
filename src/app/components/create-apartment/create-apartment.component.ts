import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable, take } from 'rxjs';
import { createApartment, initCreateApartment } from 'src/app/state/actions/create-apartments.action';
import { AppState } from 'src/app/state/app.state';
import { selectCreateApartmentSuccess } from 'src/app/state/selectors/create-apartment.selector';
import { selectDarkMode } from 'src/app/state/selectors/header.selector';

@Component({
  selector: 'app-create-apartment',
  templateUrl: './create-apartment.component.html',
  styleUrls: ['./create-apartment.component.css']
})
export class CreateApartmentComponent implements OnInit {
  
  darkMode$: Observable<boolean>;
  createApartmentSuccess$: Observable<boolean>;

  createForm: FormGroup;
  titleInput: FormControl;
  pricePerDayInput: FormControl;
  imgInput: FormControl;



  constructor(
    private store: Store<AppState>,
    private router: Router,
  ) {
    this.darkMode$ = new Observable();
    this.createApartmentSuccess$ = new Observable();

    this.titleInput = new FormControl('', [Validators.required]);
    this.pricePerDayInput = new FormControl('', [Validators.required]);
    this.imgInput = new FormControl('', [Validators.required]);
    this.createForm = new FormGroup({
      title: this.titleInput,
      pricePerDay: this.pricePerDayInput,
      img: this.imgInput
    });

  }
  
  ngOnInit(): void {

    this.darkMode$ = this.store.select(selectDarkMode);
    
    this.createApartmentSuccess$ = this.store.select(selectCreateApartmentSuccess);

    this.store.dispatch(initCreateApartment());

  }

  createApartment(): void {
    // Create apartment
    this.store.dispatch(createApartment({ apartment: this.createForm.value}));

    // Check if apartment was created
    this.createApartmentSuccess$.subscribe(success => {
      if (success) {
        alert('Apartment created successfully!');
        // Navigate to home
        this.router.navigate(['/']);
      } else {
        console.log('fail');
      }
    });

  }

}
