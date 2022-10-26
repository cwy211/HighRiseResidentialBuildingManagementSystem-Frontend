import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import * as moment from 'moment';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzModalService } from 'ng-zorro-antd/modal';
import { MaintenanceService } from 'src/app/_services/maintenance/maintenance.service';

@Component({
  selector: 'app-add-fund-usage',
  templateUrl: './add-fund-usage.component.html',
  styleUrls: ['./add-fund-usage.component.css']
})
export class AddFundUsageComponent implements OnInit {

  validateForm!: FormGroup;
  startOfMonth: string = moment().startOf('month').format('YYYY-MM-DD');
  endOfMonth: string = moment().endOf('month').format('YYYY-MM-DD');

  inputReadOnly: boolean = true;

  constructor(
    private maintenanceService: MaintenanceService,
    private message: NzMessageService,
    private modal: NzModalService,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      title: [null, [Validators.required]],
      description: [null, [Validators.required]],
      price: [null, [Validators.required]],
      paymentDate: [new Date()]
    });

  }

  submitForm(fundUsageForm: any): void {
    if (this.validateForm.valid) {
      this.showConfirmAddMaintenanceFundUsage(fundUsageForm);
    } else {
      Object.values(this.validateForm.controls).forEach(control => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    }
  }

  addMaintenanceFundUsage(fundUsageForm: NgForm) {
    var isoPaymentDate = moment(fundUsageForm.value.paymentDate).format("YYYY-MM-DD");
    fundUsageForm.value.paymentDate = isoPaymentDate;
    this.maintenanceService.addMaintenanceFundUsage(fundUsageForm.value).subscribe({
      next: (response) => console.log(response),
      error: (error) => {
        console.error(error);
        this.actionMessage('error', error);
      },
      complete: () => {
        this.actionMessage('success', "Maintenance fund usage added successfully successfully.");
      }

    });

    this.validateForm.controls['title'].reset();
    this.validateForm.controls['description'].reset();
    this.validateForm.controls['price'].reset();

  }

  actionMessage(status: string, message: string): void {
    this.message.create(status, `${message}`);
  }

  showConfirmAddMaintenanceFundUsage(fundUsageForm: NgForm): void {
    this.modal.confirm({
      nzTitle: '<i>Confirmation</i>',
      nzContent: '<b>Confirm new maintenance fund usage?</b>',
      nzOnOk: () => this.addMaintenanceFundUsage(fundUsageForm)
    });
  }

  disabledDate = (inputDate: Date): boolean => {
    if (moment(inputDate).format('YYYY-MM-DD') <= this.endOfMonth && moment(inputDate).format('YYYY-MM-DD') >= this.startOfMonth) {
      return false;
    }
    return true;
  };



}
