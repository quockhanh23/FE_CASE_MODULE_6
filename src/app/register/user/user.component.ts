import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {AuthenticationService} from "../../services/authentication.service";
import {UserService} from "../../services/user.service";

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
    phoneNumber: new FormControl("", [Validators.required]),
    confirmPassword: new FormControl("", [Validators.required]),
  });

  constructor(private activatedRoute: ActivatedRoute,
              private router: Router,
              private authenticationService: AuthenticationService,
              private user: UserService) {
  }

  ngOnInit(): void {
  }

  register() {
    const user = this.userForm.value;
    console.log(user)
    this.user.register(user).subscribe(() => {
      alert("Tạo tài khoản thành công! Hãy đăng nhập !")
      this.router.navigate(["login/user"])
    }, error => {
      console.log(error)
    })
  }
}
