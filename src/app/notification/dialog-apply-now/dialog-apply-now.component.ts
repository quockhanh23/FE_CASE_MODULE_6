import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {RecruitmentsService} from "../../services/recruitments.service";
import {MatDialog} from "@angular/material/dialog";
import {ToastrService} from "ngx-toastr";
import {FileCVService} from "../../services/file-cv.service";
import {Recruitments} from "../../models/recruitments";

@Component({
  selector: 'app-dialog-apply-now',
  templateUrl: './dialog-apply-now.component.html',
  styleUrls: ['./dialog-apply-now.component.css']
})
export class DialogApplyNowComponent implements OnInit {
  recruitments!: Recruitments;

  constructor(private activatedRoute: ActivatedRoute,
              private fileCVService: FileCVService,
              private router: Router,
              public dialog: MatDialog,
              private recruitmentsService: RecruitmentsService,
              private toarts: ToastrService,) { }

  ngOnInit(): void {
      // @ts-ignore
      this.recruitmentsService.findById(localStorage.getItem("idRec")).subscribe(res => {
        console.log(res)
        this.recruitments = res
      })
  }
  applyNow(){
    let idUser = localStorage.getItem("ID")
    this.fileCVService.submitCv(idUser,this.recruitments).subscribe(res => {
      console.log(res)
    })
  }
}
