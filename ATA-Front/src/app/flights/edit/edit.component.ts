import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Flight } from '../flight'; 
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { TravelService } from '../travel.service'; 

     
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
      
  id!: number;
  flight!: Flight;
  form!: FormGroup;
    
  /*------------------------------------------
  Created constructor
  --------------------------------------------*/
  constructor(
    public travelService: TravelService,
    private route: ActivatedRoute,
    private router: Router
  ) { }
    
  /**
   * Write code on Method
   * @return response()
   */
  ngOnInit(): void {
    this.id = this.route.snapshot.params['postId'];
    this.travelService.getFlight(this.id).subscribe((data: Flight)=>{
      this.flight = data;
    }); 
      
    this.form = new FormGroup({
      // title: new FormControl('', [Validators.required]),
      // body: new FormControl('', Validators.required)
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
    
  /**
   * Write code on Method
   *
   * @return response()
   */
  get f(){
    return this.form.controls;
  }
    
  /**
   * Write code on Method
   *
   * @return response()
   */
  submit(){
    console.log(this.form.value);
    this.travelService.updateFlight(this.form.value).subscribe((res:any) => {
         console.log('Flight updated successfully!');
         this.router.navigateByUrl('Flights/index');
    })
  }
   
}