import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-complaint-filter',
  templateUrl: './complaint-filter.component.html',
  styleUrls: ['./complaint-filter.component.css']
})
export class ComplaintFilterComponent implements OnInit {

  option: string = '';
  options: string[] = ["Sentiment", "Maintenance Priority"];

  @Output() onApplyFilter: EventEmitter<any> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  applyFilter() {
    this.onApplyFilter.emit(this.option);
  }

}
