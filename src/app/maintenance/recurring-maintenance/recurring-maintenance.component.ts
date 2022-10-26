import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import * as moment from 'moment';
import { NzModalService } from 'ng-zorro-antd/modal';
import { Facility } from 'src/app/_models/Facility';
import { NewRecurringMaintenanceDto } from 'src/app/_models/NewRecurringMaintenanceDto';

@Component({
  selector: 'app-recurring-maintenance',
  templateUrl: './recurring-maintenance.component.html',
  styleUrls: ['./recurring-maintenance.component.css']
})
export class RecurringMaintenanceComponent implements OnInit {

  @Input() default: Facility = new Facility();

  @Input() facilityList: Facility[] = [];
  @Output() onCreateRecurringMaintenance: EventEmitter<any> = new EventEmitter();


  startDate = new Date();
  endDate = new Date();
  isoStartDate: string = '';
  isoEndDate: string = '';
  selectedFacility!: any;
  selectedInterval: string = 'Daily';
  time = new Date();
  selectedTime: any;
  nullDate: boolean = false;

  date = null;
  test: any;


  constructor(
    private modal: NzModalService
  ) { }

  ngOnInit(): void {
  }

  createSchedule() {

    const newMaintenance: NewRecurringMaintenanceDto = {
      interval: this.selectedInterval,
      time: this.time.toLocaleTimeString(),
      startDate: this.isoStartDate,
      facility: this.default.id,
      endDate: this.isoEndDate
    };

    this.onCreateRecurringMaintenance.emit(newMaintenance);

    this.startDate = new Date();
    this.endDate = new Date();
    this.selectedFacility = null;
    this.time = new Date();
  }

  showConfirmCreateSchedule(): void {
    if (this.date != null) {
      this.modal.confirm({
        nzTitle: '<i>Confirmation</i>',
        nzContent: '<b>Confirm creation of recurring maintenance schedule?</b>',
        nzOnOk: () => this.createSchedule()
      });
    } else {
      this.nullDate = true;
    }
  }



  onChangeStartDate(result: Date): void {
    this.isoStartDate = moment(result).format("YYYY-MM-DD");
  }

  onChangeEndDate(result: Date): void {
    this.isoEndDate = moment(result).format("YYYY-MM-DD");

  }


  log(value: any): void {
    this.selectedFacility = value;
  }



  intervalLog(value: any) {
    this.selectedInterval = value;
  }

  intervalList = ['Daily', 'Weekly', 'Monthly', 'Yearly'];
  index = 0;
  addItem(input: HTMLInputElement): void {
    const value = input.value;
    if (this.intervalList.indexOf(value) === -1) {
      this.intervalList = [...this.intervalList, input.value || `New item ${this.index++}`];
    }
  }



  onChange(result: Date[]): void {
    this.isoStartDate = moment(result[0]).format("YYYY-MM-DD");
    this.isoEndDate = moment(result[1]).format("YYYY-MM-DD");
    this.nullDate = false;

  }

  disabledStartDate = (startValue: Date): boolean => {
    let startDate = moment(startValue).format("YYYY-MM-DD");
    let today = moment(new Date()).format("YYYY-MM-DD");
    if (startDate >= today) {
      return false;
    }
    return true;
  };

}
