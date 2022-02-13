import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EnterpriseRoutingModule } from './enterprise-routing.module';
import { RecruitmentsListComponent } from './recruitments/recruitments-list/recruitments-list.component';
import { RecruitmentsDetailsComponent } from './recruitments/recruitments-details/recruitments-details.component';
import { RecruitmentsCreateComponent } from './recruitments/recruitments-create/recruitments-create.component';
import {HttpClientModule} from "@angular/common/http";
import {ReactiveFormsModule} from "@angular/forms";


@NgModule({
    declarations: [
        RecruitmentsListComponent,
        RecruitmentsDetailsComponent,
        RecruitmentsCreateComponent
    ],
    exports: [
        RecruitmentsListComponent
    ],
    imports: [
        CommonModule,
        EnterpriseRoutingModule,
        HttpClientModule,
        ReactiveFormsModule,
    ],
})
export class EnterpriseModule { }
