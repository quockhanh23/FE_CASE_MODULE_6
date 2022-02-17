import {Component, OnInit} from '@angular/core';
import {Recruitments} from "../../../../models/recruitments";
import {RecruitmentsService} from "../../../../services/recruitments.service";
import {Router} from "@angular/router";
import {ToastrService} from "ngx-toastr";
import {MatDialog} from "@angular/material/dialog";
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
  }


  showDetails(id: string) {
    this.router.navigate([id + '/details'])
  }

  searchByName() {
    this.indexPagination = 0;
    // @ts-ignore
    let name = document.getElementById('search').value
    localStorage.setItem("search",name);
    this.recruitmentsService.searchByName2(name).subscribe(data => {
      // console.log(data)
      if(data.length != 0){
        this.listRecruitmentsNotPagination = data;
      }
      // @ts-ignore
      if ((this.listRecruitmentsNotPagination.length % 5) != 0) {
        // @ts-ignore
        this.totalPagination = (Math.round(this.listRecruitmentsNotPagination.length / 5)) + 1;
      }
    })
    if(name == ""){
      // console.log("test")
      this.ngOnInit()
    } else {
      // @ts-ignore
      this.recruitmentsService.searchByName(name,0).subscribe(res => {
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
  searchByAddress() {
    // @ts-ignore
    let name = document.getElementById('q').value
    console.log(name)
    // @ts-ignore
    this.recruitmentsService.searchByName(name).subscribe(res => {
      this.listJob = res
    },)
  }
// Cụm tìm kiếm theo địa chỉ 1-10
  searchByAddress1() {
    this.recruitmentsService.searchByAddress1().subscribe(res => {
      this.listJob = res
    })
  }

  searchByAddress2() {
    this.recruitmentsService.searchByAddress2().subscribe(res => {
      this.listJob = res
    })
  }

  searchByAddress3() {
    this.recruitmentsService.searchByAddress3().subscribe(res => {
      this.listJob = res
    })
  }

  searchByAddress4() {
    this.recruitmentsService.searchByAddress4().subscribe(res => {
      this.listJob = res
    })
  }

  searchByAddress5() {
    this.recruitmentsService.searchByAddress5().subscribe(res => {
      this.listJob = res
    })
  }

  searchByAddress6() {
    this.recruitmentsService.searchByAddress6().subscribe(res => {
      this.listJob = res
    })
  }

  searchByAddress7() {
    this.recruitmentsService.searchByAddress7().subscribe(res => {
      this.listJob = res
    })
  }

  searchByAddress8() {
    this.recruitmentsService.searchByAddress8().subscribe(res => {
      this.listJob = res
    })
  }

  searchByAddress9() {
    this.recruitmentsService.searchByAddress9().subscribe(res => {
      this.listJob = res
    })
  }

  searchByAddress10() {
    this.recruitmentsService.searchByAddress10().subscribe(res => {
      this.listJob = res
    })
  }

  nextPage() {
   this.indexPagination++ ;
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
    } else if(localStorage.getItem("search") == "") {
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
      localStorage.setItem("search",name);
      // console.log(name)
      // @ts-ignore
      this.recruitmentsService.searchByName(name,this.indexPagination).subscribe(res => {
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
}
