import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Unit } from 'src/app/_models/Unit';
import { UnitService } from 'src/app/_services/unit/unit.service';

@Component({
  selector: 'app-show-unit',
  templateUrl: './show-unit.component.html',
  styleUrls: ['./show-unit.component.css']
})
export class ShowUnitComponent implements OnInit {

  unit: Unit = new Unit();
  unitId: string = '';
  userList: string[] = [];

  constructor(
    private activatedRoute: ActivatedRoute,
    private unitService: UnitService
  ) { }


  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe(params => {
      this.unitId = params['unitId'];
    });
    this.getUnitByUnitId();
  }

  getUnitByUnitId() {
    this.unitService.getUnitByUnitId(this.unitId).subscribe({
      next: (response) => {
        this.unit = response;
        this.userList = response.userList;
      },
      error: (error) => console.error(error)
    });
  }

  noResidents(): boolean {
    if (this.userList.length < 1) {
      return true;
    }
    return false;
  }

}
