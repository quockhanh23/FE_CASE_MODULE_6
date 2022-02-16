import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ProfileEnterprise} from "../../../models/profile-enterprise";
import {ActivatedRoute, Router} from "@angular/router";
import {EnterpriseService} from "../../../services/enterprise.service";
import {MatDialog} from "@angular/material/dialog";
import {ToastrService} from "ngx-toastr";
import {DialogSuccessComponent} from "../../../notification/dialog-success/dialog-success.component";
import {DialogLoginFailComponent} from "../../../notification/dialog-login-fail/dialog-login-fail.component";

@Component({
  selector: 'app-enterprise-edit',
  templateUrl: './enterprise-edit.component.html',
  styleUrls: ['./enterprise-edit.component.css']
})
export class EnterpriseEditComponent implements OnInit {

  id = localStorage.getItem('ENTERPRISE_ID')

  enterpriseForm: FormGroup = new FormGroup({
    nameCompany: new FormControl(""),
    description: new FormControl(""),
    addressCompany: new FormControl("",),
    numberOfEmployees: new FormControl(""),
    phoneNumbers: new FormControl(""),
    linkWebsites: new FormControl("",),
    linkFacebook: new FormControl(""),
    linkGoogleMaps: new FormControl(""),
  });

  constructor(private activatedRoute: ActivatedRoute,
              private enterpriseService: EnterpriseService,
              private router: Router,
              public dialog: MatDialog,
              private toarts: ToastrService,
  ) {
  }

  ngOnInit(): void {
    // @ts-ignore
    this.enterpriseService.getById(this.id).subscribe(result => {
      console.log(this.enterpriseService)
      this.enterpriseForm = new FormGroup({
        id: new FormControl(result.id),
        nameCompany: new FormControl(result.nameCompany),
        description: new FormControl(result.description),
        addressCompany: new FormControl(result.addressCompany),
        numberOfEmployees: new FormControl(result.numberOfEmployees),
        phoneNumbers: new FormControl(result.phoneNumbers),
        linkWebsites: new FormControl(result.linkWebsites),
        linkFacebook: new FormControl(result.linkFacebook),
        linkGoogleMaps: new FormControl(result.linkGoogleMaps),
      });
      console.log(result)
    }, error => {
      console.log(error);
    })
  }

  updateEnterprise() {
    const enterprise = {
      nameCompany: this.enterpriseForm.value.nameCompany,
      description: this.enterpriseForm.value.description,
      addressCompany: this.enterpriseForm.value.addressCompany,
      numberOfEmployees: this.enterpriseForm.value.numberOfEmployees,
      phoneNumbers: this.enterpriseForm.value.phoneNumbers,
      linkWebsites: this.enterpriseForm.value.linkWebsites,
      linkFacebook: this.enterpriseForm.value.linkFacebook,
      linkGoogleMaps: this.enterpriseForm.value.linkGoogleMaps,
    }
    console.log("alo" + enterprise)
    // @ts-ignore
    this.enterpriseService.update(this.id, enterprise).subscribe(r => {
      this.dialog.open(DialogSuccessComponent)
      this.router.navigate(["/enterprise/detail"]).then()
      console.log(r + 'ok')
    }, error => {
      this.dialog.open(DialogLoginFailComponent)
      console.log("Lỗi" + error)
    })
  }
}
