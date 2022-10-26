import { Component, OnInit } from '@angular/core';
import { Unit } from 'src/app/_models/Unit';
import { UnitService } from 'src/app/_services/unit/unit.service';

@Component({
  selector: 'app-view-unit',
  templateUrl: './view-unit.component.html',
  styleUrls: ['./view-unit.component.css']
})
export class ViewUnitComponent implements OnInit {

  term: string = "Unit Number:"
  unitDetailsList: Unit[] = [];

  constructor(private unitService: UnitService) { }

  ngOnInit(): void {
    this.getAllUnit();
  }

  getAllUnit() {
    this.unitService.getAllUnit().subscribe({
      next: (response) => this.unitDetailsList = response,
      error: (error) => console.error(error)
    });
  }

  searchUnit(unitNo: string) {
    if (unitNo != '') {
      this.unitService.searchUnitByUnitId(unitNo).subscribe({
        next: (response) => {
          this.unitDetailsList = response;
        },
        error: (error) => console.error(error)
      });
    }

  }

}
