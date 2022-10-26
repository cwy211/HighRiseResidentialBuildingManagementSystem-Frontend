import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzModalService } from 'ng-zorro-antd/modal';
import { FacilityService } from 'src/app/_services/facility/facility.service';

@Component({
  selector: 'app-add-facility',
  templateUrl: './add-facility.component.html',
  styleUrls: ['./add-facility.component.css']
})
export class AddFacilityComponent implements OnInit {

  validateForm!: FormGroup;

  name: string = '';
  description: string = '';
  status: string = '';
  isBookingFacility: boolean = false;

  constructor(
    private facilityService: FacilityService,
    private modal: NzModalService,
    private message: NzMessageService,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      name: [null, [Validators.required]],
      description: [null, [Validators.required]],
      bookingStatus: [false],
    });

  }

  submitForm(facilityForm: any): void {
    if (this.validateForm.valid) {
      this.showConfirmAddFacility(facilityForm);
    } else {
      Object.values(this.validateForm.controls).forEach(control => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    }
  }

  showConfirmAddFacility(facilityForm: NgForm): void {
    this.modal.confirm({
      nzTitle: '<i>Confirmation</i>',
      nzContent: '<b>Confirm addition of facility?</b>',
      nzOnOk: () => this.addFacility(facilityForm)
    });
  }

  addFacility(facilityForm: NgForm) {
    facilityForm.value.bookingStatus == true ? facilityForm.value.bookingStatus = "Yes" : facilityForm.value.bookingStatus = "No";


    this.facilityService.addFacility(facilityForm.value).subscribe({
      next: (response) => console.log(response),
      error: (error) => {
        console.error(error);
        this.actionMessage('error', error)
      },
      complete: () => this.actionMessage('success', "Facility added successfully")
    });

    this.validateForm.reset();
  }

  actionMessage(status: string, message: string): void {
    this.message.create(status, `${message}`);
  }



}
