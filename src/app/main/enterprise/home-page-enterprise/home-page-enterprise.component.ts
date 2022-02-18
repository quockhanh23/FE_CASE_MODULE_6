import {Component, OnInit} from '@angular/core';
import {RecruitmentsService} from "../../../services/recruitments.service";
import {Router} from "@angular/router";
import {Recruitments} from "../../../models/recruitments";
import {DialogClickDetailComponent} from "../../../notification/dialog-click-detail/dialog-click-detail.component";
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-home-page-enterprise',
  templateUrl: './home-page-enterprise.component.html',
  styleUrls: ['./home-page-enterprise.component.css']
})
export class HomePageEnterpriseComponent implements OnInit {
  listJobOrderByDate: Recruitments[] = []
  listJobVIPOrderByDate: Recruitments[] = []
  checkLogin = true
  constructor(private recruitmentsService: RecruitmentsService,
              private router: Router,
              public dialog: MatDialog,) {
  }

  ngOnInit(): void {
    this.loadListAllOrderByDate()
    this.loadListVIPOrderByDate()
  }

  loadListAllOrderByDate() {
    this.recruitmentsService.listRecruitmentsAllOrderByDate().subscribe(result => {
      console.log(result);
      this.listJobOrderByDate = result;
    }, loi => {
      console.log(loi);
    })
  }

  loadListVIPOrderByDate() {
    this.recruitmentsService.listRecruitmentsVIPOrderByDate().subscribe(result => {
      console.log(result);
      this.listJobVIPOrderByDate = result;
    }, error => {
      console.log(error);
    })
  }
  isLoggedIn(): boolean {
    if (localStorage.getItem('EMAIL') != null) {
      return true;
    }
    return false
  }
  clickDetail(){
    this.dialog.open(DialogClickDetailComponent)
  }
}
