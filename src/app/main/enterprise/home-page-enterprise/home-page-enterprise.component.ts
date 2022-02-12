import { Component, OnInit } from '@angular/core';
import {RecruitmentsService} from "../../../services/recruitments.service";
import {Router} from "@angular/router";
import {Recruitments} from "../../../models/recruitments";

@Component({
  selector: 'app-home-page-enterprise',
  templateUrl: './home-page-enterprise.component.html',
  styleUrls: ['./home-page-enterprise.component.css']
})
export class HomePageEnterpriseComponent implements OnInit {
  listJobOrderByDate: Recruitments[] = []
  constructor( private recruitmentsService: RecruitmentsService,
               private router: Router) { }

  ngOnInit(): void {
    this.loadListAllOrderByDate()
  }
  loadListAllOrderByDate(){
    this.recruitmentsService.listRecruitmentsAllOrderByDate().subscribe(result => {
      console.log(result);
      this.listJobOrderByDate = result;
    }, loi => {
      console.log(loi);
    })
  }
}
