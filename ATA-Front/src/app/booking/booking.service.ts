import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { from, Observable, throwError } from 'rxjs';
import { catchError, of } from 'rxjs';

import { Booking, BookingDTO } from './booking';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  //switch out these lines once swagger is running...
  //private musicUrl = 'http://localhost:7004/api/Music';
  private registerUrl = 'https://localhost:7004/api/Bookings';
  //private travelUrl = 'api/Flights';

private httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

constructor(private http: HttpClient) { }

getBookings(): Observable<Booking[]> {
  return this.http.get<Booking[]>(this.registerUrl, this.httpOptions);
}

getBooking(id: number): Observable<Booking> {
  let url = `${this.registerUrl}/${id}`;
  return this.http.get<Booking>(url, this.httpOptions);
}

createBooking(booking: Booking): Observable<Booking> {
  return this.http.post<Booking>(this.registerUrl, booking, this.httpOptions);
}

updateBooking(booking: Booking): Observable<Booking> {
  let url = `${this.registerUrl}/${booking.id}`;
  return this.http.put<Booking>(url, booking, this.httpOptions);
}

deleteBooking(id: Number): Observable<Booking> {
  return this.http.delete<Booking>(`${this.registerUrl}/${id}`, this.httpOptions);
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