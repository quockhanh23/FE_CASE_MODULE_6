import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {UserDetailComponent} from "./user-detail/user-detail.component";
import {UserCreateCvComponent} from "./user-create-cv/user-create-cv.component";

const routes: Routes = [
  {
    path :'detail/:id',
    component: UserDetailComponent
  },
  {
    path :'create',
    component: UserCreateCvComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
