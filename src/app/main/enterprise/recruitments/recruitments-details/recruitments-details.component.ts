import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {RecruitmentsService} from "../../../../services/recruitments.service";
import {Recruitments} from "../../../../models/recruitments";
import {MatDialog} from "@angular/material/dialog";
import {ToastrService} from "ngx-toastr";
import {UserCreateCvComponent} from "../../../user/user-create-cv/user-create-cv.component";
import {DialogApplyNowComponent} from "../../../../notification/dialog-apply-now/dialog-apply-now.component";


@Component({
  selector: 'app-recruitments-details',
  templateUrl: './recruitments-details.component.html',
  styleUrls: ['./recruitments-details.component.css']
})
export class RecruitmentsDetailsComponent implements OnInit {

  recruitments!: Recruitments;
  check = true

  constructor(private activatedRoute: ActivatedRoute,
              private recruitmentsService: RecruitmentsService,
              private router: Router,
              public dialog: MatDialog,
              private toarts: ToastrService,
  ) {
  }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(param => {
      const id = param.get('id')
      // @ts-ignore
      this.recruitmentsService.findById(id).subscribe(res => {
        console.log(res)
        this.recruitments = res
      })
    })
  }

  report() {
    this.check = false
    this.toarts.info("Cảm ơn bạn đã trợ giúp. Chúng tôi sẽ xem xét lại thông tin", 'Thông báo !')
  }
  openDialogCV(){
    this.dialog.open(UserCreateCvComponent)
  }
  applyNow(){
    this.dialog.open(DialogApplyNowComponent)
  }
}
