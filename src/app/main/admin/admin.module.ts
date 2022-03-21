import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import {EditStatusEnterpriseComponent} from "./edit-status-enterprise/edit-status-enterprise.component";
import {ListEnterpriseOfAdminComponent} from "./list-enterprise-of-admin/list-enterprise-of-admin.component";
import {MatCardModule} from "@angular/material/card";
import {NgbTooltipModule} from "@ng-bootstrap/ng-bootstrap";
import {MatButtonModule} from "@angular/material/button";
import { AdminRecruitmentsListComponent } from './admin-recruitments-list/admin-recruitments-list.component';
import { AdminManagementComponent } from './admin-management/admin-management.component';
import { WeatherComponent } from './weather/weather.component';
import { AdminEnterpriseDetailComponent } from './admin-enterprise-detail/admin-enterprise-detail.component';


@NgModule({
  declarations: [
    EditStatusEnterpriseComponent,
    ListEnterpriseOfAdminComponent,
    AdminRecruitmentsListComponent,
    AdminManagementComponent,
    WeatherComponent,
    AdminEnterpriseDetailComponent
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
