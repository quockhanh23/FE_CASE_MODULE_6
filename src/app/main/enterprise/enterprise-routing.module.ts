import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {RecruitmentsListComponent} from "./recruitments/recruitments-list/recruitments-list.component";
import {RecruitmentsDetailsComponent} from "./recruitments/recruitments-details/recruitments-details.component";
import {HomePageEnterpriseComponent} from "./home-page-enterprise/home-page-enterprise.component";
import {RecruitmentsMyListComponent} from "./recruitments/recruitments-my-list/recruitments-my-list.component";
import {RecruitmentsCreateComponent} from "./recruitments/recruitments-create/recruitments-create.component";

const routes: Routes = [
  {
    path :'listJob',
    component: RecruitmentsListComponent
  },
  {
    path :'myListJob',
    component: RecruitmentsMyListComponent
  },
  {
    path :'listJob/:id/details',
    component: RecruitmentsDetailsComponent
  },
  {
    path :'create',
    component: RecruitmentsCreateComponent
  },
  {
    path :'home-page',
    component: HomePageEnterpriseComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EnterpriseRoutingModule { }
