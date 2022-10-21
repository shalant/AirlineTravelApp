import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PIndexComponent } from "./passengers/pindex/index.component";
// import { PCreateComponent } from './passengers/create/create.component';
import { FIndexComponent } from "./flights/findex/index.component";
// import { FCreateComponent } from "./flights/create/create.component";
import { BindexComponent } from './booking/bindex/bindex.component';

const routes: Routes = [
  { path: '', redirectTo: 'index', pathMatch: 'full' },
  { path: 'Flights', component: FIndexComponent },
  // { path: 'Flights/create', component: FCreateComponent },
  { path: 'Passengers', component: PIndexComponent },
  // { path: 'Passengers/create', component: PCreateComponent },
  { path: 'Bookings', component: BindexComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
