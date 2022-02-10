import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {RecruitmentsService} from "../../../../services/recruitments.service";
import {Recruitments} from "../../../../models/recruitments";
import {FormControl, FormGroup} from "@angular/forms";
import {StatusRecruitment} from "../../../../models/status-recruitment";
import {Work} from "../../../../models/work";
import {Position} from "../../../../models/position";
import {ProfileEnterprise} from "../../../../models/profile-enterprise";

@Component({
  selector: 'app-recruitments-details',
  templateUrl: './recruitments-details.component.html',
  styleUrls: ['./recruitments-details.component.css']
})
export class RecruitmentsDetailsComponent implements OnInit {

  // @ts-ignore
  recruitments: Recruitments;
  // formRecruitments = new FormGroup({
  //   id: new FormControl(''),
  //   title: new FormControl(''),
  //   salary: new FormControl(''),
  //   address: new FormControl(''),
  //   description: new FormControl(''),
  //   experience: new FormControl(''),
  //   numberOfRecruitments: new FormControl(''),
  //   dateEnd: Date,
  //   gender: new FormControl(''),
  //   statusRecruitmentId?: StatusRecruitment,
  //   workId: Work,
  //   positionId: Position,
  //   profileEnterprise: ProfileEnterprise
  // })

  constructor(private activatedRoute: ActivatedRoute,
              private recruitmentsService: RecruitmentsService,
              private router: Router
  ) {
  }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(param => {
      const id = param.get('id')
      // @ts-ignore
      this.recruitmentsService.findById(id).subscribe(res => {
        console.log(res)
        // this.recruitments = res
      })
    })
  }

}
