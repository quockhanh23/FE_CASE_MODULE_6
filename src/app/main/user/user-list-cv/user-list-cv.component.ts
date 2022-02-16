import {Component, Input, OnInit} from '@angular/core';
import {FileCV} from "../../../models/file-cv";
import {FileCVService} from "../../../services/file-cv.service";
import {ToastrService} from "ngx-toastr";
import {MatDialog} from "@angular/material/dialog";
import {Router} from "@angular/router";

@Component({
  selector: 'app-user-list-cv',
  templateUrl: './user-list-cv.component.html',
  styleUrls: ['./user-list-cv.component.css']
})
export class UserListCvComponent implements OnInit {

  id = localStorage.getItem('ID');


  constructor(private fileCVService: FileCVService,
              private toarts: ToastrService,
              public dialog: MatDialog,
              private router: Router,) {
  }

  ngOnInit(): void {

  }
}

