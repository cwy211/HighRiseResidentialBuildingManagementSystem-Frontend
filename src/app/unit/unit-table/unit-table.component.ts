import { Component, Input, OnInit } from '@angular/core';
import { Unit } from 'src/app/_models/Unit';

@Component({
  selector: 'app-unit-table',
  templateUrl: './unit-table.component.html',
  styleUrls: ['./unit-table.component.css']
})
export class UnitTableComponent implements OnInit {

  @Input() unitDetailsList: Unit[] = [];

  constructor() { }

  ngOnInit(): void {
  }



}
