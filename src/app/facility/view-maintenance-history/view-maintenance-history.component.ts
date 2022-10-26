import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FacilityMaintenance } from 'src/app/_models/FacilityMaintenance';
import { MaintenanceService } from 'src/app/_services/maintenance/maintenance.service';

@Component({
  selector: 'app-view-maintenance-history',
  templateUrl: './view-maintenance-history.component.html',
  styleUrls: ['./view-maintenance-history.component.css']
})
export class ViewMaintenanceHistoryComponent implements OnInit {

  facilityMaintenance: FacilityMaintenance = new FacilityMaintenance();
  id: number = 0;
  admin: string = '';
  facility: string = '';
  constructor(
    private activatedRoute: ActivatedRoute,
    private maintenanceService: MaintenanceService
  ) { }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe(params => {
      this.id = params['maintenanceId'];
    });
    this.getFacilityMaintenanceById();
  }

  getFacilityMaintenanceById() {
    this.maintenanceService.getFacilityMaintenanceById(this.id).subscribe({
      next: (response) => {
        this.facilityMaintenance = response;
        this.facility = this.facilityMaintenance.fmFacility.name;
        this.admin = this.facilityMaintenance.adminIncharged.adminLastName + ' ' + this.facilityMaintenance.adminIncharged.adminFirstName;
      },
      error: (error) => console.error(error)
    }
    );
  }

}
