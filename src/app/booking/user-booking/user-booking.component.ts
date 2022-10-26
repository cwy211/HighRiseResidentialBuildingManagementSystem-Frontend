import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { NzMessageService } from 'ng-zorro-antd/message';
import { FacilityService } from 'src/app/_services/facility/facility.service';

@Component({
  selector: 'app-user-booking',
  templateUrl: './user-booking.component.html',
  styleUrls: ['./user-booking.component.css']
})
export class UserBookingComponent implements OnInit {

  userBookingList!: any[];
  pastBookingList: any[] = [];
  upcomingBookingList: any[] = [];
  timeList = [
    {
      "time": moment('09:00 AM', 'HH:mm a'),
    },
    {
      "time": moment('10:00 AM', 'HH:mm a'),
    },
    {
      "time": moment('11:00 AM', 'HH:mm a'),
    },
    {
      "time": moment('12:00 PM', 'HH:mm a'),
    },
    {
      "time": moment('01:00 PM', 'HH:mm a'),
    },
    {
      "time": moment('02:00 PM', 'HH:mm a'),
    },
    {
      "time": moment('03:00 PM', 'HH:mm a'),
    },
    {
      "time": moment('04:00 PM', 'HH:mm a'),
    },
    {
      "time": moment('05:00 PM', 'HH:mm a'),
    },
    {
      "time": moment('06:00 PM', 'HH:mm a'),
    }
  ];

  constructor(
    private facilityService: FacilityService,
    private message: NzMessageService,
  ) { }

  ngOnInit(): void {
    this.getFacilityBookingByUser();
  }

  getFacilityBookingByUser() {
    this.facilityService.getFacilityBookingByUser().subscribe({
      next: (response) => {
        this.userBookingList = response;
      },
      error: (error) => console.error(error),
      complete: () => this.sortFacilityBooking()
    });
  }

  sortFacilityBooking() {
    for (let i = 0; i < this.userBookingList.length; i++) {
      var time = this.timeList[(this.userBookingList[i].slot) - 1].time;
      if (this.userBookingList[i].fbDate > moment().format("YYYY-MM-DD")) {
        this.upcomingBookingList.push(this.userBookingList[i]);
      } else if (this.userBookingList[i].fbDate == moment().format("YYYY-MM-DD")) {
        if (moment(time).format("HH") > moment().format("HH")) {
          this.upcomingBookingList.push(this.userBookingList[i]);
        } else {
          this.pastBookingList.push(this.userBookingList[i]);
        }
      } else {
        this.pastBookingList.push(this.userBookingList[i]);
      }
    }
  }

  deleteFacilityBooking(bookingId: number) {
    this.facilityService.deleteFacilityBooking(bookingId).subscribe({
      next: (response) => {
        console.log(response);
      },
      error: (error) => {
        console.error(error);
        this.actionMessage('error', error);
      },
      complete: () => {
        this.actionMessage('success', "Booking cancelled successfully.");
        setTimeout(() => window.location.reload(), 2000);
      }
    });
  }

  actionMessage(status: string, message: string): void {
    this.message.create(status, `${message}`);
  }

}
