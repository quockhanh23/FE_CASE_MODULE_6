import {Component, Input, OnInit} from '@angular/core';
import {ProfileEnterprise} from "../../../models/profile-enterprise";
import {ProfileEnterpriseOfAdminService} from "../../../services/profile-enterprise-of-admin.service";
import {MatDialog} from "@angular/material/dialog";
import {ToastrService} from "ngx-toastr";
import {ActivatedRoute, Router} from "@angular/router";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {DialogFailComponent} from "../../../notification/dialog-fail/dialog-fail.component";


@Component({
  selector: 'app-list-enterprise-of-admin',
  templateUrl: './list-enterprise-of-admin.component.html',
  styleUrls: ['./list-enterprise-of-admin.component.css'],

})
export class ListEnterpriseOfAdminComponent implements OnInit {
  closeResult!: string;
  enterprise!: ProfileEnterprise[]

  constructor(private enterpriseOfAdminService: ProfileEnterpriseOfAdminService,
              public dialog: MatDialog,
              private toarts: ToastrService,
              private router: Router,
              private activatedRoute: ActivatedRoute,
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
    this.activatedRoute.paramMap.subscribe(paraMap => {
      const id = paraMap.get('id')
      console.log(id);
    })
  }

  getAll() {
    this.enterpriseOfAdminService.getAll().subscribe(result => {
      this.enterprise = result
    })
  }

  getAllStatusNotActive() {
    this.enterpriseOfAdminService.getAllStatusNotActive().subscribe(res => {
      console.log(res)
      this.router.navigate(["admin/list"]).then()
    })
  }

  getOne(id: any) {
    this.enterpriseOfAdminService.getById(id).subscribe(res => {
      console.log(res)
    })
  }

  changeStatusLock(id: any) {
    this.enterpriseOfAdminService.getById(id).subscribe(res => {
      console.log(res)
      this.enterpriseOfAdminService.changeStatusLock(id).subscribe(result => {
        console.log(result)
        this.router.navigateByUrl("/admin/list").then()
        if (res.statusEnterpriseId?.id == '3') {
          this.toarts.error('Thông báo', 'Tài khoản đã bị khóa rồi!')
        } else {
          this.toarts.success('Thông báo', 'Bạn đã khóa thành công!')
        }
        this.ngOnInit()
      }, error => {
        console.log("Lỗi", error)
        this.dialog.open(DialogFailComponent);
      })
    })
  }

  changeStatusActive(id: any) {
    this.enterpriseOfAdminService.getById(id).subscribe(res => {
      console.log(res)
      this.enterpriseOfAdminService.changeStatusActive(id).subscribe(result => {
        console.log(result)
        this.router.navigateByUrl("/admin/list").then()
        if (res.statusEnterpriseId?.id == '2') {
          this.toarts.error('Cảnh báo', 'Tài khoản đã được kích hoạt rồi!')
        } else {
          this.toarts.success('Thông báo', 'Bạn đã kích hoạt thành công!')
        }
        this.ngOnInit()
      }, error => {
        console.log("Lỗi", error)
        this.dialog.open(DialogFailComponent);
      })
    })
  }

  getAllStatusByOne() {
    this.enterpriseOfAdminService.getAllStatusByOne().subscribe(result => {
      this.enterprise = result
    })
  }

  openToartError() {
    this.toarts.error('Có lỗi xảy ra', 'Èo')
  }

  openToartInFor() {
    this.toarts.info('mes', 'title')
  }
}
