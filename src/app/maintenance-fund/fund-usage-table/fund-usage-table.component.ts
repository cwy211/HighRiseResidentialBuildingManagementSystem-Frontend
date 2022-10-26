import { Component, Input, OnInit } from '@angular/core';
import { UserService } from 'src/app/_services/user/user.service';
import * as moment from 'moment';
import { FundUsage } from 'src/app/_models/FundUsage';
import { MaintenanceService } from 'src/app/_services/maintenance/maintenance.service';
import { NzModalService } from 'ng-zorro-antd/modal';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'app-fund-usage-table',
  templateUrl: './fund-usage-table.component.html',
  styleUrls: ['./fund-usage-table.component.css']
})
export class FundUsageTableComponent implements OnInit {

  @Input() searchedDate: string = '';
  @Input() usageList: FundUsage[] = [];
  @Input() sum: number = 0.00;
  date: string = '';
  time: string = '';
  monthYearNow: string = '';
  constructor(
    private userService: UserService,
    private maintenanceService: MaintenanceService,
    private modal: NzModalService,
    private message: NzMessageService
  ) { }
  ngOnInit(): void {
    this.monthYearNow = moment().format('MM-yyyy');
  }

  public isRoleDateMatch(allowedRoles: any, date: string): boolean {
    if (this.userService.roleMatch(allowedRoles)) {
      if (moment(date).format('MM-yyyy') == this.monthYearNow) {
        return true;
      }
    }
    return false;

  }

  deleteMaintenanceFundUsage(id: string) {
    this.maintenanceService.deleteMaintenanceFundUsage(id).subscribe({
      next: (response) => {
        console.log(response);
      },
      error: (error) => {
        console.error(error);
        this.actionMessage('error', error);
      },
      complete: () => {
        this.actionMessage('success', "Fund usage deleted successfully");
        setTimeout(() => window.location.reload(), 2000);
      }
    });
  }

  showConfirmDeleteFundUsage(id: string): void {
    this.modal.confirm({
      nzTitle: '<i>Delete Confirmation</i>',
      nzContent: '<b>Confirm deletion of fund usage?</b>',
      nzOnOk: () => this.deleteMaintenanceFundUsage(id)
    });
  }

  actionMessage(status: string, message: string): void {
    this.message.create(status, `${message}`);
  }

}





