import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

import {MatDialog} from "@angular/material/dialog";
import {ToastrService} from "ngx-toastr";
import {EnterpriseService} from "../../../services/enterprise.service";
import {ProfileEnterprise} from "../../../models/profile-enterprise";
import {DialogCheckPostComponent} from "../../../notification/dialog-check-post/dialog-check-post.component";

@Component({
  selector: 'app-enterprise-detail',
  templateUrl: './enterprise-detail.component.html',
  styleUrls: ['./enterprise-detail.component.css']
})
export class EnterpriseDetailComponent implements OnInit {

  id = localStorage.getItem('ENTERPRISE_ID')
  enterprise?: ProfileEnterprise
  check = "false";
  constructor(private activatedRoute: ActivatedRoute,
              private enterpriseService: EnterpriseService,
              private router: Router,
              public dialog: MatDialog,
              private toarts: ToastrService,
  ) {
  }

  ngOnInit(): void {
    this.enterpriseService.getById(this.id).subscribe(res => {
      this.enterprise = res
      this.enterprise.statusEnterpriseId
      // @ts-ignore
      if(this.enterprise.statusEnterpriseId?.id == 1 || this.enterprise.statusEnterpriseId?.id == 4){
        this.check = "true"
      }
    })
  }
  openDialog(){
    this.dialog.open(DialogCheckPostComponent)
  }
}
