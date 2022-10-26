import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzModalService } from 'ng-zorro-antd/modal';
import { Facility } from 'src/app/_models/Facility';
import { FacilityService } from 'src/app/_services/facility/facility.service';

@Component({
  selector: 'app-edit-facility',
  templateUrl: './edit-facility.component.html',
  styleUrls: ['./edit-facility.component.css']
})
export class EditFacilityComponent implements OnInit {

  facility: Facility = new Facility();
  facilityId: string = '';
  name: string = '';
  description: string = '';
  status: string = '';
  isBookingFacility: boolean = false;


  constructor(
    private activatedRoute: ActivatedRoute,
    private facilityService: FacilityService,
    private modal: NzModalService,
    private message: NzMessageService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe(params => {
      this.facilityId = params['facilityId'];
    });
    this.getFacilityById();
  }

  getFacilityById() {
    this.facilityService.getFacilityById(this.facilityId).subscribe({
      next: (response) => {
        this.facility = response;
        this.facility.bookingStatus == "Yes" ? this.isBookingFacility = true : this.isBookingFacility = false;

      },
      error: (error) => console.error(error)
    });
  }

  showConfirmEditFacility(): void {
    this.modal.confirm({
      nzTitle: '<i>Confirmation</i>',
      nzContent: '<b>Confirm edit of facility?</b>',
      nzOnOk: () => this.editFacility()
    });
  }

  editFacility() {
    this.isBookingFacility == true ? this.facility.bookingStatus = "Yes" : this.facility.bookingStatus = "No";

    this.facilityService.editFacility(this.facility).subscribe({
      next: (response) => console.log(response),
      error: (error) => {
        console.error(error);
        this.actionMessage('error', error)
      },
      complete: () => {
        this.actionMessage('success', "Facility edit successfully")
        setTimeout(() => this.router.navigate(['/adminFacility']), 2000);
      }
    });

  }

  actionMessage(status: string, message: string): void {
    this.message.create(status, `${message}`);
  }

}
