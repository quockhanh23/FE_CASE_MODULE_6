import {Component, OnInit} from '@angular/core';
import {UserService} from "../../../services/user.service";
import {ProfileUser} from "../../../models/profile-user";

@Component({
  selector: 'app-admin-users-list',
  templateUrl: './admin-users-list.component.html',
  styleUrls: ['./admin-users-list.component.css']
})
export class AdminUsersListComponent implements OnInit {
  users?: ProfileUser[]
  count?: any

  constructor(private user: UserService,) {
  }

  ngOnInit(): void {
    this.user.getAll().subscribe(result => {
      console.log("all users: " + result);
      this.count = result.length
      this.users = result;
    }, error => {
      console.log(error);
    })
  }

}
