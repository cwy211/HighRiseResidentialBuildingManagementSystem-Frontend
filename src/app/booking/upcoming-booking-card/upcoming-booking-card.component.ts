import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NzModalService } from 'ng-zorro-antd/modal';

@Component({
  selector: 'app-upcoming-booking-card',
  templateUrl: './upcoming-booking-card.component.html',
  styleUrls: ['./upcoming-booking-card.component.css']
})
export class UpcomingBookingCardComponent implements OnInit {

  @Input() booking: any;
  @Output() onCancelBooking: EventEmitter<any> = new EventEmitter();

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

  constructor(
    private modal: NzModalService
  ) { }

  ngOnInit(): void {
    this.time = this.timeList[(this.booking.slot) - 1].time;
  }

  cancelBooking() {
    this.onCancelBooking.emit(this.booking.id);
  }

  onClick(): void {
    this.modal.confirm({
      nzTitle: '<i>Confirmation</i>',
      nzContent: '<b>Confirm cancellation of booking?</b>',
      nzOnOk: () => this.cancelBooking()
    });
  }

}
