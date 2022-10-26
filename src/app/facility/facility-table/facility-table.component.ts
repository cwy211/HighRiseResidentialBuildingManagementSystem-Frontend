import { Component, Input, OnInit } from '@angular/core';
import { Facility } from 'src/app/_models/Facility';

@Component({
  selector: 'app-facility-table',
  templateUrl: './facility-table.component.html',
  styleUrls: ['./facility-table.component.css']
})
export class FacilityTableComponent implements OnInit {

  @Input() facilityList: Facility[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
