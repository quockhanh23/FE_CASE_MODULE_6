import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-dialog-send-cv',
  templateUrl: './dialog-send-cv.component.html',
  styleUrls: ['./dialog-send-cv.component.css']
})
export class DialogSendCvComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

  reload() {
    location.reload()
  }
}
