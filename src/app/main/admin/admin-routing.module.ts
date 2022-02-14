import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ListEnterpriseOfAdminComponent} from "./list-enterprise-of-admin/list-enterprise-of-admin.component";
import {AdminRecruitmenttsListComponent} from "./admin-recruitmentts-list/admin-recruitmentts-list.component";

const routes: Routes = [
  {
    path: 'list', component: ListEnterpriseOfAdminComponent
  },
  {
    path: 'listJob', component: AdminRecruitmenttsListComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
