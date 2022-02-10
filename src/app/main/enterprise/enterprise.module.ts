import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EnterpriseRoutingModule } from './enterprise-routing.module';
import { RecruitmentsListComponent } from './recruitments/recruitments-list/recruitments-list.component';


@NgModule({
    declarations: [
        RecruitmentsListComponent
    ],
    exports: [
        RecruitmentsListComponent
    ],
    imports: [
        CommonModule,
        EnterpriseRoutingModule
    ],
})
export class EnterpriseModule { }
