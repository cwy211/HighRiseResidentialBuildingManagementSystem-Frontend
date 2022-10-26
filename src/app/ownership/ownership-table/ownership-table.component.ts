import { Component, Input, OnInit } from '@angular/core';
import { Ownership } from 'src/app/_models/Ownership';

@Component({
  selector: 'app-ownership-table',
  templateUrl: './ownership-table.component.html',
  styleUrls: ['./ownership-table.component.css']
})
export class OwnershipTableComponent implements OnInit {

  @Input() ownershipList: Ownership[] = [];


  constructor() { }

  ngOnInit(): void {
  }

  

}
