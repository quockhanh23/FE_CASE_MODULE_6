import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import {HttpClientModule} from "@angular/common/http";
import {ReactiveFormsModule} from "@angular/forms";
import {LoginUserComponent} from "./login-user/login-user.component";
import {LoginEnterpriseComponent} from "./login-enterprise/login-enterprise.component";
import {MatFormFieldModule} from "@angular/material/form-field";
import {ListEnterpriseOfAdminComponent} from "../main/admin/list-enterprise-of-admin/list-enterprise-of-admin.component";


@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    LoginRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatFormFieldModule,
  ]
})
export class LoginModule { }
