import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {MatDialog} from "@angular/material/dialog";
import {ActivatedRoute, Router} from "@angular/router";
import {ToastrService} from "ngx-toastr";
import {AuthenticationService} from "../../services/authentication.service";
import {first} from "rxjs";
import {DialogRulesComponent} from "../../notification/dialog-rules/dialog-rules.component";
import {DialogLoginFailComponent} from "../../notification/dialog-login-fail/dialog-login-fail.component";
import {DialogCheckLoginComponent} from "../../notification/dialog-check-login/dialog-check-login.component";

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
  checkDone = false
  checkButton = true
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
    this.openDialogCheckLogin()
    this.checkDone = true
    this.checkButton = false
    this.submitted = true;
    this.loading = true;
    this.authenticationService.loginEnterprise(
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
          localStorage.setItem('ENTERPRISE_ID' , data.id)
          // @ts-ignore
          localStorage.setItem('EMAIL', data.username);
          this.reLoad()
          console.log(data)
          this.openDialogRules()
          this.openToartsLogoIn()
          // this.router.navigate(["/enterprise/listJob"]).then()

          // fix reload trang header
          window.location.href = 'http://localhost:4200/enterprise/listJob';
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

  openToartsLogoIn() {
    setTimeout(() => {
      this.toarts.success('Bạn đã đăng nhập thành công', 'Thông báo')
    }, 0)
  }
  openDialogRules() {
    setTimeout(() => {
      this.dialog.open(DialogRulesComponent);
    }, 800)
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
    }, 6000)
  }
}
