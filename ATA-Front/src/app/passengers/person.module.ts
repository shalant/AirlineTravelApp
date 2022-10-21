import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { PersonRoutingModule } from './person-routing.module';
import { PIndexComponent } from './pindex/index.component';
import { PCreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';
import { ViewComponent } from './viewbyid/viewbyid.component';

@NgModule({
  declarations: [
    PIndexComponent,
    PCreateComponent,
    EditComponent,
    ViewComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    PersonRoutingModule
  ]
})
export class PersonModule { }