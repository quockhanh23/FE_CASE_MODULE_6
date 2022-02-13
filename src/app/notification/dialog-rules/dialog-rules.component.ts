import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-dialog-rules',
  templateUrl: './dialog-rules.component.html',
  styleUrls: ['./dialog-rules.component.css']
})
export class DialogRulesComponent implements OnInit {

  username: string | null = ''

  constructor() {
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
}
