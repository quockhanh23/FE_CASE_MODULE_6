import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {AuthenticationService} from "../../../../services/authentication.service";
import {RecruitmentsService} from "../../../../services/recruitments.service";
import {StatusRecruitment} from "../../../../models/status-recruitment";
import {Work} from "../../../../models/work";
import {PositionService} from "../../../../services/position.service";
import {WorkService} from "../../../../services/work.service";
import {Position} from "../../../../models/position";

@Component({
  selector: 'app-recruitments-create',
  templateUrl: './recruitments-create.component.html',
  styleUrls: ['./recruitments-create.component.css']
})
export class RecruitmentsCreateComponent implements OnInit {
  listWork: Work[] = []
  listPosition: Position[] = []
  id: any;
  recruitmentForm: FormGroup = new FormGroup({
    title: new FormControl("",[Validators.required]),
    salary: new FormControl(""),
    address: new FormControl("",[Validators.required]),
    description: new FormControl(""),
    experience: new FormControl(""),
    numberOfRecruitments: new FormControl("",[Validators.required]),
    dateEnd: new FormControl(""),
    gender: new FormControl(""),
    workId: new FormControl(),
    positionId: new FormControl(""),
  });
  constructor(private activatedRoute: ActivatedRoute,
              private router: Router,
              private authenticationService: AuthenticationService,
              private recruitment: RecruitmentsService,
              private positionService : PositionService,
              private workService : WorkService) { }

  ngOnInit(): void {
    this.loadListPosition();
    this.loadListWork()
  }
  register(){

    const recruitment = {
      title: this.recruitmentForm.value.title,
      salary: this.recruitmentForm.value.salary,
      address: this.recruitmentForm.value.address,
      description: this.recruitmentForm.value.description,
      experience: this.recruitmentForm.value.experience,
      numberOfRecruitments: this.recruitmentForm.value.numberOfRecruitments,
      dateEnd: this.recruitmentForm.value.dateEnd,
      gender: this.recruitmentForm.value.gender,
      workId: {
        id: this.recruitmentForm.value.workId
      },
      positionId: {
        id: this.recruitmentForm.value.positionId
      }
    };

    console.log(recruitment)
    this.id = localStorage.getItem("ENTERPRISE_ID")
    this.recruitment.register(recruitment,this.id).subscribe(() => {
      alert("Tạo job thành công! Hãy đăng nhập !")
      this.router.navigate([""])
    },error => {
      console.log(error)
    })
  }
  loadListWork(){
    this.workService.getAll().subscribe(result => {
      console.log(result);
      this.listWork = result;
      console.log(this.listWork)
    }, loi => {
      console.log(loi);
    })
  }
  loadListPosition(){
    this.positionService.getAll().subscribe(result => {
      console.log(result);
      this.listPosition = result;
      console.log(this.listPosition)
    }, loi => {
      console.log(loi);
    })
  }
}
