import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { RegisterService } from '../booking.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class BCreateComponent implements OnInit {
  public newBookingForm!: FormGroup

  constructor(
    private registerService: RegisterService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.newBookingForm = new FormGroup({
      confirmationNumber: new FormControl('', Validators.required),
      flightId: new FormControl('', Validators.required),
      passengerId: new FormControl('', Validators.required)
    });
  }

  get f() { return this.newBookingForm.controls; }

  submit(){
    this.registerService.createBooking(this.newBookingForm.value).subscribe(() => {
      console.log(this.newBookingForm.value);
      console.log(this.newBookingForm.valid);
      console.log("Booking created successfully");
      this.router.navigateByUrl('Bookings/index');
    });   
  }
}
