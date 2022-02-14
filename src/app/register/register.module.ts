import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegisterRoutingModule } from './register-routing.module';
import { UserComponent } from './user/user.component';
import { EnterpriseComponent } from './enterprise/enterprise.component';
import {AppModule} from "../app.module";
import {HttpClientModule} from "@angular/common/http";
import {ReactiveFormsModule} from "@angular/forms";
import {MatButtonModule} from "@angular/material/button";
import {MatTooltipModule} from "@angular/material/tooltip";
import {MaterialModule} from "../material/material.module";
import {NgbTooltipModule} from "@ng-bootstrap/ng-bootstrap";


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
        MatButtonModule,
        MatTooltipModule,
        MaterialModule,
        NgbTooltipModule,
    ]
})
export class RegisterModule { }
