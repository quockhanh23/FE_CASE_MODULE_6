import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ListEnterpriseOfAdminComponent} from "./list-enterprise-of-admin/list-enterprise-of-admin.component";
import {AdminRecruitmentsListComponent} from "./admin-recruitments-list/admin-recruitments-list.component";
import {AdminEnterpriseNoActiveComponent} from "./admin-enterprise-no-active/admin-enterprise-no-active.component";
import {AdminManagementComponent} from "./admin-management/admin-management.component";
import {AdminEnterpriseDetailComponent} from "./admin-enterprise-detail/admin-enterprise-detail.component";
import {AdminUsersListComponent} from "./admin-users-list/admin-users-list.component";
import {AdminCheckDetailUserComponent} from "./admin-check-detail-user/admin-check-detail-user.component";

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
  {
    path: 'listUser', component: AdminUsersListComponent
  },
  {
    path: 'userDetail/:id', component: AdminCheckDetailUserComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {
}
