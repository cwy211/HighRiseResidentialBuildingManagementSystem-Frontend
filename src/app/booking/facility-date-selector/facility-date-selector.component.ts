import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import * as moment from 'moment';
import { Facility } from 'src/app/_models/Facility';

@Component({
  selector: 'app-facility-date-selector',
  templateUrl: './facility-date-selector.component.html',
  styleUrls: ['./facility-date-selector.component.css']
})
export class FacilityDateSelectorComponent implements OnInit {

  @Input() facilityList: Facility[] = [];
  @Input() title: string = '';
  @Input() default: Facility = new Facility();
  @Output() onSearchSlots: EventEmitter<any> = new EventEmitter();

  isoStartDate!: string;
  startDate: Date = new Date();

  constructor() { }

  ngOnInit(): void {
  }


  searchSlots() {
    this.isoStartDate = moment(this.startDate).format("YYYY-MM-DD");
    const searchParams = {
      facilityId: this.default.id,
      date: this.isoStartDate,
    };
    this.onSearchSlots.emit(searchParams);
  }

}
