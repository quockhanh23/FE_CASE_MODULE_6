import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import {UserDetailComponent} from "./user-detail/user-detail.component";
import { UserCreateCvComponent } from './user-create-cv/user-create-cv.component';


@NgModule({
  declarations: [
    UserDetailComponent,
    UserCreateCvComponent
  ],
  exports: [
    UserDetailComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,

  ]
})
export class UserModule { }
