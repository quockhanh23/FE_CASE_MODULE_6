import {Component, OnInit} from '@angular/core';
import {ProfileEnterprise} from "../../../models/profile-enterprise";
import {ProfileEnterpriseOfAdminService} from "../../../services/profile-enterprise-of-admin.service";
import {MatDialog} from "@angular/material/dialog";
import {ToastrService} from "ngx-toastr";
import {Router} from "@angular/router";


@Component({
  selector: 'app-list-enterprise-of-admin',
  templateUrl: './list-enterprise-of-admin.component.html',
  styleUrls: ['./list-enterprise-of-admin.component.css']
})
export class ListEnterpriseOfAdminComponent implements OnInit {

  enterprise!: ProfileEnterprise[]

  constructor(private enterpriseOfAdminService: ProfileEnterpriseOfAdminService,
              public dialog: MatDialog,
              private toarts: ToastrService,
              private router: Router,
  ) {
  }

  ngOnInit(): void {
    this.enterpriseOfAdminService.getAll().subscribe(result => {
      // @ts-ignore
      this.enterprise = result
      console.log(result)
    }, error => {
      console.log(error)
    })
  }

  changeStatusLock(id: any) {
    this.enterpriseOfAdminService.changeStatusLock(id).subscribe(result => {
      console.log(result)
      this.router.navigate([""]).then(r => {
        console.log('hoạt động' + r);
      },);
    }, error => {
      console.log("Lỗi", error)
    })
  }

  changeStatusActive(id: any) {
    this.enterpriseOfAdminService.changeStatusActive(id).subscribe(result => {
      console.log(result)
      this.router.navigate([""]).then(r => {
        console.log('hoạt động' + r);
      });
    }, error => {
      console.log("Lỗi", error)
    })
  }

  openToarts() {
    this.toarts.success('mes', 'title')
  }
}
