import {Component, OnInit} from '@angular/core';
import {Recruitments} from "../../../../models/recruitments";
import {RecruitmentsService} from "../../../../services/recruitments.service";
import {Router} from "@angular/router";
import {ToastrService} from "ngx-toastr";
import {MatDialog} from "@angular/material/dialog";
import {DialogClickDetailComponent} from "../../../../notification/dialog-click-detail/dialog-click-detail.component";

@Component({
  selector: 'app-recruitments-list',
  templateUrl: './recruitments-list.component.html',
  styleUrls: ['./recruitments-list.component.css']
})
export class RecruitmentsListComponent implements OnInit {
  listJob: Recruitments[] = []
  indexPagination: number = 0;
  totalPagination?: number;
  listRecruitmentsNotPagination: Recruitments[] = [];
  checkRole = localStorage.getItem('ROLE');
  role?: any
  checkLogin = true

  constructor(
    private recruitmentsService: RecruitmentsService,
    private router: Router,
    private toarts: ToastrService,
    public dialog: MatDialog,
  ) {

  }

  ngOnInit(): void {
    this.recruitmentsService.getAllRecruitment(0).subscribe(data => {
      // @ts-ignore
      this.listJob = data.content;
      // console.log("data 5 thang khi oninit"+this.listJob)
    });
    this.recruitmentsService.getAll1().subscribe(data => {
      // console.log("lấy hết cả list"+data)
      this.listRecruitmentsNotPagination = data;

      // @ts-ignore
      if ((this.listRecruitmentsNotPagination.length % 5) != 0) {
        // @ts-ignore
        this.totalPagination = (Math.round(this.listRecruitmentsNotPagination.length / 5)) + 1;
      }
    })
    this.role = localStorage.getItem("ROLE")
    console.log(this.role)
  }


  showDetails(id: string) {
    this.router.navigate([id + '/details'])
  }

  searchByName() {
    this.indexPagination = 0;
    // @ts-ignore
    let name = document.getElementById('search').value
    localStorage.setItem("search", name);
    this.recruitmentsService.searchByName2(name).subscribe(data => {
      // console.log(data)
      if (data.length != 0) {
        this.listRecruitmentsNotPagination = data;
      }
      // @ts-ignore
      if ((this.listRecruitmentsNotPagination.length % 5) != 0) {
        // @ts-ignore
        this.totalPagination = (Math.round(this.listRecruitmentsNotPagination.length / 5)) + 1;
      }
    })
    if (name == "") {
      // console.log("test")
      this.ngOnInit()
    } else {
      // @ts-ignore
      this.recruitmentsService.searchByName(name, 0).subscribe(res => {
        // @ts-ignore
        this.listJob = res.content
        // console.log(this.listJob)
      },)
    }

  }

  sortByNewRecruitments() {
    this.recruitmentsService.sortByNewRecruitments().subscribe(res => {
      this.listJob = res
    })
  }

  sortByOldRecruitments() {
    this.recruitmentsService.sortByOldRecruitments().subscribe(res => {
      this.listJob = res
    })
  }

  // tìm kiếm nhanh theo thành phố
  searchByAddress() {
    // @ts-ignore
    let key = document.getElementById('q').value
    console.log(key)
    // @ts-ignore
    this.recruitmentsService.searchByAddress(key).subscribe(res => {
      this.listJob = res
    },)
  }

  // tìm kiếm nhanh theo các trường
  searchRecruitment() {
    // @ts-ignore
    let address = document.getElementById('address').value
    console.log(address)
    // @ts-ignore
    let title = document.getElementById('title').value
    console.log(title)
    // @ts-ignore
    let experience = document.getElementById('experience').value
    console.log(experience)
    // @ts-ignore
    let min = +document.getElementById('min').value
    console.log(min)
    // // @ts-ignore
    // let max = +document.getElementById('max').value
    // console.log(max)
    // @ts-ignore
    let name = document.getElementById('name').value
    console.log(name)
    // @ts-ignore
    this.recruitmentsService.searchRecruitment(address, title, experience, min, 1000000000000, name).subscribe(res => {
      this.listJob = res
    },)
  }

  nextPage() {
    this.indexPagination++;
    let b = this.listRecruitmentsNotPagination.length
    let max = 0
    for (let i = 0; i < b; i++) {
      if (i % 5 == 0) {
        if (i > max) {
          max = i;
        }
      }
    }
    // console.log("độ dài mảng chưa phân trang "+b)
    // console.log(max)
    // console.log(this.indexPagination)
    if (this.indexPagination > (max / 5)) {
      this.indexPagination -= 1;
      // console.log("không có trang thứ 2")
    } else if (localStorage.getItem("search") == "") {
      this.recruitmentsService.getAllRecruitment(this.indexPagination).subscribe(data => {

        // @ts-ignore
        this.listJob = data.content;
        console.error()
        console.log("tìm all")
      }, error => {
        console.log(error)
      })

    } else {
      // @ts-ignore
      let name = document.getElementById('search').value
      localStorage.setItem("search", name);
      // console.log(name)
      // @ts-ignore
      this.recruitmentsService.searchByName(name, this.indexPagination).subscribe(res => {
        // @ts-ignore
        this.listJob = res.content
        // console.log("trang tiếp của list tìm theo tên")
      })
    }
  }

  previousPage() {
    this.indexPagination = this.indexPagination - 1;
    if (this.indexPagination < 0) {
      this.indexPagination = 0;
    } else {
      this.recruitmentsService.getAllRecruitment(this.indexPagination).subscribe((data: Recruitments[]) => {
        // @ts-ignore
        this.listJob = data.content;
      })
    }
  }

  clickDetail() {
    this.dialog.open(DialogClickDetailComponent)
  }

  isLoggedIn(): boolean {
    if (localStorage.getItem('EMAIL') != null) {
      return true;
    }
    return false
  }
}
