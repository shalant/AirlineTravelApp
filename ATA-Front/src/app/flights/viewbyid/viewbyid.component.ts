import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Flight } from '../flight';
import { TravelService } from '../travel.service';
    
@Component({
  selector: 'app-view',
  templateUrl: './viewbyid.component.html',
  styleUrls: ['./viewbyid.component.css']
})
export class ViewComponent implements OnInit {
     
  id!: number;
  flight!: Flight;
    
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
   *
   * @return response()
   */
  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
        
    this.travelService.getFlight(this.id).subscribe((data: Flight)=>{
      this.flight = data;
    });
  }
    
}