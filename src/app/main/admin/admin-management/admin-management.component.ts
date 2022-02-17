import {Component, OnInit} from '@angular/core';
import {ProfileEnterprise} from "../../../models/profile-enterprise";
import {ProfileEnterpriseOfAdminService} from "../../../services/profile-enterprise-of-admin.service";
import {MatDialog} from "@angular/material/dialog";
import {ToastrService} from "ngx-toastr";
import {ActivatedRoute, Router} from "@angular/router";
import {ProfileUser} from "../../../models/profile-user";
import {UserService} from "../../../services/user.service";

@Component({
  selector: 'app-admin-management',
  templateUrl: './admin-management.component.html',
  styleUrls: ['./admin-management.component.css']
})
export class AdminManagementComponent implements OnInit {
  id = localStorage.getItem('ID')
  role = localStorage.getItem('ROLE')
  profileUser!: ProfileUser

  constructor(private userService: UserService,
              public dialog: MatDialog,
              private toarts: ToastrService,
              private router: Router,
              private activatedRoute: ActivatedRoute,
  ) {
  }

  ngOnInit(): void {
    this.userService.getById(this.id).subscribe(res => {
      console.log(res+ 'alo')
      this.profileUser = res
    })
  }
  checkRole(){
    if (this.role == 'ADMIN'){
    }
  }
}
