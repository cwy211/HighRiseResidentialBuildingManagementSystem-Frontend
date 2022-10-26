import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NzModalService } from 'ng-zorro-antd/modal';
import * as moment from 'moment';

@Component({
  selector: 'app-timeslots',
  templateUrl: './timeslots.component.html',
  styleUrls: ['./timeslots.component.css']
})
export class TimeslotsComponent implements OnInit {

  @Input() slot: any;
  @Input() selectedFacility: any;
  @Input() selectedDate: any;
  @Output() onMakeBooking: EventEmitter<any> = new EventEmitter();

  unavailability: boolean = false;
  timeNow: string = '';
  dateNow: string = '';

  constructor(
    private modal: NzModalService
  ) { }

  ngOnInit(): void {
    this.timeNow = moment().format("HH");
    this.dateNow = moment().format("YYYY-MM-DD");
    this.checkAvailability();
  }


  checkAvailability() {    
    if (this.selectedDate > this.dateNow) {
      this.unavailability = false;
    } else if (this.selectedDate < this.dateNow) {
      this.unavailability = true;
    } else if (this.slot.availability == "no" || parseInt(this.slot.slotTime) < parseInt(this.timeNow)) {
      this.unavailability = true;
    } else {
      this.unavailability = false;
    }
    if(this.slot.availability=="no"){
      this.unavailability = true;
    }
  }

  makeBooking() {
    const newBooking = {
      fbDate: this.selectedDate,
      fbFacility: this.selectedFacility,
      slot: this.slot.slot
    };
    this.unavailability = true;
    this.onMakeBooking.emit(newBooking);

  }

  onClick(): void {
    this.modal.confirm({
      nzTitle: '<i>Confirmation</i>',
      nzContent: '<b>Confirm booking of facility?</b>',
      nzOnOk: () => this.makeBooking()
    });
  }

}
