import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ProfileEnterprise} from "../../../models/profile-enterprise";

@Component({
  selector: 'app-enterprise-edit',
  templateUrl: './enterprise-edit.component.html',
  styleUrls: ['./enterprise-edit.component.css']
})
export class EnterpriseEditComponent implements OnInit {

  enterprise?: ProfileEnterprise[]
  enterpriseForm: FormGroup = new FormGroup({
    nameCompany: new FormControl("", [Validators.required]),
    description: new FormControl(""),
    addressCompany: new FormControl("", [Validators.required]),
    numberOfEmployees: new FormControl(""),
    phoneNumbers: new FormControl(""),
    linkWebsites: new FormControl("", [Validators.required]),
    linkFacebook: new FormControl(""),
    linkGoogleMaps: new FormControl(""),
    workId: new FormControl(),
    positionId: new FormControl(""),
  });

  constructor() {
  }

  ngOnInit(): void {
  }

}
