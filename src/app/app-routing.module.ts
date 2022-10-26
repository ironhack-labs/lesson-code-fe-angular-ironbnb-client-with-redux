import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApartmentDetailsComponent } from './components/apartment-details/apartment-details.component';
import { ApartmentListComponent } from './components/apartment-list/apartment-list.component';
import { CreateApartmentComponent } from './components/create-apartment/create-apartment.component';

const routes: Routes = [
  {
    path: '',
    component: ApartmentListComponent
  },
  {
    path: 'apartments/create',
    component: CreateApartmentComponent
  },
  {
    path: 'apartments/:id',
    component: ApartmentDetailsComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
