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
      if (typeof !res == "object") {
        this.loadListAll()
        this.toarts.success("alo","123")
      }
      console.log(typeof res)
    },)
  }
}
