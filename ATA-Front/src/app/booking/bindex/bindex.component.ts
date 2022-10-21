import { Component, OnInit } from '@angular/core';
import { RegisterService } from '../booking.service';
import { Booking } from '../booking';

@Component({
  selector: 'app-bindex',
  templateUrl: './bindex.component.html',
  styleUrls: ['./bindex.component.css']
})
export class BindexComponent implements OnInit {
  bookings: Booking[] = [];

 //ask angular to inject our registerService
 constructor(private registerService: RegisterService) { }

 // initialization of the component
 ngOnInit(): void {
   this.retrieveBookings();
 }

 retrieveBookings(): void {
   this.registerService.getBookings().subscribe(bookings => this.bookings = bookings);
 }

 deleteBooking(id:number) {
   this.registerService.deleteBooking(id).subscribe(res => {
     this.bookings = this.bookings.filter(item => item.id !==id);
     console.log("Booking deleted successfully")
   })
 }
}

// provide a way 
// retrieveSongs() : void {
//   this.musicService.getSongs().subscribe(songs => this.songs = songs);
// }