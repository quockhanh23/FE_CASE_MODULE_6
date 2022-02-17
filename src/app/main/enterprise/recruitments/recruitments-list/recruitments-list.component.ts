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
      console.log(this.listJob)
    });
    this.recruitmentsService.getAll1().subscribe(data => {
      // console.log(data)
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
    // @ts-ignore
    let name = document.getElementById('search').value
    console.log(name)
    // @ts-ignore
    this.recruitmentsService.searchByName(name).subscribe(res => {
      this.listJob = res
    },)
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
    console.log(max)
    if (this.indexPagination > (max / 5)) {
      this.indexPagination -= 1;
      console.log("x")
    } else {
      this.recruitmentsService.getAllRecruitment(this.indexPagination).subscribe(data => {
        // @ts-ignore
        this.listJob = data.content;
        console.log(this.indexPagination)
        console.error()
        console.log(this.listJob)

      }, error => {
        console.log(error)
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
