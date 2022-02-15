import {Component, OnInit} from '@angular/core';
import {ProfileUser} from "../../../models/profile-user";
import {ActivatedRoute, Router} from "@angular/router";
import {UserService} from "../../../services/user.service";
import {MatDialog} from "@angular/material/dialog";
import {ToastrService} from "ngx-toastr";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-user-edit-profile',
  templateUrl: './user-edit-profile.component.html',
  styleUrls: ['./user-edit-profile.component.css']
})
export class UserEditProfileComponent implements OnInit {

  userProfile!: ProfileUser
  userProfileForm: FormGroup = new FormGroup({
    id: new FormControl(''),
    email: new FormControl(''),
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
    this.activatedRoute.paramMap.subscribe(paraMap => {
      const id = paraMap.get('id')
      console.log(id);
      // @ts-ignore
      this.userService.getById(id).subscribe(result => {
        this.userProfileForm = new FormGroup({
          id: new FormControl(result.fullName),
          fullName: new FormControl(result.fullName),
          email: new FormControl(result.email),
          phoneNumber: new FormControl(result.phoneNumber),
        });
        console.log(result)
      }, error => {
        console.log(error);
      })
    })
  }

  updateUser() {
    let userNew = {
      fullName: this.userProfileForm.value.fullName,
      email: this.userProfileForm.value.email,
      phoneNumber: this.userProfileForm.value.phoneNumber,
    }
    console.log(userNew)
    // @ts-ignore
    this.userService.update(this.userProfileForm.value.id, userNew).subscribe(() => {
    }, error => {
    })
  }
}
