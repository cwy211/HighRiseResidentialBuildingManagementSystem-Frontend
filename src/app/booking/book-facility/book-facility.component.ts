import { Component, OnInit } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd/message';
import { Facility } from 'src/app/_models/Facility';
import { FacilityService } from 'src/app/_services/facility/facility.service';
import * as moment from 'moment';

@Component({
  selector: 'app-book-facility',
  templateUrl: './book-facility.component.html',
  styleUrls: ['./book-facility.component.css']
})
export class BookFacilityComponent implements OnInit {

  facilityList: Facility[] = [];
  bookingList!: any;
  selectedFacility!: number;
  selectedDate!: string;
  slotList!: any;
  default: Facility = new Facility();


  constructor(
    private facilityService: FacilityService,
    private message: NzMessageService
  ) { }

  ngOnInit(): void {
    this.getAllBookingFacility();
  }

  getAllBookingFacility() {
    this.facilityService.getAllBookingFacility().subscribe({
      next: (response) => {
        this.facilityList = response;
        this.default = this.facilityList[0];
      },
      error: (error) => console.error(error)
    }
    );
  }

  getFacilityBookingByFacilityDate(searchParams: any) {
    this.selectedFacility = searchParams.facilityId;
    this.selectedDate = searchParams.date;
    this.facilityService.getFacilityBookingByFacilityDate(searchParams).subscribe({
      next: (response) => {
        this.bookingList = response;
        let originalSlotList = [
          {
            "slotTime": "9",
            "time": "9am-10am",
            "availability": "yes",
            "slot": 1
          },
          {
            "slotTime": "10",
            "time": "10am-11am",
            "availability": "yes",
            "slot": 2
          },
          {
            "slotTime": "11",
            "time": "11am-12pm",
            "availability": "yes",
            "slot": 3
          },
          {
            "slotTime": "12",
            "time": "12pm-1pm",
            "availability": "yes",
            "slot": 4
          },
          {
            "slotTime": "13",
            "time": "1pm-2pm",
            "availability": "yes",
            "slot": 5
          },
          {
            "slotTime": "14",
            "time": "2pm-3pm",
            "availability": "yes",
            "slot": 6
          },
          {
            "slotTime": "15",
            "time": "3pm-4pm",
            "availability": "yes",
            "slot": 7
          },
          {
            "slotTime": "16",
            "time": "4pm-5pm",
            "availability": "yes",
            "slot": 8
          },
          {
            "slotTime": "17",
            "time": "5pm-6pm",
            "availability": "yes",
            "slot": 9
          },
          {
            "slotTime": "18",
            "time": "6pm-7pm",
            "availability": "yes",
            "slot": 10
          }
        ];
        this.slotList = originalSlotList;
        for (let i = 0; i < this.bookingList.length; i++) {
          this.slotList[(this.bookingList[i].slot) - 1].availability = "no";
        }
      },
      error: (error) => console.error(error)
    }
    );
  }

  makeFacilityBooking(newBooking: any) {
    this.facilityService.makeFacilityBooking(newBooking).subscribe({
      next: (response) => console.log(response),
      error: (error) => {
        console.error(error);
        this.actionMessage('error', error);
      },
      complete: () => {
        this.actionMessage('success', "Booking successful! You can view your bookings in My Bookings");
      }

    }
    );
  }

  actionMessage(status: string, message: string): void {
    this.message.create(status, `${message}`);
  }

}
