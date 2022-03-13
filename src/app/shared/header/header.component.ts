import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from "../../services/authentication.service";
import {EnterpriseService} from "../../services/enterprise.service";
import {ProfileEnterprise} from "../../models/profile-enterprise";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  checkRole = localStorage.getItem('ROLE');
  username: string | null = ''
  role?: any
  check1 = true
  check2 = true
  check3 = true

  enterpriseProfile!: ProfileEnterprise

  constructor(private authService: AuthenticationService,
              private enterpriseService: EnterpriseService,
  ) {
  }

  ngOnInit(): void {
    this.role = localStorage.getItem("ROLE")
    console.log(this.role)
  }

  isLoggedIn(): boolean {
    if (localStorage.getItem('EMAIL') != null) {
      this.username = localStorage.getItem('EMAIL');
      return true;
    }
    return false
  }

  logOut() {
    localStorage.clear();
    this.authService.logout();
  }

  openReload() {
    setTimeout(() => {
      location.reload()
    }, 800)
  }
}
