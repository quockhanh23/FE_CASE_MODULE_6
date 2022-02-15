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
import { FooterComponent } from './shared/footer/footer.component';
import { HeaderComponent } from './shared/header/header.component';
import { LoginUserComponent } from './login/login-user/login-user.component';
import {ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import { LoginEnterpriseComponent } from './login/login-enterprise/login-enterprise.component';
import { DialogRegisterFailComponent } from './notification/dialog-register-fail/dialog-register-fail.component';
import { DialogRegisterSuccessComponent } from './notification/dialog-register-success/dialog-register-success.component';
import { DialogRegisterImageComponent } from './notification/dialog-register-image/dialog-register-image.component';
import { DialogLoginFailComponent } from './notification/dialog-login-fail/dialog-login-fail.component';
import { DialogLogoutComponent } from './notification/dialog-logout/dialog-logout.component';
import {UserCreateCvComponent} from "./main/user/user-create-cv/user-create-cv.component";
import { DialogApplyNowComponent } from './notification/dialog-apply-now/dialog-apply-now.component';


const DialogComponents = [
  DialogSuccessComponent,
  DialogRulesComponent,
  DialogFailComponent,
  DialogRegisterFailComponent,
  DialogRegisterSuccessComponent,
  DialogRegisterImageComponent,
  DialogLoginFailComponent,
  DialogLogoutComponent,
  UserCreateCvComponent
]

@NgModule({
  declarations: [
    AppComponent,
    ToastrTestComponent,
    DialogComponents,
    ModalOptionsComponent,
    FooterComponent,
    HeaderComponent,
    LoginUserComponent,
    LoginEnterpriseComponent,
    DialogApplyNowComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgbModule,
    AngularFireStorageModule,
    AngularFireModule.initializeApp(environment.firebaseConfig, "cloud"),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
