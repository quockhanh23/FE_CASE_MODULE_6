import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {AuthenticationService} from "../../services/authentication.service";
import {UserService} from "../../services/user.service";
import {ToastrService} from "ngx-toastr";
import {MatDialog} from "@angular/material/dialog";
import {DialogRegisterSuccessComponent} from "../../notification/dialog-register-success/dialog-register-success.component";
import {DialogRegisterFailComponent} from "../../notification/dialog-register-fail/dialog-register-fail.component";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  userForm: FormGroup = new FormGroup({
    email: new FormControl("", [Validators.required]),
    password: new FormControl("", [Validators.required]),
    fullName: new FormControl("", [Validators.required]),
    phoneNumber: new FormControl("", [Validators.required,
      Validators.pattern('(84|0[3|4|5|6|7|8|9])+([0-9]{8})\\b')]),
    confirmPassword: new FormControl("", [Validators.required]),
  });

  constructor(private activatedRoute: ActivatedRoute,
              private router: Router,
              private authenticationService: AuthenticationService,
              private user: UserService,
              private toarts: ToastrService,
              public dialog: MatDialog,) {
  }

  ngOnInit(): void {
  }

  register() {
    const user = this.userForm.value;
    console.log(user)
    this.user.register(user).subscribe(() => {
      this.dialog.open(DialogRegisterSuccessComponent)
      this.router.navigate(["login/user"]).then()
    }, error => {
      console.log("lỗi nè" + error)
      this.dialog.open(DialogRegisterFailComponent)
    })
  }

  openDialogRegisterSuccess() {
    this.dialog.open(DialogRegisterSuccessComponent)
  }
}
