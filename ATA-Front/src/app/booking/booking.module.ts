import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RegisterRoutingModule } from './booking-routing.module';
import { BindexComponent } from './bindex/bindex.component';
import { BCreateComponent } from './create/create.component';
import { ViewComponent } from './view-by-id/view-by-id.component';
import { EditComponent } from './edit/edit.component';

@NgModule({
  declarations: [
    BindexComponent,
    BCreateComponent,
    ViewComponent,
    EditComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RegisterRoutingModule
  ]
})
export class RegisterModule { }
