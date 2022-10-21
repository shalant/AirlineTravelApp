import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PIndexComponent } from "./pindex/index.component";
import { PCreateComponent } from "./create/create.component";
import { EditComponent } from "./edit/edit.component";
import { ViewComponent } from "./viewbyid/viewbyid.component";

const routes: Routes = [
    { path: 'Passengers', redirectTo: 'Passengers/index', pathMatch: 'full' },
    { path: 'Passengers/index', component: PIndexComponent },
    { path: 'Passengers/create', component: PCreateComponent },
    { path: 'passenger/:id', component: ViewComponent },
    { path: 'Passengers/edit/:id', component: EditComponent },

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PersonRoutingModule {}