import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.css']
})
export class ClockComponent implements OnInit {

  name = 'clock';
  date!: Date;
  hours: any;
  minutes: any;
  seconds: any;
  currentLocale: any;

  test: any;

  constructor() {
    setInterval(() => {
      const currentDate = new Date();
      // @ts-ignore
      this.date = currentDate.toLocaleTimeString();
    }, 1000);
  }

  ngOnInit(): void {
  }
}
