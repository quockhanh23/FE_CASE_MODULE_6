import {Component, OnInit} from '@angular/core';
import {ActivatedRoute,} from "@angular/router";
import {ApplyNowService} from "../../../../services/apply-now.service";
import {MatDialog} from "@angular/material/dialog";
import {FileCV} from "../../../../models/file-cv";
import {ApplyNow} from "../../../../models/apply-now";
import {DialogDetialCvComponent} from "../../../../notification/dialog-detial-cv/dialog-detial-cv.component";

@Component({
  selector: 'app-recruitment-list-cv',
  templateUrl: './recruitment-list-cv.component.html',
  styleUrls: ['./recruitment-list-cv.component.css']
})
export class RecruitmentListCvComponent implements OnInit {

  listCV: FileCV[] = [];

  listApply: ApplyNow[] = []

  constructor(private activatedRoute: ActivatedRoute,
              private applyNowService: ApplyNowService,
              public dialog: MatDialog,
  ) {
  }

  ngOnInit(): void {
    this.loadMyListAll()
  }

  loadMyListAll() {
    this.activatedRoute.paramMap.subscribe(param => {
      const id = param.get('id')
      // @ts-ignore
      this.applyNowService.getByRec(id).subscribe(res => {
        console.log(res)
        this.listApply = res
      })
    })
  }

  openCv() {
    this.dialog.open(DialogDetialCvComponent)
  }

  saveIdCv(id: any) {
    localStorage.setItem("idCv", id)
  }

  saveIdRec(id: any) {
    localStorage.setItem("idRec", id)
  }
}
