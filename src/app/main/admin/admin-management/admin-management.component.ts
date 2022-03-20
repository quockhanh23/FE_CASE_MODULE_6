import {Component, OnInit} from '@angular/core';
import {ProfileUser} from "../../../models/profile-user";
import {UserService} from "../../../services/user.service";

@Component({
  selector: 'app-admin-management',
  templateUrl: './admin-management.component.html',
  styleUrls: ['./admin-management.component.css']
})
export class AdminManagementComponent implements OnInit {
  id = localStorage.getItem('ID')
  role = localStorage.getItem('ROLE')
  profileUser!: ProfileUser

  constructor(private userService: UserService,
  ) {
  }

  ngOnInit(): void {
    this.userService.getById(this.id).subscribe(res => {
      console.log(res + 'alo')
      this.profileUser = res
    }, error => {
      console.log("Lỗi" + error)
    })
  }

  isLoggedIn(): boolean {
    if (localStorage.getItem('EMAIL') != null) {
      return true;
    }
    return false
  }
}
