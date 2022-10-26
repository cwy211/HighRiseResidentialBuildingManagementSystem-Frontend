import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FundUsage } from 'src/app/_models/FundUsage';
import { MaintenanceService } from 'src/app/_services/maintenance/maintenance.service';

@Component({
  selector: 'app-view-fund-details',
  templateUrl: './view-fund-details.component.html',
  styleUrls: ['./view-fund-details.component.css']
})
export class ViewFundDetailsComponent implements OnInit {

  fundUsage: FundUsage = new FundUsage();
  fundUsageId: string = '';
  uploader: string = '';

  constructor(
    private maintenanceService: MaintenanceService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe(params => {
      this.fundUsageId = params['fundUsageId'];
    });
    this.getMaintenanceFundUsageById();
  }

  getMaintenanceFundUsageById() {
    this.maintenanceService.getMaintenanceFundUsageById(this.fundUsageId).subscribe({
      next: (response) => {
        this.fundUsage = response;
        this.uploader = response.uploader.adminLastName + ' ' + response.uploader.adminFirstName;
      },
      error: (error) => console.error(error)
    });
  }
}
