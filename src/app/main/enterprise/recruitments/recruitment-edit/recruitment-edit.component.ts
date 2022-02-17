import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {RecruitmentsService} from "../../../../services/recruitments.service";
import {Recruitments} from "../../../../models/recruitments";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Work} from "../../../../models/work";
import {Position} from "../../../../models/position";
import {PositionService} from "../../../../services/position.service";
import {WorkService} from "../../../../services/work.service";
import {ToastrService} from "ngx-toastr";
import {MatDialog} from "@angular/material/dialog";
import {DialogSuccessComponent} from "../../../../notification/dialog-success/dialog-success.component";
import {DialogFailComponent} from "../../../../notification/dialog-fail/dialog-fail.component";

@Component({
  selector: 'app-recruitment-edit',
  templateUrl: './recruitment-edit.component.html',
  styleUrls: ['./recruitment-edit.component.css']
})
export class RecruitmentEditComponent implements OnInit {
  listWork: Work[] = []
  listPosition: Position[] = []
  recruitment?: Recruitments;
  id: any;

  recruitmentForm: FormGroup = new FormGroup({
    title: new FormControl("", [Validators.required]),
    salary: new FormControl("", [Validators.required]),
    address: new FormControl("", [Validators.required]),
    description: new FormControl("", [Validators.required]),
    experience: new FormControl("", [Validators.required]),
    numberOfRecruitments: new FormControl("", [Validators.required]),
    dateEnd: new FormControl("", [Validators.required]),
    gender: new FormControl("", [Validators.required]),
    workId: new FormControl(),
    positionId: new FormControl("", [Validators.required]),
  });

  constructor(private activatedRoute: ActivatedRoute,
              private recruitmentsService: RecruitmentsService,
              private positionService: PositionService,
              private workService: WorkService,
              private toarts: ToastrService,
              private router: Router,
              public dialog: MatDialog,
  ) {
  }

  ngOnInit(): void {
    this.loadAll();
    this.loadListPosition();
    this.loadListWork()

  }

  updateRecruitment() {
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
    // this.id = localStorage.getItem("ENTERPRISE_ID")
    // this.activatedRoute.paramMap.subscribe(param => {
    //   const id = param.get('id')
    //   console.log(id)
    this.recruitmentsService.editRecruitment(recruitment, this.recruitment?.id).subscribe(() => {
      this.dialog.open(DialogSuccessComponent)
      this.router.navigate(["/enterprise/myListJob"]).then()
    }, error => {
      console.log(error)
      this.dialog.open(DialogFailComponent)
    })
    // })
  }

  loadAll() {
    this.activatedRoute.paramMap.subscribe(param => {
      const id = param.get('id')
      // @ts-ignore
      this.recruitmentsService.findById(id).subscribe(res => {
        console.log(res)
        this.recruitment = res
        this.recruitmentForm = new FormGroup({
          title: new FormControl(res.title),
          salary: new FormControl(res.salary),
          address: new FormControl(res.address),
          description: new FormControl(res.description),
          experience: new FormControl(res.experience),
          numberOfRecruitments: new FormControl(res.numberOfRecruitments),
          dateEnd: new FormControl(res.dateEnd),
          gender: new FormControl(res.gender),
          workId: new FormControl(res.workId?.id),
          positionId: new FormControl(res.positionId?.id),
        })
      })
    })
  }

  loadListWork() {
    this.workService.getAll().subscribe(result => {
      console.log(result);
      this.listWork = result;
      console.log(this.listWork)
    }, loi => {
      console.log(loi);
    })
  }

  loadListPosition() {
    this.positionService.getAll().subscribe(result => {
      console.log(result);
      this.listPosition = result;
      console.log(this.listPosition)
    }, loi => {
      console.log(loi);
    })
  }
}
