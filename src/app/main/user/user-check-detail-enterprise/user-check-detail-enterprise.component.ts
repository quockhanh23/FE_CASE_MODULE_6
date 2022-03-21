import {Component, OnInit} from '@angular/core';
import {ProfileEnterprise} from "../../../models/profile-enterprise";
import {ProfileEnterpriseOfAdminService} from "../../../services/profile-enterprise-of-admin.service";
import {MatDialog} from "@angular/material/dialog";
import {ActivatedRoute, Router} from "@angular/router";
import {RecruitmentsService} from "../../../services/recruitments.service";
import {Recruitments} from "../../../models/recruitments";

@Component({
  selector: 'app-user-check-detail-enterprise',
  templateUrl: './user-check-detail-enterprise.component.html',
  styleUrls: ['./user-check-detail-enterprise.component.css']
})
export class UserCheckDetailEnterpriseComponent implements OnInit {
  idEnterprise?: any
  enterprise?: ProfileEnterprise
  myListJob?: Recruitments;
  myListJob1?: Recruitments[];

  constructor(private enterpriseOfAdminService: ProfileEnterpriseOfAdminService,
              public dialog: MatDialog,
              private router: Router,
              private activatedRoute: ActivatedRoute,
              private recruitmentsService: RecruitmentsService,
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
        this.recruitmentsService.myListRecruitments(<string>result.id).subscribe(result => {
          console.log("Đã vào myListRecruitments" + result)
          this.myListJob1 = result;
        }, error => {
          console.log("Lỗi myListRecruitments: " + error)
        })
      }, error => {
        console.log("Lỗi idEnterprise: " + error)
      })
    }, error => {
      console.log("Lỗi: " + error)
    })
  }
}
