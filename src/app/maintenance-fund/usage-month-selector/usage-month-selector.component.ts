import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-usage-month-selector',
  templateUrl: './usage-month-selector.component.html',
  styleUrls: ['./usage-month-selector.component.css']
})
export class UsageMonthSelectorComponent implements OnInit {

  @Output() onSearchUsage: EventEmitter<any> = new EventEmitter();

  month: Date = new Date();

  constructor() { }

  ngOnInit(): void {
  }

  searchUsage() {
    this.onSearchUsage.emit(moment(this.month).format("YYYY-MM-DD"));
  }

}
