import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Passenger } from '../passenger'; 
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { PersonService } from '../person.service'; 

     
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
      
  id!: number;
  passenger!: Passenger;
  form!: FormGroup;
    
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
   * @return response()
   */
  ngOnInit(): void {
    this.id = this.route.snapshot.params['postId'];
    this.personService.getPassenger(this.id).subscribe((data: Passenger)=>{
      this.passenger = data;
    }); 
      
    this.form = new FormGroup({
      // title: new FormControl('', [Validators.required]),
      // body: new FormControl('', Validators.required)
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      job: new FormControl('', Validators.required),
      age: new FormControl('', Validators.required)
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
    this.personService.updatePassenger(this.form.value).subscribe((res:any) => {
         console.log('Passenger updated successfully!');
         this.router.navigateByUrl('Passengers/index');
    })
  }
   
}