import {Component, OnInit} from '@angular/core';
import {ProfileUser} from "../../../models/profile-user";
import {UserService} from "../../../services/user.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-admin-check-detail-user',
  templateUrl: './admin-check-detail-user.component.html',
  styleUrls: ['./admin-check-detail-user.component.css']
})
export class AdminCheckDetailUserComponent implements OnInit {
  userDetail?: ProfileUser

  constructor(private userService: UserService,
              private activatedRoute: ActivatedRoute,) {
  }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      const id = paramMap.get('id');
      console.log("id user: " + id)
      this.userService.getById(id).subscribe(result => {
        this.userDetail = result
      }, error => {
        console.log("Lỗi: " + error)
      })
    })
  }

}
