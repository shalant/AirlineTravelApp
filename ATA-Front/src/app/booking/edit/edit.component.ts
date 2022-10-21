import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Booking } from '../booking'; 
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { RegisterService } from '../booking.service'; 

     
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
      
  id!: number;
  booking!: Booking;
  form!: FormGroup;
    
  /*------------------------------------------
  Created constructor
  --------------------------------------------*/
  constructor(
    public registerService: RegisterService,
    private route: ActivatedRoute,
    private router: Router
  ) { }
    
  /**
   * Write code on Method
   * @return response()
   */
  ngOnInit(): void {
    this.id = this.route.snapshot.params['postId'];
    this.registerService.getBooking(this.id).subscribe((data: Booking)=>{
      this.booking = data;
    }); 
      
    this.form = new FormGroup({
      confirmationNumber: new FormControl('', Validators.required),
      flightId: new FormControl('', Validators.required),
      passengerId: new FormControl('', Validators.required)
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
    this.registerService.updateBooking(this.form.value).subscribe((res:any) => {
         console.log('Booking updated successfully!');
         this.router.navigateByUrl('Bookings/index');
    })
  }
   
}