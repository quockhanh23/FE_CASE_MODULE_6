import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import {UserDetailComponent} from "./user-detail/user-detail.component";
import { UserEditCvComponent } from './user-edit-cv/user-edit-cv.component';
import {ReactiveFormsModule} from "@angular/forms";
import { UserListCvComponent } from './user-list-cv/user-list-cv.component';



@NgModule({
  declarations: [
    UserDetailComponent,
    UserEditCvComponent,
    UserListCvComponent,

  ],
  exports: [
    UserDetailComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    ReactiveFormsModule,
  ]
})
export class UserModule { }
