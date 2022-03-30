import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {UserService} from "../../../services/user.service";
import {MatDialog} from "@angular/material/dialog";
import {ToastrService} from "ngx-toastr";
import {FormControl, FormGroup} from "@angular/forms";
import {DialogSuccessComponent} from "../../../notification/dialog-success/dialog-success.component";
import {DialogFailComponent} from "../../../notification/dialog-fail/dialog-fail.component";

@Component({
  selector: 'app-user-edit-profile',
  templateUrl: './user-edit-profile.component.html',
  styleUrls: ['./user-edit-profile.component.css']
})
export class UserEditProfileComponent implements OnInit {

  id = localStorage.getItem('ID');

  userProfileForm: FormGroup = new FormGroup({
    fullName: new FormControl(''),
    phoneNumber: new FormControl(''),
  });

  constructor(private activatedRoute: ActivatedRoute,
              private userService: UserService,
              public dialog: MatDialog,
  ) {
  }

  ngOnInit(): void {
    // @ts-ignore
    this.userService.getById(this.id).subscribe(result => {
      this.userProfileForm = new FormGroup({
        id: new FormControl(result.id),
        fullName: new FormControl(result.fullName),
        phoneNumber: new FormControl(result.phoneNumber),
      });
      console.log(result)
    }, error => {
      console.log(error);
    })
  }

  updateUser() {
    const userNew = {
      fullName: this.userProfileForm.value.fullName,
      phoneNumber: this.userProfileForm.value.phoneNumber,
    }
    console.log(userNew)
    // @ts-ignore
    this.userService.update(this.id, userNew).subscribe(r => {
      this.openReload()
      this.dialog.open(DialogSuccessComponent)
      console.log(r + '...')
    }, error => {
      this.dialog.open(DialogFailComponent)
      console.log("Lỗi" + error)
    })
  }

  openReload() {
    setTimeout(() => {
      location.reload()
    }, 200)
  }
}
