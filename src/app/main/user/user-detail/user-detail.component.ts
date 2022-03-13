import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {MatDialog} from "@angular/material/dialog";
import {ToastrService} from "ngx-toastr";
import {UserService} from "../../../services/user.service";
import {ProfileUser} from "../../../models/profile-user";
import {UserCreateCvComponent} from "../user-create-cv/user-create-cv.component";
import {UserEditProfileComponent} from "../user-edit-profile/user-edit-profile.component";
import {FileCVService} from "../../../services/file-cv.service";
import {UserDetailCvComponent} from "../user-detail-cv/user-detail-cv.component";

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

  id = localStorage.getItem('ID');
  userProfile!: ProfileUser

  constructor(private activatedRoute: ActivatedRoute,
              private userService: UserService,
              private router: Router,
              public dialog: MatDialog,
              private toarts: ToastrService,
  ) {
  }

  ngOnInit(): void {
    this.userService.getById(this.id).subscribe(res => {
      console.log(res)
      this.userProfile = res
    })
  }

  openDialogCV() {
    this.dialog.open(UserCreateCvComponent)
  }

  openDialogEdit() {
    this.dialog.open(UserEditProfileComponent)
  }

  openDialogMyCV() {
    this.dialog.open(UserDetailCvComponent)
  }
}
