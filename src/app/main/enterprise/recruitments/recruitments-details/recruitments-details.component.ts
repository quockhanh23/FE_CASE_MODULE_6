import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {RecruitmentsService} from "../../../../services/recruitments.service";
import {Recruitments} from "../../../../models/recruitments";
import {MatDialog} from "@angular/material/dialog";
import {ToastrService} from "ngx-toastr";
import {UserCreateCvComponent} from "../../../user/user-create-cv/user-create-cv.component";
import {DialogApplyNowComponent} from "../../../../notification/dialog-apply-now/dialog-apply-now.component";
import {ApplyNowService} from "../../../../services/apply-now.service";


@Component({
  selector: 'app-recruitments-details',
  templateUrl: './recruitments-details.component.html',
  styleUrls: ['./recruitments-details.component.css']
})
export class RecruitmentsDetailsComponent implements OnInit {
  currentUser = localStorage.getItem("currentUser");
  checkRole = localStorage.getItem('ROLE');
  recruitments!: Recruitments;
  check = true
  idRec!: string
  checkApply = false

  constructor(private activatedRoute: ActivatedRoute,
              private recruitmentsService: RecruitmentsService,
              private router: Router,
              public dialog: MatDialog,
              private toarts: ToastrService,
              private applyNow1: ApplyNowService
  ) {
  }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(param => {
      const id = param.get('id')
      this.idRec = "" + id
      localStorage.setItem('idRec', this.idRec)
      // @ts-ignore
      this.recruitmentsService.findById(id).subscribe(res => {
        // console.log(res)
        this.recruitments = res
      })
    })
    this.checkApplyNow()
  }

  report() {
    this.check = false
    this.toarts.info("Cảm ơn bạn đã trợ giúp. Chúng tôi sẽ xem xét lại thông tin", 'Thông báo !')
  }

  openDialogCV() {
    this.dialog.open(UserCreateCvComponent)
  }

  applyNow() {
    this.dialog.open(DialogApplyNowComponent)
  }

  checkApplyNow() {
    console.log("vào hàm")
    let idRec = localStorage.getItem("idRec")
    let idUser = localStorage.getItem("ID")
    this.applyNow1.findByIdUser(idUser).subscribe(res => {
      // @ts-ignore
      console.log("id của Cv " + res.id)
      console.log(idRec)
      // @ts-ignore
      this.applyNow1.getById(idRec, res.id).subscribe(res => {
        console.log(res)
        if (res.length != 0) {
          this.checkApply = true
          console.log("Lỗi")
        }
      })
    })
  }
}
