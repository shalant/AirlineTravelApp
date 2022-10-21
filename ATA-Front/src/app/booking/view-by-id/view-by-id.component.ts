import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RegisterService } from '../booking.service'; 
import { Booking } from '../booking';
    
@Component({
  selector: 'app-view',
  templateUrl: './view-by-id.component.html',
  styleUrls: ['./view-by-id.component.css']
})
export class ViewComponent implements OnInit {
     
  id!: number;
  booking!: Booking;
    
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
   *
   * @return response()
   */
  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
        
    this.registerService.getBooking(this.id).subscribe((data: Booking)=>{
      this.booking = data;
    });
  }
    
}