import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {MatDialog} from "@angular/material/dialog";
import {ActivatedRoute, Router} from "@angular/router";
import {ToastrService} from "ngx-toastr";
import {AuthenticationService} from "../../services/authentication.service";
import {first} from "rxjs";
import {DialogSuccessComponent} from "../../notification/dialog-success/dialog-success.component";
import {DialogFailComponent} from "../../notification/dialog-fail/dialog-fail.component";

@Component({
  selector: 'app-login-enterprise',
  templateUrl: './login-enterprise.component.html',
  styleUrls: ['./login-enterprise.component.css']
})
export class LoginEnterpriseComponent implements OnInit {

  hide = true;

  loginForm: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required])
  });
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
  }

  login() {
    this.submitted = true;
    this.loading = true;
    this.authenticationService.loginEnterprise(
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
          console.log(data)
          this.openDialogSuccess()
          this.router.navigate([""]).then()
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
