import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as moment from 'moment';

@Component({
  selector: 'app-maintenance-card',
  templateUrl: './maintenance-card.component.html',
  styleUrls: ['./maintenance-card.component.css']
})
export class MaintenanceCardComponent implements OnInit {

  @Input() schedule: any;
  time: string = '';
  constructor(private router: Router) { }

  ngOnInit(): void {
    this.time = moment(this.schedule.fmTime, "HH:mm:ss").format("hh:mm A");
  }

  onClick() {
    this.router.navigate(['/maintenanceDetails'], { queryParams: { id: this.schedule.id } });
  }

}
