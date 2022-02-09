import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomePageRoutingModule } from './home-page-routing.module';
import { ListRecruitmentsComponent } from './list-recruitments/list-recruitments.component';
import { RecruitmentsComponent } from './recruitments/recruitments.component';


@NgModule({
  declarations: [
    ListRecruitmentsComponent,
    RecruitmentsComponent
  ],
  imports: [
    CommonModule,
    HomePageRoutingModule
  ]
})
export class HomePageModule { }
