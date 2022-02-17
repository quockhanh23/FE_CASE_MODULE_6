import { Component, OnInit } from '@angular/core';
import {ProfileEnterprise} from "../../../models/profile-enterprise";

@Component({
  selector: 'app-admin-enterprise-no-active',
  templateUrl: './admin-enterprise-no-active.component.html',
  styleUrls: ['./admin-enterprise-no-active.component.css']
})
export class AdminEnterpriseNoActiveComponent implements OnInit {
  enterprise!: ProfileEnterprise[]
  constructor() { }

  ngOnInit(): void {
  }

}
