import {Component, OnInit} from '@angular/core';
import {ProfileUser} from "../../../models/profile-user";
import {ActivatedRoute, Router} from "@angular/router";
import {UserService} from "../../../services/user.service";
import {MatDialog} from "@angular/material/dialog";
import {ToastrService} from "ngx-toastr";
import {FormControl, FormGroup} from "@angular/forms";
import {DialogRulesComponent} from "../../../notification/dialog-rules/dialog-rules.component";

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
              private router: Router,
              public dialog: MatDialog,
              private toarts: ToastrService,) {
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
      this.toarts.success('Bạn đã sửa thông tin thành công', 'Thông báo')
      this.openReload()
      console.log(r + '...')
    }, error => {
      console.log("Lỗi")
    })
  }

  openReload() {
    setTimeout(() => {
      location.reload()
    }, 800)
  }
}
