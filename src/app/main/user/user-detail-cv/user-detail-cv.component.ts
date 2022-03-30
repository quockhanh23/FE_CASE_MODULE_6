import {Component, OnInit} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-user-detail-cv',
  templateUrl: './user-detail-cv.component.html',
  styleUrls: ['./user-detail-cv.component.css']
})
export class UserDetailCvComponent implements OnInit {

  constructor(
    public dialog: MatDialog,
  ) {
  }

  ngOnInit(): void {
  }

  closeDialog() {
    this.dialog.closeAll()
  }
}
