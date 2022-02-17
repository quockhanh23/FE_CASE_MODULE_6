import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import {UserDetailComponent} from "./user-detail/user-detail.component";
import { UserEditCvComponent } from './user-edit-cv/user-edit-cv.component';
import {ReactiveFormsModule} from "@angular/forms";
import { UserListCvComponent } from './user-list-cv/user-list-cv.component';
import {MatButtonModule} from "@angular/material/button";
import {NgbTooltipModule} from "@ng-bootstrap/ng-bootstrap";
import { UserDetailCvComponent } from './user-detail-cv/user-detail-cv.component';



@NgModule({
  declarations: [
    UserDetailComponent,
    UserEditCvComponent,
    UserListCvComponent,
    UserDetailCvComponent,

  ],
  exports: [
    UserDetailComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    ReactiveFormsModule,
    MatButtonModule,
    NgbTooltipModule,
  ]
})
export class UserModule { }
