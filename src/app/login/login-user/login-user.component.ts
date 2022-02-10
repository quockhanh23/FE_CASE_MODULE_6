import {Component, OnInit} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {ActivatedRoute, Router} from "@angular/router";
import {ToastrService} from "ngx-toastr";
import {AuthenticationService} from "../../services/authentication.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {first} from "rxjs";
import {DialogSuccessComponent} from "../../notification/dialog-success/dialog-success.component";
import {DialogFailComponent} from "../../notification/dialog-fail/dialog-fail.component";

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

  constructor(public dialog: MatDialog,
              private activatedRoute: ActivatedRoute,
              private router: Router,
              private toarts: ToastrService,
              private authenticationService: AuthenticationService
  ) {
    console.log(this.authenticationService.currentUserValue);
  }

  ngOnInit(): void {
    this.returnUrl = this.activatedRoute.snapshot.queryParams['returnUrl'] || '';
    this.adminUrl = '/admin/list'
  }

  login() {
    this.submitted = true;
    this.loading = true;
    this.authenticationService.login(
      this.loginForm.value.email,
      this.loginForm.value.password,)
      .pipe(first())
      .subscribe(
        data => {
          console.log(data)
          // @ts-ignore
          localStorage.setItem('ACCESS_TOKEN', data.accessToken);
          // @ts-ignore
          localStorage.setItem('ROLE', data.roles[0].authority);
          // @ts-ignore
          localStorage.setItem('EMAIL', data.username);

          if (data.roles[0].authority == "ROLE_ADMIN") {
            this.router.navigate([this.adminUrl]).then()
          } else {
            this.router.navigate([this.returnUrl]).then()
          }
          console.log(data)
          this.openDialogSuccess()
        },
        error => {
          console.log('error:' + error)
          this.openDialogFail()
          this.loading = false;
        });
  }

  openDialogSuccess() {
    this.dialog.open(DialogSuccessComponent);
  }

  openDialogFail() {
    this.dialog.open(DialogFailComponent);
  }
}
