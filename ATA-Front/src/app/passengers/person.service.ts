import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { from, Observable, throwError } from 'rxjs';
import { catchError, of } from 'rxjs';

import { Passenger, PassengerDTO } from './passenger';

@Injectable({
  providedIn: 'root'
})
export class PersonService {
  //switch out these lines once swagger is running...
  //private musicUrl = 'http://localhost:7004/api/Music';
  private personUrl = 'https://localhost:7004/api/Passengers';
  //private travelUrl = 'api/Flights';

private httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

constructor(private http: HttpClient) { }

getPassengers(): Observable<Passenger[]> {
  return this.http.get<Passenger[]>(this.personUrl, this.httpOptions);
}

getPassenger(id: number): Observable<Passenger> {
  let url = `${this.personUrl}/${id}`;
  return this.http.get<Passenger>(url, this.httpOptions);
}

createPassenger(passenger: Passenger): Observable<Passenger> {
  return this.http.post<Passenger>(this.personUrl, passenger, this.httpOptions);
}

updatePassenger(passenger: Passenger): Observable<Passenger> {
  let url = `${this.personUrl}/${passenger.id}`;
  return this.http.put<Passenger>(url, passenger, this.httpOptions);
}

deletePassenger(id: Number): Observable<Passenger> {
  return this.http.delete<Passenger>(`${this.personUrl}/${id}`, this.httpOptions);
}

// errorHandler(error: any, caught: Observable<Flight[]>) {
//   let errorMessage = '';
//   if (error.error instanceof ErrorEvent) {
//     // get client side error
//     errorMessage = error.error.message;
//   } else {
//     errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
//     return throwError(() => new Error(errorMessage));
//   }
// }

}