import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { PersonService } from '../person.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class PCreateComponent implements OnInit {
  public newPassengerForm!: FormGroup

  constructor(
    private personService: PersonService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.newPassengerForm = new FormGroup({
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      job: new FormControl('', Validators.required),
      age: new FormControl('', Validators.required),
      
    });
  }

  get f() { return this.newPassengerForm.controls; }

  submit(){
    this.personService.createPassenger(this.newPassengerForm.value).subscribe(() => {
      console.log(this.newPassengerForm.value);
      console.log(this.newPassengerForm.valid);
      console.log("Passenger created successfully");
      this.router.navigateByUrl('Passengers/index');
    });   
  }
}
