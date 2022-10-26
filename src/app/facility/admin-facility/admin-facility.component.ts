import { Component, OnInit } from '@angular/core';
import { Facility } from 'src/app/_models/Facility';
import { FacilityService } from 'src/app/_services/facility/facility.service';

@Component({
  selector: 'app-admin-facility',
  templateUrl: './admin-facility.component.html',
  styleUrls: ['./admin-facility.component.css']
})
export class AdminFacilityComponent implements OnInit {

  facilityList: Facility[] = [];

  constructor(private facilityService: FacilityService) { }

  ngOnInit(): void {
    this.getAllFacility();
  }


  getAllFacility() {
    this.facilityService.getAllFacility().subscribe({
      next: (response) => this.facilityList = response,
      error: (error) => console.error(error)
    }
    );
  }

}
