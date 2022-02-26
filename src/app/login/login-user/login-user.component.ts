import {Component, OnInit} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {ActivatedRoute, Router} from "@angular/router";
import {ToastrService} from "ngx-toastr";
import {AuthenticationService} from "../../services/authentication.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {first} from "rxjs";
import {DialogSuccessComponent} from "../../notification/dialog-success/dialog-success.component";
import {DialogRulesComponent} from "../../notification/dialog-rules/dialog-rules.component";
import {DialogLoginFailComponent} from "../../notification/dialog-login-fail/dialog-login-fail.component";
import {DialogCheckLoginComponent} from "../../notification/dialog-check-login/dialog-check-login.component";
import {DialogLoginAdminComponent} from "../../notification/dialog-login-admin/dialog-login-admin.component";

@Component({
  selector: 'app-login-user',
  templateUrl: './login-user.component.html',
  styleUrls: ['./login-user.component.css']
})
export class LoginUserComponent implements OnInit {

  hide = true;

  loginForm: FormGroup = new FormGroup({
    email: new FormControl('',
      [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required])
  });

  returnUrl?: string;
  adminUrl?: string;
  error = '';
  loading = false;
  submitted = false;
  checkDone = false
  checkButton = true

  constructor(public dialog: MatDialog,
              private activatedRoute: ActivatedRoute,
              private router: Router,
              private toarts: ToastrService,
              private authenticationService: AuthenticationService,
  ) {
    console.log(this.authenticationService.currentUserValue);
  }

  ngOnInit(): void {
    this.returnUrl = this.activatedRoute.snapshot.queryParams['returnUrl'] || '/enterprise/listJob';
    this.adminUrl = '/admin/list'
  }

  login() {
    this.openDialogCheckLogin()
    this.checkDone = true
    this.checkButton = false
    this.submitted = true;
    this.loading = true;
    this.authenticationService.login(
      this.loginForm.value.email,
      this.loginForm.value.password,)
      .pipe(first())
      .subscribe(
        data => {
          this.dialog.closeAll()
          console.log(data)
          // @ts-ignore
          localStorage.setItem('ACCESS_TOKEN', data.accessToken);
          // @ts-ignore
          localStorage.setItem('ROLE', data.roles[0].authority);
          // @ts-ignore
          localStorage.setItem('EMAIL', data.username);
          // @ts-ignore
          localStorage.setItem('ID', data.id);
          if (data.roles[0].authority == "ROLE_ADMIN") {
            // this.router.navigate([this.adminUrl]).then()

            this.reloadWindow()
          } else {
            this.router.navigate([this.returnUrl]).then()
            this.dialog.open(DialogLoginAdminComponent)
            this.openDialogRules()
          }
          console.log(data)
        },
        error => {
          this.checkButton = true
          this.checkDone = false
          this.dialog.closeAll()
          console.log('error:' + error)
          this.openDialogLoginFail()
          this.loading = false;
        });
  }

  reloadWindow() {
    window.location.href = 'http://localhost:4200/admin/adminDetail'
    console.log('reload')
    // @ts-ignore
    if (event.target.readyState === "complete") {
      console.log('if')
    } else {
      console.log('else')
    }
    this.dialog.open(DialogLoginAdminComponent)
  }

  openDialogRules() {
    setTimeout(() => {
      this.dialog.open(DialogRulesComponent);
    }, 600)
  }

  openDialogLoginFail() {
    this.dialog.open(DialogLoginFailComponent);
  }

  openDialogCheckLogin() {
    this.dialog.open(DialogCheckLoginComponent);
  }

  reLoad() {
    setTimeout(() => {
      location.reload()
      console.log('alo')
    }, 5000)
  }
}
