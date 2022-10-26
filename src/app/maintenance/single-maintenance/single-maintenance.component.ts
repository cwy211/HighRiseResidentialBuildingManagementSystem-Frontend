import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import * as moment from 'moment';
import { NzModalService } from 'ng-zorro-antd/modal';
import { Facility } from 'src/app/_models/Facility';
import { NewMaintenanceDto } from 'src/app/_models/NewMaintenanceDto';

@Component({
  selector: 'app-single-maintenance',
  templateUrl: './single-maintenance.component.html',
  styleUrls: ['./single-maintenance.component.css']
})
export class SingleMaintenanceComponent implements OnInit {

  @Input() facilityList: Facility[] = [];
  @Input() default: Facility = new Facility();
  @Output() onCreateSingleMaintenance: EventEmitter<any> = new EventEmitter();


  startDate = new Date();
  isoStartDate: string = '';
  selectedFacility!: Facility;
  time = new Date();


  constructor(
    private modal: NzModalService
  ) { }

  ngOnInit(): void {
  }

  createSchedule() {

    this.isoStartDate = moment(this.startDate).format("YYYY-MM-DD");
    const newMaintenance: NewMaintenanceDto = {
      time: this.time.toLocaleTimeString(),
      startDate: this.isoStartDate,
      facility: this.default.id,
    };


    this.onCreateSingleMaintenance.emit(newMaintenance);
    this.startDate = new Date();
    this.time = new Date();

  }

  showConfirmCreateSchedule(): void {
    this.modal.confirm({
      nzTitle: '<i>Confirmation</i>',
      nzContent: '<b>Confirm creation of single maintenance schedule?</b>',
      nzOnOk: () => this.createSchedule()
    });
  }

  disabledStartDate = (startValue: Date): boolean => {
    if (startValue > new Date()) {
      return false;
    }
    return true;
  };



}
