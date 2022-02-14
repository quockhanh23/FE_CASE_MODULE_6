import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import {EditStatusEnterpriseComponent} from "./edit-status-enterprise/edit-status-enterprise.component";
import {ListEnterpriseOfAdminComponent} from "./list-enterprise-of-admin/list-enterprise-of-admin.component";
import {MatCardModule} from "@angular/material/card";
import {NgbTooltipModule} from "@ng-bootstrap/ng-bootstrap";
import {MatButtonModule} from "@angular/material/button";
import { AdminRecruitmenttsListComponent } from './admin-recruitmentts-list/admin-recruitmentts-list.component';


@NgModule({
  declarations: [
    EditStatusEnterpriseComponent,
    ListEnterpriseOfAdminComponent,
    AdminRecruitmenttsListComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MatCardModule,
    NgbTooltipModule,
    MatButtonModule
  ]
})
export class AdminModule { }
