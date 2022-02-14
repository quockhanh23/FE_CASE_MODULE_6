import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {MatDialog} from "@angular/material/dialog";
import {ToastrService} from "ngx-toastr";
import {UserService} from "../../../services/user.service";
import {ProfileUser} from "../../../models/profile-user";

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

  userProfile!: ProfileUser

  constructor(private activatedRoute: ActivatedRoute,
              private userService: UserService,
              private router: Router,
              public dialog: MatDialog,
              private toarts: ToastrService,) {
  }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(param => {
      const id = param.get('id')
      // @ts-ignore
      this.recruitmentsService.findById(id).subscribe(res => {
        console.log(res)
        this.userProfile = res
      })
    })
  }

}
