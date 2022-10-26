import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-booking-card',
  templateUrl: './booking-card.component.html',
  styleUrls: ['./booking-card.component.css']
})
export class BookingCardComponent implements OnInit {

  @Input() booking: any;
  time!: string;

  timeList = [
    {
      "time": "9am-10am",
    },
    {
      "time": "10am-11am",
    },
    {
      "time": "11am-12pm",
    },
    {
      "time": "12pm-1pm",
    },
    {
      "time": "1pm-2pm",
    },
    {
      "time": "2pm-3pm",
    },
    {
      "time": "3pm-4pm",
    },
    {
      "time": "4pm-5pm",
    },
    {
      "time": "5pm-6pm",
    },
    {
      "time": "6pm-7pm",
    }
  ];

  constructor() { }

  ngOnInit(): void {
    this.time = this.timeList[(this.booking.slot) - 1].time;
  }

}
