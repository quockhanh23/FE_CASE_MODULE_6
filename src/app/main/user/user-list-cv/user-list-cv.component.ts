import {Component, OnInit} from '@angular/core';
import {FileCV} from "../../../models/file-cv";
import {FileCVService} from "../../../services/file-cv.service";
import {ToastrService} from "ngx-toastr";
import {MatDialog} from "@angular/material/dialog";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-user-list-cv',
  templateUrl: './user-list-cv.component.html',
  styleUrls: ['./user-list-cv.component.css']
})
export class UserListCvComponent implements OnInit {

  id = localStorage.getItem('ID');
  fileCVS?: FileCV

  constructor(private fileCVService: FileCVService,
              public dialog: MatDialog,
  ) {
  }

  ngOnInit(): void {
    console.log(this.id)
    this.fileCVService.findByUser(<string>this.id).subscribe(result => {
      console.log(result)
      // @ts-ignore
      this.fileCVS = result
    }, error => {
      console.log("Lỗi: " + error)
    })
  }
}

