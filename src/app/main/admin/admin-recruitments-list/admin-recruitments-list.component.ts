import {Component, OnInit} from '@angular/core';
import {RecruitmentsService} from "../../../services/recruitments.service";
import {Router} from "@angular/router";
import {MatDialog} from "@angular/material/dialog";
import {ToastrService} from "ngx-toastr";
import {Recruitments} from "../../../models/recruitments";

@Component({
  selector: 'app-admin-recruitmentts-list',
  templateUrl: './admin-recruitments-list.component.html',
  styleUrls: ['./admin-recruitments-list.component.css']
})
export class AdminRecruitmentsListComponent implements OnInit {
  listJob: Recruitments[] = [];

  constructor(
    private recruitmentsService: RecruitmentsService,
    private router: Router,
    public dialog: MatDialog,
    private toarts: ToastrService,
  ) {
  }

  ngOnInit(): void {
    this.loadListAll()
  }

  loadListAll() {
    this.recruitmentsService.listRecruitmentsAll().subscribe(result => {
      console.log(result);
      this.listJob = result;
    }, loi => {
      console.log(loi);
    })
  }

  changeStatusVIP(id: any) {
    this.recruitmentsService.changeStatusVIP(id).subscribe(() => {
      this.loadListAll()
      this.toarts.success('BẬT đề xuất VIP  bài đăng', 'Thông báo')
    })
  }

  changeStatusPublic(id: any) {
    this.recruitmentsService.changeStatusPublic(id).subscribe(() => {
      this.loadListAll()
      this.toarts.success('TẮT đề xuất VIP  bài đăng', 'Thông báo')
    })
  }
}
