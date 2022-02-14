import {Component, OnInit} from '@angular/core';
import {RecruitmentsService} from "../../../../services/recruitments.service";
import {Router} from "@angular/router";
import {Recruitments} from "../../../../models/recruitments";

@Component({
  selector: 'app-recruitments-my-list',
  templateUrl: './recruitments-my-list.component.html',
  styleUrls: ['./recruitments-my-list.component.css']
})
export class RecruitmentsMyListComponent implements OnInit {
  id = localStorage.getItem('ENTERPRISE_ID');
  myListJob: Recruitments[] = [];

  constructor(
    private recruitmentsService: RecruitmentsService,
    private router: Router,
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
      alert("Đã ẩn")
    })
  }

  changeStatusPublic(id: any) {
    this.recruitmentsService.changeStatusPublic(id).subscribe(() => {
      this.loadMyListAll()
      alert("Đã Mở")
    })
  }
}
