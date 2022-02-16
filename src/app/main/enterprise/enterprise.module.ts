import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {EnterpriseRoutingModule} from './enterprise-routing.module';
import {RecruitmentsListComponent} from './recruitments/recruitments-list/recruitments-list.component';
import {RecruitmentsDetailsComponent} from './recruitments/recruitments-details/recruitments-details.component';
import {HomePageEnterpriseComponent} from './home-page-enterprise/home-page-enterprise.component';
import {RecruitmentsMyListComponent} from './recruitments/recruitments-my-list/recruitments-my-list.component';
import {RecruitmentsCreateComponent} from "./recruitments/recruitments-create/recruitments-create.component";
import {HttpClientModule} from "@angular/common/http";
import {ReactiveFormsModule} from "@angular/forms";
import {NgbTooltipModule} from "@ng-bootstrap/ng-bootstrap";
import { RecruitmentEditComponent } from './recruitment-edit/recruitment-edit.component';


@NgModule({
  declarations: [
    RecruitmentsListComponent,
    RecruitmentsDetailsComponent,
    HomePageEnterpriseComponent,
    RecruitmentsMyListComponent,
    RecruitmentsCreateComponent,
    RecruitmentEditComponent,
  ],
  exports: [
    RecruitmentsListComponent
  ],
  imports: [
    CommonModule,
    EnterpriseRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgbTooltipModule
  ],
})
export class EnterpriseModule {
}
