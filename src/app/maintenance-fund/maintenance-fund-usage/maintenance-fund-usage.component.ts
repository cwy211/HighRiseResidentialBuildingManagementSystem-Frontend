import { Component, OnInit } from '@angular/core';
import { MaintenanceService } from 'src/app/_services/maintenance/maintenance.service';

@Component({
  selector: 'app-maintenance-fund-usage',
  templateUrl: './maintenance-fund-usage.component.html',
  styleUrls: ['./maintenance-fund-usage.component.css']
})
export class MaintenanceFundUsageComponent implements OnInit {

  usageList: any[] = [];
  sum: number = 0.00;
  searchedDate: string = '';

  constructor(private maintenanceService: MaintenanceService) { }

  ngOnInit(): void {
  }

  getMaintenanceFundUsageByYearMonth(date: string) {
    this.searchedDate = date;
    this.maintenanceService.getMaintenanceFundUsageByYearMonth(date).subscribe({
      next: (response) => this.usageList = response,
      error: (error) => console.error(error),
      complete: () => this.getSum()
    });
  }

  getSum() {
    this.sum = 0.00;

    for (let i = 0; i < this.usageList.length; i++) {
      this.sum = this.sum + this.usageList[i].price;

    }
  }

}
