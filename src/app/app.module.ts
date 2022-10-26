import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { AppComponent } from './app.component';
import { ApartmentListComponent } from './components/apartment-list/apartment-list.component';
import { HeaderComponent } from './components/header/header.component';
import { ROOT_REDUCERS } from './state/app.state';
import { EffectsModule } from '@ngrx/effects';
import { ApartmentsEffects } from './state/effects/apartments.effect';
import { AppRoutingModule } from './app-routing.module';
import { ApartmentDetailsComponent } from './components/apartment-details/apartment-details.component';
import { ApartmentDetailsEffects } from './state/effects/apartment-details.effect';
import { CreateApartmentComponent } from './components/create-apartment/create-apartment.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CreateApartmentEffects } from './state/effects/create-apartment.effect';

@NgModule({
  declarations: [
    AppComponent,
    ApartmentListComponent,
    HeaderComponent,
    ApartmentDetailsComponent,
    CreateApartmentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    StoreModule.forRoot(ROOT_REDUCERS),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    EffectsModule.forRoot([ApartmentsEffects, ApartmentDetailsEffects, CreateApartmentEffects])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
