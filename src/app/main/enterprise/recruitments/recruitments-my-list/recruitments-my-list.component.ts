import {Component, OnInit} from '@angular/core';
import {RecruitmentsService} from "../../../../services/recruitments.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Recruitments} from "../../../../models/recruitments";
import {MatDialog} from "@angular/material/dialog";
import {ToastrService} from "ngx-toastr";
import {ApplyNowService} from "../../../../services/apply-now.service";

@Component({
  selector: 'app-recruitments-my-list',
  templateUrl: './recruitments-my-list.component.html',
  styleUrls: ['./recruitments-my-list.component.css']
})
export class RecruitmentsMyListComponent implements OnInit {
  id = localStorage.getItem('ENTERPRISE_ID');
  myListJob: Recruitments[] = [];
  check = "false"

  constructor(
    private activatedRoute: ActivatedRoute,
    private recruitmentsService: RecruitmentsService,
    private router: Router,
    public dialog: MatDialog,
    private apply: ApplyNowService,
    private toarts: ToastrService,
  ) {
  }

  ngOnInit(): void {
    this.loadMyListAll()
  }

  loadMyListAll() {
    this.recruitmentsService.myListRecruitments(this.id).subscribe(result => {
      console.log(result);
      this.myListJob = result;

    }, error => {
      console.log(error);
    })
  }

  changeStatusHidden(id: any) {
    this.recruitmentsService.changeStatusHidden(id).subscribe(() => {
      this.loadMyListAll()
      this.toarts.success('Đã ẩn bài đăng', 'Thông báo')
    })
  }

  changeStatusPublic(id: any) {
    this.recruitmentsService.changeStatusPublic(id).subscribe(() => {
      this.loadMyListAll()
      this.toarts.success('Bài đăng đã công khai', 'Thông báo')
    })
  }

  showEditForm(id: any) {
    this.router.navigate(["/enterprise/" + id + "/edit"])
  }

  mylistCV(id: any) {
    this.router.navigate(["/enterprise/" + id + "/myListCV"])
  }

  showDetails(id: string) {
    this.router.navigate([id + '/details'])
  }
}
