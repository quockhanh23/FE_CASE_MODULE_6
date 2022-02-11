import {Component, OnInit} from '@angular/core';
import {ProfileEnterprise} from "../../../models/profile-enterprise";
import {ProfileEnterpriseOfAdminService} from "../../../services/profile-enterprise-of-admin.service";
import {MatDialog} from "@angular/material/dialog";
import {StatusEnterpriseService} from "../../../services/status-enterprise.service";

import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-list-enterprise-of-admin',
  templateUrl: './list-enterprise-of-admin.component.html',
  styleUrls: ['./list-enterprise-of-admin.component.css']
})
export class ListEnterpriseOfAdminComponent implements OnInit {

  enterprise!: ProfileEnterprise[]

  constructor(private enterpriseOfAdminService: ProfileEnterpriseOfAdminService,
              public dialog: MatDialog,
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
}
