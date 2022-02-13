import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {RecruitmentsListComponent} from "./recruitments/recruitments-list/recruitments-list.component";
import {RecruitmentsDetailsComponent} from "./recruitments/recruitments-details/recruitments-details.component";
import {RecruitmentsCreateComponent} from "./recruitments/recruitments-create/recruitments-create.component";

const routes: Routes = [
  {
    path :'listJob',
    component: RecruitmentsListComponent
  },
  {
    path :'listJob/:id/details',
    component: RecruitmentsDetailsComponent
  },
  {
    path :'create',
    component: RecruitmentsCreateComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EnterpriseRoutingModule { }
