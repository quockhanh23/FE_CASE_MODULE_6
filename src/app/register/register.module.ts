import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegisterRoutingModule } from './register-routing.module';
import { UserComponent } from './user/user.component';
import { EnterpriseComponent } from './enterprise/enterprise.component';
import {AppModule} from "../app.module";
import {HttpClientModule} from "@angular/common/http";
import {ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    UserComponent,
    EnterpriseComponent,
  ],
    imports: [
        CommonModule,
        RegisterRoutingModule,
        HttpClientModule,
        ReactiveFormsModule,
    ]
})
export class RegisterModule { }
