import {Component, OnInit} from '@angular/core';
import {Recruitments} from "../../../../models/recruitments";
import {RecruitmentsService} from "../../../../services/recruitments.service";
import {Router} from "@angular/router";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-recruitments-list',
  templateUrl: './recruitments-list.component.html',
  styleUrls: ['./recruitments-list.component.css']
})
export class RecruitmentsListComponent implements OnInit {
  listJob: Recruitments[] = []

  constructor(
    private recruitmentsService: RecruitmentsService,
    private router: Router,
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


}
