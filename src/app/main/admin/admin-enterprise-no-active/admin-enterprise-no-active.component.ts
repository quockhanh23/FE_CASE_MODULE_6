import {Component, OnInit} from '@angular/core';
import {ProfileEnterprise} from "../../../models/profile-enterprise";
import {RecruitmentsService} from "../../../services/recruitments.service";
import {ActivatedRoute, Router} from "@angular/router";
import {MatDialog} from "@angular/material/dialog";
import {ToastrService} from "ngx-toastr";
import {ProfileEnterpriseOfAdminService} from "../../../services/profile-enterprise-of-admin.service";

@Component({
  selector: 'app-admin-enterprise-no-active',
  templateUrl: './admin-enterprise-no-active.component.html',
  styleUrls: ['./admin-enterprise-no-active.component.css']
})
export class AdminEnterpriseNoActiveComponent implements OnInit {
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

}
