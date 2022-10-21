import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { TravelRoutingModule } from './travel-routing.module';
import { FIndexComponent } from './findex/index.component';
import { FCreateComponent } from './create/create.component';
import { ViewComponent } from './viewbyid/viewbyid.component';
import { EditComponent } from './edit/edit.component';
// import { EditComponent } from '../passengers/edit/edit.component';
// import { DeleteComponent } from '../passengers/delete/delete.component';
// import { ViewComponent } from '../passengers/viewbyid/viewbyid.component';

@NgModule({
  declarations: [
    FIndexComponent,
    FCreateComponent,
    ViewComponent,
    EditComponent,
    // EditComponent,
    // DeleteComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    TravelRoutingModule
  ]
})
export class TravelModule { }