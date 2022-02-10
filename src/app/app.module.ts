import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ToastrTestComponent} from './notification/toastr-test/toastr-test.component';
import {ToastrModule} from "ngx-toastr";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {DialogSuccessComponent} from './notification/dialog-success/dialog-success.component';
import {MaterialModule} from "./material/material.module";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { UploadComponent } from './upload/upload.component';
import {AngularFireStorageModule} from "@angular/fire/compat/storage";
import {AngularFireModule} from "@angular/fire/compat";
import {environment} from "../environments/environment";
import { DialogRulesComponent } from './notification/dialog-rules/dialog-rules.component';
import { DialogFailComponent } from './notification/dialog-fail/dialog-fail.component';
import { ModalOptionsComponent } from './notification/modal-options/modal-options.component';
import {HomePageModule} from "./module/home-page/home-page.module";
import {ListRecruitmentsComponent} from "./module/home-page/recruitments/list-recruitments/list-recruitments.component";
import { FooterComponent } from './shared/footer/footer.component';
import { HeaderComponent } from './shared/header/header.component';


const DialogComponents = [
  DialogSuccessComponent,
  DialogRulesComponent,
  DialogFailComponent
]

@NgModule({
  declarations: [
    AppComponent,
    ToastrTestComponent,
    DialogComponents,
    UploadComponent,
    ModalOptionsComponent,
    FooterComponent,
    HeaderComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
    MaterialModule,
    NgbModule,
    AngularFireStorageModule,
    AngularFireModule.initializeApp(environment.firebaseConfig, "cloud"),
    HomePageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
