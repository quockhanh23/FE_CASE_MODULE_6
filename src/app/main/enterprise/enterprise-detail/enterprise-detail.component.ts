import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

import {MatDialog} from "@angular/material/dialog";
import {ToastrService} from "ngx-toastr";
import {EnterpriseService} from "../../../services/enterprise.service";
import {ProfileEnterprise} from "../../../models/profile-enterprise";

@Component({
  selector: 'app-enterprise-detail',
  templateUrl: './enterprise-detail.component.html',
  styleUrls: ['./enterprise-detail.component.css']
})
export class EnterpriseDetailComponent implements OnInit {

  id = localStorage.getItem('ENTERPRISE_ID')
  enterprise?: ProfileEnterprise

  constructor(private activatedRoute: ActivatedRoute,
              private enterpriseService: EnterpriseService,
              private router: Router,
              public dialog: MatDialog,
              private toarts: ToastrService,
  ) {
  }

  ngOnInit(): void {
    this.enterpriseService.getById(this.id).subscribe(res => {
      console.log(res)
      this.enterprise = res
    })
  }
}
