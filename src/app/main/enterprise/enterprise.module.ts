import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EnterpriseRoutingModule } from './enterprise-routing.module';
import { RecruitmentsListComponent } from './recruitments/recruitments-list/recruitments-list.component';
import { RecruitmentsDetailsComponent } from './recruitments/recruitments-details/recruitments-details.component';
import { HomePageEnterpriseComponent } from './home-page-enterprise/home-page-enterprise.component';
import { RecruitmentsMyListComponent } from './recruitments/recruitments-my-list/recruitments-my-list.component';
import {NgbTooltipModule} from "@ng-bootstrap/ng-bootstrap";


@NgModule({
    declarations: [
        RecruitmentsListComponent,
        RecruitmentsDetailsComponent,
        HomePageEnterpriseComponent,
        RecruitmentsMyListComponent
    ],
    exports: [
        RecruitmentsListComponent
    ],
    imports: [
        CommonModule,
        EnterpriseRoutingModule,
        NgbTooltipModule
    ],
})
export class EnterpriseModule { }
