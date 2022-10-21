import { Component, OnInit } from '@angular/core';
import { PersonService } from '../person.service';
import { Passenger } from '../passenger';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class PIndexComponent implements OnInit {
  passengers: Passenger[] = [];

//ask angular to inject our musicService
  constructor(private personService: PersonService) { }

  // initialization of the component
  ngOnInit(): void {
    this.retrievePassengers();
  }

  retrievePassengers(): void {
    this.personService.getPassengers().subscribe(passengers => this.passengers = passengers);
  }

  deletePassenger(id:number) {
    this.personService.deletePassenger(id).subscribe(res => {
      this.passengers = this.passengers.filter(item => item.id !==id);
      console.log("Passenger deleted successfully")
    })
  }

  // deletePassenger(id: Number): Observable<Passenger> {
  //   return this.http.delete<Passenger>(`${this.personUrl}/${id}`, this.httpOptions);
  // }

}

// provide a way 
// retrieveSongs() : void {
//   this.musicService.getSongs().subscribe(songs => this.songs = songs);
// }