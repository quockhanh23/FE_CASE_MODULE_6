import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {UserDetailComponent} from "./user-detail/user-detail.component";
import {UserCreateCvComponent} from "./user-create-cv/user-create-cv.component";
import {UserListCvComponent} from "./user-list-cv/user-list-cv.component";
import {UserCheckDetailEnterpriseComponent} from "./user-check-detail-enterprise/user-check-detail-enterprise.component";

const routes: Routes = [
  {
    path: 'detail/:id',
    component: UserDetailComponent
  },
  {
    path: 'create',
    component: UserCreateCvComponent
  },
  {
    path: 'ListCv',
    component: UserListCvComponent
  },
  {
    path: 'detailEnterprise/:id',
    component: UserCheckDetailEnterpriseComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule {
}
