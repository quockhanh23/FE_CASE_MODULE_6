import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {AuthenticationService} from "../../../../services/authentication.service";
import {RecruitmentsService} from "../../../../services/recruitments.service";

@Component({
  selector: 'app-recruitments-create',
  templateUrl: './recruitments-create.component.html',
  styleUrls: ['./recruitments-create.component.css']
})
export class RecruitmentsCreateComponent implements OnInit {
  recruitmentForm: FormGroup = new FormGroup({
    title: new FormControl("",[Validators.required]),
    salary: new FormControl(""),
    address: new FormControl("",[Validators.required]),
    description: new FormControl(""),
    experience: new FormControl(""),
    numberOfRecruitments: new FormControl("",[Validators.required]),
    dateEnd: new FormControl(""),
    gender: new FormControl(""),
    idEnterprise: new FormControl(localStorage.getItem("idEn")),
    // email: new FormControl("",[Validators.required]),
  });
  constructor(private activatedRoute: ActivatedRoute,
              private router: Router,
              private authenticationService: AuthenticationService,
              private recruitment: RecruitmentsService) { }

  ngOnInit(): void {
  }
  register(){
    const recruitment = this.recruitmentForm.value;
    console.log(recruitment)
    this.recruitment.register(recruitment).subscribe(() => {
      alert("Tạo job thành công! Hãy đăng nhập !")
      this.router.navigate([""])
    },error => {
      console.log(error)
    })
  }
}
