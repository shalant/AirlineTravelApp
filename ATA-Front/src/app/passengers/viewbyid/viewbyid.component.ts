import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PersonService } from '../person.service';
import { Passenger } from '../passenger';
    
@Component({
  selector: 'app-view',
  templateUrl: './viewbyid.component.html',
  styleUrls: ['./viewbyid.component.css']
})
export class ViewComponent implements OnInit {
     
  id!: number;
  passenger!: Passenger;
    
  /*------------------------------------------
  Created constructor
  --------------------------------------------*/
  constructor(
    public personService: PersonService,
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
        
    this.personService.getPassenger(this.id).subscribe((data: Passenger)=>{
      this.passenger = data;
    });
  }
    
}