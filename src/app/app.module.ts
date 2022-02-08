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
import { UploadComponent } from './upload/upload.component';
import {AngularFireStorageModule} from "@angular/fire/compat/storage";
import {AngularFireModule} from "@angular/fire/compat";
import {environment} from "../environments/environment";

const DialogComponents = [
  DialogSuccessComponent
]

@NgModule({
  declarations: [
    AppComponent,
    ToastrTestComponent,
    DialogComponents,
    UploadComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
    MaterialModule,
    NgbModule,
    AngularFireStorageModule,
    AngularFireModule.initializeApp(environment.firebaseConfig, "cloud")
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
