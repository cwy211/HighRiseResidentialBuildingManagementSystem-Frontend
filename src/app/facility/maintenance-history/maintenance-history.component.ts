import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MaintenanceService } from 'src/app/_services/maintenance/maintenance.service';

@Component({
  selector: 'app-maintenance-history',
  templateUrl: './maintenance-history.component.html',
  styleUrls: ['./maintenance-history.component.css']
})
export class MaintenanceHistoryComponent implements OnInit {

  facilityId: number = 0;
  maintenanceHistoryList: any[] = [];
  constructor(
    private maintenanceService: MaintenanceService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe(params => {
      this.facilityId = params['facilityId'];
    });
    this.getMaintenanceHistoryByFacility();
  }

  getMaintenanceHistoryByFacility() {
    this.maintenanceService.getMaintenanceHistoryByFacility(this.facilityId).subscribe({
      next: (response) => this.maintenanceHistoryList = response,
      error: (error) => {
        console.error(error);
      }
    });
  }

}
