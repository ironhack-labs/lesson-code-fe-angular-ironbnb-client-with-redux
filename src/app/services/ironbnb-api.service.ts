import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Apartment } from '../models/apartment.model';
import { delay, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class IronbnbAPIService {

  readonly BASE_URL = 'https://ironbnb-m3.herokuapp.com';

  constructor(private http: HttpClient) { }

  getApartments(): Observable<Apartment[]> {
    return this.http.get<Apartment[]>(`${this.BASE_URL}/apartments`).pipe(
      delay(1500)
    );
  }

  getApartmentById(id: string): Observable<Apartment> {
    return this.http.get<Apartment>(`${this.BASE_URL}/apartments/${id}`);
  }

  createApartment(apartment: Apartment): Observable<Apartment> {
    console.log('sending', apartment);
    return this.http.post<Apartment>(`${this.BASE_URL}/apartments`, apartment);
  }
}
