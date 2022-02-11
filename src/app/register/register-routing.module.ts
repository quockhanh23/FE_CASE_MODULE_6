import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {EnterpriseComponent} from "./enterprise/enterprise.component";
import {UserComponent} from "./user/user.component";

const routes: Routes = [
  {
    path: 'enterprise',
    component: EnterpriseComponent
  },
  {
    path: 'user',
    component: UserComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegisterRoutingModule { }
