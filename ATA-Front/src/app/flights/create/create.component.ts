import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { TravelService } from '../travel.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class FCreateComponent implements OnInit {
  public newFlightForm!: FormGroup

  constructor(
    private travelService: TravelService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.newFlightForm = new FormGroup({
      flightNumber: new FormControl('', Validators.required),
      departureDate: new FormControl('', Validators.required),
      arrivalDate: new FormControl('', Validators.required),
      departureTime: new FormControl('', Validators.required),
      arrivalTime: new FormControl('', Validators.required),
      departureAirport: new FormControl('', Validators.required),
      arrivalAirport: new FormControl('', Validators.required),
      passengerLimit: new FormControl('', Validators.required)
    });
  }

  get f() { return this.newFlightForm.controls; }

  submit(){
    this.travelService.createFlight(this.newFlightForm.value).subscribe(() => {
      console.log(this.newFlightForm.value);
      console.log(this.newFlightForm.valid);
      console.log("Flight created successfully");
      this.router.navigateByUrl('Flights/index');
    });   
  }
}
