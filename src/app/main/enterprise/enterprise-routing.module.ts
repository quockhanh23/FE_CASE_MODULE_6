import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {RecruitmentsListComponent} from "./recruitments/recruitments-list/recruitments-list.component";
import {RecruitmentsDetailsComponent} from "./recruitments/recruitments-details/recruitments-details.component";
import {HomePageEnterpriseComponent} from "./home-page-enterprise/home-page-enterprise.component";
import {RecruitmentsMyListComponent} from "./recruitments/recruitments-my-list/recruitments-my-list.component";
import {RecruitmentsCreateComponent} from "./recruitments/recruitments-create/recruitments-create.component";
import {EnterpriseEditComponent} from "./enterprise-edit/enterprise-edit.component";
import {EnterpriseDetailComponent} from "./enterprise-detail/enterprise-detail.component";
import {RecruitmentEditComponent} from "./recruitments/recruitment-edit/recruitment-edit.component";

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
    path :':id/edit',
    component: RecruitmentEditComponent
  },
  {
    path :'home-page',
    component: HomePageEnterpriseComponent
  },
  {
    path :'edit',
    component: EnterpriseEditComponent
  },
  {
    path :'detail',
    component: EnterpriseDetailComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EnterpriseRoutingModule { }
