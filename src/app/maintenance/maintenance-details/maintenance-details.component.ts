import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzModalService } from 'ng-zorro-antd/modal';
import { FacilityMaintenance } from 'src/app/_models/FacilityMaintenance';
import { MaintenanceService } from 'src/app/_services/maintenance/maintenance.service';

@Component({
  selector: 'app-maintenance-details',
  templateUrl: './maintenance-details.component.html',
  styleUrls: ['./maintenance-details.component.css']
})
export class MaintenanceDetailsComponent implements OnInit {

  facilityMaintenance: FacilityMaintenance = new FacilityMaintenance();
  id!: number;
  facility: string = '';
  adminIncharge: string = ''
  maintenanceTypeList = ['Inspection', 'Repair', 'Replacement', 'Lubricating'];
  selectedType: string = this.maintenanceTypeList[0];
  submitted: boolean = false;

  index = 0;
  addItem(input: HTMLInputElement): void {
    const value = input.value;
    if (this.maintenanceTypeList.indexOf(value) === -1) {
      this.maintenanceTypeList = [...this.maintenanceTypeList, input.value || `New item ${this.index++}`];
    }
  }

  constructor(
    private activatedRoute: ActivatedRoute,
    private maintenanceService: MaintenanceService,
    private modal: NzModalService,
    private message: NzMessageService
  ) { }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe(params => {
      this.id = params['id'];
    });
    this.getFacilityMaintenanceById();
  }

  getFacilityMaintenanceById() {
    this.maintenanceService.getFacilityMaintenanceById(this.id).subscribe({
      next: (response) => {
        this.facilityMaintenance = response;
        this.facility = this.facilityMaintenance.fmFacility.name;
        if (this.facilityMaintenance.adminIncharged != null) {
          this.adminIncharge = this.facilityMaintenance.adminIncharged.userId;
        } else {
          this.adminIncharge = "None";
        }
      },
      error: (error) => console.error(error)
    }
    );
  }

  checkStatus(status: string) {
    if (this.facilityMaintenance.status == status) {
      return true;
    } else {
      return false;
    }
  }

  saveFacilityMaintenance() {
    this.facilityMaintenance.type = this.selectedType;
    this.maintenanceService.saveFacilityMaintenance(this.facilityMaintenance).subscribe({
      next: (response) => {
        console.log(response);
      },
      error: (error) => console.error(error),
      complete: () => {
        this.actionMessage('success', "Maintenance task handled successfully.");
        setTimeout(() => window.location.reload(), 2000);
      }

    }
    );
  }

  actionMessage(status: string, message: string): void {
    this.message.create(status, `${message}`);
  }

  showConfirmSaveFacilityMaintenance(): void {
    this.submitted = true;
    if (this.facilityMaintenance.description != null && this.facilityMaintenance.description != '') {
      this.modal.confirm({
        nzTitle: '<i>Confirmation</i>',
        nzContent: '<b>Confirm handling of facility maintenance?</b>',
        nzOnOk: () => this.saveFacilityMaintenance()
      });
    }
  }


}
