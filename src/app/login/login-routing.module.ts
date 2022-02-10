import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginUserComponent} from "./login-user/login-user.component";
import {LoginEnterpriseComponent} from "./login-enterprise/login-enterprise.component";

const routes: Routes = [
  {
    path: 'user',
    component: LoginUserComponent
  },
  {
    path: 'enterprise',
    component: LoginEnterpriseComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule {
}
