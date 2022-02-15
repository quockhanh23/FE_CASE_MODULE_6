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
  id = localStorage.getItem('ID');
  username: string | null = ''
  check = true
  enterpriseProfile!: ProfileEnterprise

  constructor(private authService: AuthenticationService,
              private enterpriseService: EnterpriseService
  ) {
  }

  ngOnInit(): void {
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
}
