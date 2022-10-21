import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { FIndexComponent } from "./findex/index.component";
import { FCreateComponent } from "./create/create.component";
import { ViewComponent } from "./viewbyid/viewbyid.component";
import { EditComponent } from "./edit/edit.component";

const routes: Routes = [
    { path: 'Flights', redirectTo: 'Flights/index', pathMatch: 'full' },
    { path: 'Flights/index', component: FIndexComponent },
    { path: 'Flights/create', component: FCreateComponent },
    { path: 'flight/:id', component: ViewComponent },
    { path: 'flight/edit/:id', component: EditComponent },
    // { path: 'Flights/edit', component: EditComponent },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class TravelRoutingModule {}