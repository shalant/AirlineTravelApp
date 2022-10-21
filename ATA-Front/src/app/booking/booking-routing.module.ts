import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { BindexComponent } from './bindex/bindex.component';
import { BCreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';
import { ViewComponent } from './view-by-id/view-by-id.component';

const routes: Routes = [
  { path: 'Bookings', redirectTo: 'Bookings/index', pathMatch: 'full' },
  { path: 'Bookings/index', component: BindexComponent },
  { path: 'Bookings/create', component: BCreateComponent },
  { path: 'booking/:id', component: ViewComponent },
  { path: 'Bookings/edit/:id', component: EditComponent },
]

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [RouterModule]
})
export class RegisterRoutingModule { }
