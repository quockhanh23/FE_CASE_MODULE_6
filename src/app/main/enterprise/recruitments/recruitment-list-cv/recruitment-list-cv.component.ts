import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {ApplyNowService} from "../../../../services/apply-now.service";
import {MatDialog} from "@angular/material/dialog";
import {ToastrService} from "ngx-toastr";
import {FileCV} from "../../../../models/file-cv";
import {ApplyNow} from "../../../../models/apply-now";

@Component({
  selector: 'app-recruitment-list-cv',
  templateUrl: './recruitment-list-cv.component.html',
  styleUrls: ['./recruitment-list-cv.component.css']
})
export class RecruitmentListCvComponent implements OnInit {

  listCV: FileCV[] = [];

  listApply: ApplyNow[] =[]

  constructor(private activatedRoute: ActivatedRoute,
              private applyNowService: ApplyNowService,
              private router: Router,
              public dialog: MatDialog,
              private toarts: ToastrService
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
}
