import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {AuthenticationService} from "../../../services/authentication.service";
import {UserService} from "../../../services/user.service";
import {ToastrService} from "ngx-toastr";
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-user-create-cv',
  templateUrl: './user-create-cv.component.html',
  styleUrls: ['./user-create-cv.component.css']
})
export class UserCreateCvComponent implements OnInit {
  CVForm: FormGroup = new FormGroup({
    fullName: new FormControl("", [Validators.required]),
    age: new FormControl("", [Validators.required]),
    address: new FormControl("", [Validators.required]),
    numberPhone: new FormControl("", [Validators.required]),
    experience: new FormControl("", [Validators.required]),
    oldWorkplace: new FormControl("", [Validators.required]),
    interest: new FormControl("", [Validators.required]),
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

}
