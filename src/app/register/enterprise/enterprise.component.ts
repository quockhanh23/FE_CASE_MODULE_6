import {Component, OnInit} from '@angular/core';
import {finalize, Observable} from "rxjs";
import {AngularFireStorage} from "@angular/fire/compat/storage";
import {ActivatedRoute, Router} from "@angular/router";
import {AuthenticationService} from "../../services/authentication.service";
import {UserService} from "../../services/user.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {EnterpriseService} from "../../services/enterprise.service";
import {ProfileEnterprise} from "../../models/profile-enterprise";
import {ToastrService} from "ngx-toastr";
import {MatDialog} from "@angular/material/dialog";
import {DialogRegisterSuccessComponent} from "../../notification/dialog-register-success/dialog-register-success.component";
import {DialogRegisterFailComponent} from "../../notification/dialog-register-fail/dialog-register-fail.component";
import {DialogRegisterImageComponent} from "../../notification/dialog-register-image/dialog-register-image.component";
import {DialogCheckRegisterComponent} from "../../notification/dialog-check-register/dialog-check-register.component";

@Component({
  selector: 'app-enterprise',
  templateUrl: './enterprise.component.html',
  styleUrls: ['./enterprise.component.css']
})
export class EnterpriseComponent implements OnInit {
  enterpriseForm: FormGroup = new FormGroup({
    nameCompany: new FormControl("", [Validators.required]),
    description: new FormControl(""),
    // image: new FormControl("", [Validators.required]),
    addressCompany: new FormControl(""),
    numberOfEmployees: new FormControl(""),
    phoneNumbers: new FormControl("", [Validators.required,
      Validators.pattern('(84|0[3|4|5|6|7|8|9])+([0-9]{8})\\b')]),
    linkWebsites: new FormControl(""),
    linkFacebook: new FormControl(""),
    linkGoogleMaps: new FormControl(""),
    email: new FormControl("", [Validators.required, Validators.email]),
    password: new FormControl("", [Validators.required]),
    confirmPassword: new FormControl("", [Validators.required]),
  });
  title = "cloudsSorage";
  // @ts-ignore
  selectedFile: File = null;
  fb: any;
  downloadURL!: Observable<string>;
  enterprise1!: ProfileEnterprise
  checkDone = false
  checkButton = true
  checkDialog = false
  checkImage = false

  constructor(private storage: AngularFireStorage,
              private activatedRoute: ActivatedRoute,
              private router: Router,
              private authenticationService: AuthenticationService,
              private enterprise: EnterpriseService,
              private toarts: ToastrService,
              public dialog: MatDialog,
  ) {
    console.log(this.authenticationService.currentUserValue);
  }

  ngOnInit(): void {
  }

  onFileSelected1(event: any) {
    this.checkImage = true
    let n = Date.now();
    const file = event.target.files[0];
    const filePath = `RoomsImages/${n}`;
    const fileRef = this.storage.ref(filePath);
    const task = this.storage.upload(`RoomsImages/${n}`, file);
    task
      .snapshotChanges()
      .pipe(
        finalize(() => {
          this.downloadURL = fileRef.getDownloadURL();
          this.downloadURL.subscribe(url => {
            if (url) {
              this.fb = url;
              this.checkImage = false
            }
            console.log(this.fb);
          });
        })
      )
      .subscribe(url => {
        if (url) {
          console.log(url);
        }
      });
  }

  register() {
    const enterprise = this.enterpriseForm.value;
    this.openDialogRegisterCheck()
    this.checkDone = true
    this.checkButton = false
    this.enterprise1 = enterprise
    this.enterprise1.image = this.fb
    console.log(this.enterprise1)
    console.log(enterprise)
    this.enterprise.register(this.enterprise1).subscribe(() => {
      this.dialog.closeAll()
      this.router.navigate(["login/enterprise"]).then()
      this.dialog.open(DialogRegisterSuccessComponent)
    }, error => {
      console.log("lỗi nè" + error)
      this.dialog.open(DialogRegisterFailComponent)
      this.reOpenDialog()
      this.checkButton = true
      this.checkDone = false
      this.dialog.closeAll()
      if (this.enterprise1.image == undefined) {
        this.dialog.open(DialogRegisterImageComponent)
      }
    })
  }

  openDialogRegisterCheck() {
    this.dialog.open(DialogCheckRegisterComponent)
  }

  openDialogRegisterSuccess() {
    this.dialog.open(DialogRegisterSuccessComponent)
  }
  reOpenDialog() {
    setTimeout(() => {
      this.dialog.open(DialogRegisterFailComponent)
    }, 200)
  }
}
