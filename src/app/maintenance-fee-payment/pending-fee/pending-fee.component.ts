import { Component, OnInit } from '@angular/core';
import { FeeService } from 'src/app/_services/fee/fee.service';

@Component({
  selector: 'app-pending-fee',
  templateUrl: './pending-fee.component.html',
  styleUrls: ['./pending-fee.component.css']
})
export class PendingFeeComponent implements OnInit {

  feeList: [] = [];

  constructor(private feeService: FeeService) { }

  ngOnInit(): void {
    this.getMaintenanceFeeToBePaid();
  }

  getMaintenanceFeeToBePaid() {
    this.feeService.getMaintenanceFeeToBePaid().subscribe({
      next: (response) => this.feeList = response,
      error: (error) => console.error(error)
    });
  }

  checkList(): boolean {
    if (this.feeList.length <= 1) {
      return true;
    }
    return false;
  }

}
