import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as moment from 'moment';

@Component({
  selector: 'app-fee-details',
  templateUrl: './fee-details.component.html',
  styleUrls: ['./fee-details.component.css']
})
export class FeeDetailsComponent implements OnInit {

  fee: any;
  month: string = '';
  year: string = '';
  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe(params => {
      this.fee = JSON.parse(params['fee'])
    });
    this.getMonthYear();
  }

  getMonthYear() {
    this.month = moment(this.fee.yearMonth).format("MMMM");
    this.year = moment(this.fee.yearMonth).format("YYYY");
  }

}
