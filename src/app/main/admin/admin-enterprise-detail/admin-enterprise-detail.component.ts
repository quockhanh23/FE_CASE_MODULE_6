import {Component, OnInit} from '@angular/core';
import {ProfileEnterprise} from "../../../models/profile-enterprise";
import {ActivatedRoute, Router} from "@angular/router";
import {MatDialog} from "@angular/material/dialog";
import {ProfileEnterpriseOfAdminService} from "../../../services/profile-enterprise-of-admin.service";

@Component({
  selector: 'app-admin-enterprise-detail',
  templateUrl: './admin-enterprise-detail.component.html',
  styleUrls: ['./admin-enterprise-detail.component.css']
})
export class AdminEnterpriseDetailComponent implements OnInit {

  idEnterprise?: any
  enterprise?: ProfileEnterprise

  constructor(private enterpriseOfAdminService: ProfileEnterpriseOfAdminService,
              public dialog: MatDialog,
              private router: Router,
              private activatedRoute: ActivatedRoute,
  ) {
  }

  ngOnInit(): void {
    console.log("alo")
    this.enterpriseOfAdminService.getAll().subscribe(result => {
      console.log(result)
    }, error => {
      console.log(error)
    })
    this.activatedRoute.paramMap.subscribe(paramMap => {
      const id = paramMap.get('id');
      console.log(id)
      this.enterpriseOfAdminService.getById(id).subscribe(result => {
        localStorage.setItem('idEnterprise', <string>result.id)
        this.enterprise = result
      }, error => {
        console.log("Lỗi: " + error)
      })
    })
  }
}
