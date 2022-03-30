import {Component, OnInit} from '@angular/core';
import {ActivatedRoute,} from "@angular/router";
import {ApplyNowService} from "../../../../services/apply-now.service";
import {MatDialog} from "@angular/material/dialog";
import {FileCV} from "../../../../models/file-cv";
import {ApplyNow} from "../../../../models/apply-now";
import {DialogDetailCvComponent} from "../../../../notification/dialog-detail-cv/dialog-detail-cv.component";

@Component({
  selector: 'app-recruitment-list-cv',
  templateUrl: './recruitment-list-cv.component.html',
  styleUrls: ['./recruitment-list-cv.component.css']
})
export class RecruitmentListCvComponent implements OnInit {

  listCV: FileCV[] = [];
  count?: any
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
      this.applyNowService.getByRec(id).subscribe(res => {
        this.count = res.length
        console.log(res)
        this.listApply = res
      })
    })
  }

  openCv() {
    this.dialog.open(DialogDetailCvComponent)
  }

  saveIdCv(id: any) {
    localStorage.setItem("idCv", id)
  }

  saveIdRec(id: any) {
    localStorage.setItem("idRec", id)
  }
}
