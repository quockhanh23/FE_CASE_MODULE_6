import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomePageRoutingModule } from './home-page-routing.module';
import {ListRecruitmentsComponent} from "./recruitments/list-recruitments/list-recruitments.component";


@NgModule({
  declarations: [
    ListRecruitmentsComponent,
  ],
  exports:[
    ListRecruitmentsComponent
  ],
  imports: [
    CommonModule,
    HomePageRoutingModule
  ]
})
export class HomePageModule { }
