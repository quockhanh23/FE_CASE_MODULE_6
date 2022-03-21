import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ListEnterpriseOfAdminComponent} from "./list-enterprise-of-admin/list-enterprise-of-admin.component";
import {AdminRecruitmentsListComponent} from "./admin-recruitments-list/admin-recruitments-list.component";
import {AdminEnterpriseNoActiveComponent} from "./admin-enterprise-no-active/admin-enterprise-no-active.component";
import {AdminManagementComponent} from "./admin-management/admin-management.component";
import {AdminEnterpriseDetailComponent} from "./admin-enterprise-detail/admin-enterprise-detail.component";

const routes: Routes = [
  {
    path: 'list', component: ListEnterpriseOfAdminComponent
  },
  {
    path: 'listJob', component: AdminRecruitmentsListComponent
  },
  {
    path: 'listNoActive', component: AdminEnterpriseNoActiveComponent
  },
  {
    path: 'adminDetail', component: AdminManagementComponent
  },
  {
    path: 'listEnterprise/:id', component: AdminEnterpriseDetailComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {
}
