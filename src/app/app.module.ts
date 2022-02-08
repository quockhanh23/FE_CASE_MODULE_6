import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ToastrTestComponent} from './toastr-test/toastr-test.component';
import {ToastrModule} from "ngx-toastr";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {DialogSuccessComponent} from './notification/dialog-success/dialog-success.component';
import {MaterialModule} from "./material/material.module";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

const DialogComponents = [
  DialogSuccessComponent
]

@NgModule({
  declarations: [
    AppComponent,
    ToastrTestComponent,
    DialogComponents
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
    MaterialModule,
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
