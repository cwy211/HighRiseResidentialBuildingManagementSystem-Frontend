import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-facility-card',
  templateUrl: './facility-card.component.html',
  styleUrls: ['./facility-card.component.css']
})
export class FacilityCardComponent implements OnInit {

  @Input() facility: any;

  constructor() { }

  ngOnInit(): void {
  }



}
