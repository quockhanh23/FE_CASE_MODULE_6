import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ListRecruitmentsComponent} from "./recruitments/list-recruitments/list-recruitments.component";

const routes: Routes = [
  {
    path:'listJob',
    component:ListRecruitmentsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule { }
