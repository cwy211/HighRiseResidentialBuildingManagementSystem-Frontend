import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { MaintenanceService } from 'src/app/_services/maintenance/maintenance.service';


@Component({
  selector: 'app-maintenance-schedule',
  templateUrl: './maintenance-schedule.component.html',
  styleUrls: ['./maintenance-schedule.component.css']
})
export class MaintenanceScheduleComponent implements OnInit {

  day!: string;
  sunday: string = '';
  monday: string = '';
  tuesday: string = '';
  wednesday: string = '';
  thursday: string = '';
  friday: string = '';
  saturday: string = '';
  scheduleList!: [];
  sundayScheduleList!: [];
  mondayScheduleList!: [];
  tuesdayScheduleList!: [];
  wednesdayScheduleList!: [];
  thursdayScheduleList!: [];
  fridayScheduleList!: [];
  saturdayScheduleList!: [];

  showEmpty: boolean = false;

  constructor(
    private maintenanceService: MaintenanceService
  ) { }

  ngOnInit(): void {
    var today = new Date();
    this.getWeekDays(moment(today).week());
    this.getFacilityMaintenanceSunday();
    this.getFacilityMaintenanceMonday();
    this.getFacilityMaintenanceTuesday();
    this.getFacilityMaintenanceWednesday();
    this.getFacilityMaintenanceThursday();
    this.getFacilityMaintenanceFriday();
    this.getFacilityMaintenanceSaturday();
  }



  createMaintenance(newMaintenance: any) {
    this.maintenanceService.createFacilityMaintenance(newMaintenance).subscribe({
      next: (response) => console.log(response),
      error: (error) => console.error(error)
    }
    );

  }

  getFacilityMaintenanceSunday() {
    this.maintenanceService.getFacilityMaintenanceByDate(this.sunday).subscribe({
      next: (response) => {
        this.sundayScheduleList = response;
      },
      error: (error) => console.error(error)
    }
    );

  }

  getFacilityMaintenanceMonday() {
    this.maintenanceService.getFacilityMaintenanceByDate(this.monday).subscribe({
      next: (response) => {
        this.mondayScheduleList = response;
      },
      error: (error) => console.error(error)
    }
    );

  }

  getFacilityMaintenanceTuesday() {
    this.maintenanceService.getFacilityMaintenanceByDate(this.tuesday).subscribe({
      next: (response) => {
        this.tuesdayScheduleList = response;
      },
      error: (error) => console.error(error)
    }
    );

  }

  getFacilityMaintenanceWednesday() {
    this.maintenanceService.getFacilityMaintenanceByDate(this.wednesday).subscribe({
      next: (response) => {
        this.wednesdayScheduleList = response;
      },
      error: (error) => console.error(error)
    }
    );

  }

  getFacilityMaintenanceThursday() {
    this.maintenanceService.getFacilityMaintenanceByDate(this.thursday).subscribe({
      next: (response) => {
        this.thursdayScheduleList = response;
      },
      error: (error) => console.error(error)
    }
    );

  }

  getFacilityMaintenanceFriday() {
    this.maintenanceService.getFacilityMaintenanceByDate(this.friday).subscribe({
      next: (response) => {
        this.fridayScheduleList = response;
      },
      error: (error) => console.error(error)
    }
    );

  }

  getFacilityMaintenanceSaturday() {
    this.maintenanceService.getFacilityMaintenanceByDate(this.saturday).subscribe({
      next: (response) => {
        this.saturdayScheduleList = response;
      },
      error: (error) => console.error(error)
    }
    );

  }


  getWeekDays(weekNumber: number) {
    var sunday = moment().week(weekNumber).startOf('week').format("YYYY-MM-DD");
    var monday = moment().week(weekNumber).startOf('week').add(1, 'days').format("YYYY-MM-DD");
    var tuesday = moment().week(weekNumber).startOf('week').add(2, 'days').format("YYYY-MM-DD");
    var wednesday = moment().week(weekNumber).startOf('week').add(3, 'days').format("YYYY-MM-DD");
    var thursday = moment().week(weekNumber).startOf('week').add(4, 'days').format("YYYY-MM-DD");
    var friday = moment().week(weekNumber).startOf('week').add(5, 'days').format("YYYY-MM-DD");
    var saturday = moment().week(weekNumber).startOf('week').add(6, 'days').format("YYYY-MM-DD");
    this.sunday = sunday;
    this.monday = monday;
    this.tuesday = tuesday;
    this.wednesday = wednesday;
    this.thursday = thursday;
    this.friday = friday;
    this.saturday = saturday;
  }





}
