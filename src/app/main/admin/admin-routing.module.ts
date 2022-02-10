import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ListEnterpriseOfAdminComponent} from "./list-enterprise-of-admin/list-enterprise-of-admin.component";

const routes: Routes = [
  {
    path: 'list', component: ListEnterpriseOfAdminComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
