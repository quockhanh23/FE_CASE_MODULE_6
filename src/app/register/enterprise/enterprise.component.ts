import { Component, OnInit } from '@angular/core';
import {finalize, Observable} from "rxjs";
import {AngularFireStorage} from "@angular/fire/compat/storage";
import {ActivatedRoute, Router} from "@angular/router";
import {AuthenticationService} from "../../services/authentication.service";
import {UserService} from "../../services/user.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {EnterpriseService} from "../../services/enterprise.service";

@Component({
  selector: 'app-enterprise',
  templateUrl: './enterprise.component.html',
  styleUrls: ['./enterprise.component.css']
})
export class EnterpriseComponent implements OnInit {
  enterpriseForm: FormGroup = new FormGroup({
    nameCompany: new FormControl("",[Validators.required]),
    description: new FormControl(""),
    image: new FormControl("",[Validators.required]),
    addressCompany: new FormControl(""),
    numberOfEmployees: new FormControl(""),
    phoneNumbers: new FormControl("",[Validators.required]),
    linkWebsites: new FormControl(""),
    linkFacebook: new FormControl(""),
    linkGoogleMaps: new FormControl(""),
    email: new FormControl("",[Validators.required, Validators.email]),
    password: new FormControl("",[Validators.required]),
    confirmPassword: new FormControl("",[Validators.required]),
  });
  title = "cloudsSorage";
  // @ts-ignore
  selectedFile: File = null;
  fb: any;
  downloadURL!: Observable<string>;
  constructor(private storage: AngularFireStorage,
              private activatedRoute: ActivatedRoute,
              private router: Router,
              private authenticationService: AuthenticationService,
              private enterprise: EnterpriseService,
              ) {
    console.log(this.authenticationService.currentUserValue);
  }

  ngOnInit(): void {
  }
  onFileSelected1(event:any) {
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
  register(){
    const enterprise = this.enterpriseForm.value;
    console.log(enterprise)
    this.enterprise.register(enterprise).subscribe(() => {
      alert("Tạo tài khoản thành công! Hãy đăng nhập !")
      this.router.navigate(["login/enterprise"])
    },error => {
      console.log(error)
    })
  }
}