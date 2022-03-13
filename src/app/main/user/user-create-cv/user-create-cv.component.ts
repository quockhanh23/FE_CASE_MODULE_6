import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {AuthenticationService} from "../../../services/authentication.service";
import {UserService} from "../../../services/user.service";
import {ToastrService} from "ngx-toastr";
import {MatDialog} from "@angular/material/dialog";
import {FileCVService} from "../../../services/file-cv.service";
import {DialogSuccessComponent} from "../../../notification/dialog-success/dialog-success.component";
import {DialogFailComponent} from "../../../notification/dialog-fail/dialog-fail.component";

@Component({
  selector: 'app-user-create-cv',
  templateUrl: './user-create-cv.component.html',
  styleUrls: ['./user-create-cv.component.css']
})
export class UserCreateCvComponent implements OnInit {

  id = localStorage.getItem('ID');

  CVForm: FormGroup = new FormGroup({
    fullName: new FormControl("",),
    age: new FormControl("",),
    address: new FormControl("",),
    numberPhone: new FormControl("",),
    experience: new FormControl("",),
    oldWorkplace: new FormControl("",),
    interest: new FormControl("",),
  });

  constructor(private activatedRoute: ActivatedRoute,
              private router: Router,
              private authenticationService: AuthenticationService,
              private user: UserService,
              private toarts: ToastrService,
              public dialog: MatDialog,
              private fileCVService: FileCVService) {
  }

  ngOnInit(): void {
  }

  createCV() {
    const CV = {
      fullName: this.CVForm.value.fullName,
      age: this.CVForm.value.age,
      address: this.CVForm.value.address,
      experience: this.CVForm.value.experience,
      numberPhone: this.CVForm.value.numberPhone,
      oldWorkplace: this.CVForm.value.oldWorkplace,
      interest: this.CVForm.value.interest,
      profileUserId: {
        id: this.id
      }
    }
    console.log(CV)
    // @ts-ignore
    this.fileCVService.create(CV, this.id).subscribe(() => {
      console.log("đã lưu cv")
      this.dialog.open(DialogSuccessComponent)
      this.closeDialog()
    }, error => {
      console.log("lỗi" + error)
      this.dialog.open(DialogFailComponent)
      this.closeDialog()
    })
  }

  closeDialog() {
    setTimeout(() => {
      this.dialog.closeAll()
    }, 1000)
  }
}
