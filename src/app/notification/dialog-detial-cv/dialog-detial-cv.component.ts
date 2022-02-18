import { Component, OnInit } from '@angular/core';
import {FileCVService} from "../../services/file-cv.service";
import {FileCV} from "../../models/file-cv";
import {ActivatedRoute, Router} from "@angular/router";
import {ApplyNowService} from "../../services/apply-now.service";

@Component({
  selector: 'app-dialog-detial-cv',
  templateUrl: './dialog-detial-cv.component.html',
  styleUrls: ['./dialog-detial-cv.component.css']
})
export class DialogDetialCvComponent implements OnInit {
  fileCv1!: FileCV
  constructor( private fileCv: FileCVService,
               private activatedRoute: ActivatedRoute,
               private router: Router,
               private applyNow: ApplyNowService) { }

  ngOnInit(): void {
    this.findCvById()
  }
  findCvById(){
    let idCv = localStorage.getItem("idCv")
    this.fileCv.getById(idCv).subscribe(res => {
      console.log(res)
      this.fileCv1 = res
    })
  }
  setStatus(){
    let idCv = localStorage.getItem("idCv")
    let idRec = localStorage.getItem("idRec")
    this.applyNow.setStatus(idRec,idCv).subscribe(res => {
      console.log(res)
    })
  }
  reload(){
    location.reload()
  }
}
