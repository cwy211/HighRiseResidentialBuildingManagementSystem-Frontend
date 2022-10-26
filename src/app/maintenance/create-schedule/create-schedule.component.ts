import { Component, Input, OnInit } from '@angular/core';
import { MaintenanceService } from 'src/app/_services/maintenance/maintenance.service';
import * as moment from 'moment';
import { FacilityService } from 'src/app/_services/facility/facility.service';
import { NzMessageService } from 'ng-zorro-antd/message';
import { Facility } from 'src/app/_models/Facility';
import { NewMaintenanceDto } from 'src/app/_models/NewMaintenanceDto';

@Component({
  selector: 'app-create-schedule',
  templateUrl: './create-schedule.component.html',
  styleUrls: ['./create-schedule.component.css']
})
export class CreateScheduleComponent implements OnInit {

  facilityList: Facility[] = [];
  facility: Facility = new Facility();

  scheduleType: string = "Single";


  constructor(
    private maintenanceService: MaintenanceService,
    private facilityService: FacilityService,
    private message: NzMessageService
  ) { }

  ngOnInit(): void {
    this.getAllFacility();
  }

  createRecurringMaintenance(newMaintenance: any) {


    this.maintenanceService.createFacilityMaintenance(newMaintenance).subscribe({
      next: (response) => console.log(response),
      error: (error) => {
        console.error(error);
        this.actionMessage('error', error);
      },
      complete: () => {
        this.actionMessage('success', "Recurring maintenance schedule created successfully");
      }
    }
    );

  }

  createSingleMaintenance(newMaintenance: NewMaintenanceDto) {


    this.maintenanceService.createSingleFacilityMaintenance(newMaintenance).subscribe({
      next: (response) => console.log(response),
      error: (error) => {
        console.error(error);
        this.actionMessage('error', error);
      },
      complete: () => {
        this.actionMessage('success', "Single maintenance schedule created successfully");
      }
    }
    );
  }

  actionMessage(status: string, message: string): void {
    this.message.create(status, `${message}`);
  }

  getAllFacility() {
    this.facilityService.getAllFacility().subscribe({
      next: (response) => {
        this.facilityList = response;
        this.facility = this.facilityList[0];
      },
      error: (error) => console.error(error)
    }
    );
  }

  checkScheduleType(type: string): boolean {
    if (type == this.scheduleType) {
      return true;
    } else {
      return false;
    }
  }

}
