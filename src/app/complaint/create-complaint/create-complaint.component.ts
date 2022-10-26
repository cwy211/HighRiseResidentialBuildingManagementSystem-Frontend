import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzModalService } from 'ng-zorro-antd/modal';
import { ComplaintService } from 'src/app/_services/complaint/complaint.service';

@Component({
  selector: 'app-create-complaint',
  templateUrl: './create-complaint.component.html',
  styleUrls: ['./create-complaint.component.css']
})
export class CreateComplaintComponent implements OnInit {

  validateForm!: FormGroup;

  constructor(
    private complaintService: ComplaintService,
    private message: NzMessageService,
    private modal: NzModalService,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      complaintTitle: [null, [Validators.required]],
      complaintDescription: [null, [Validators.required]]
    });
  }

  submitForm(complaintForm: any): void {
    if (this.validateForm.valid) {
      this.showConfirmCreateComplaint(complaintForm);
    } else {
      Object.values(this.validateForm.controls).forEach(control => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    }
  }

  createComplaint(complaintForm: NgForm) {

    this.complaintService.createComplaint(complaintForm.value).subscribe({
      next: (response) => console.log(response),
      error: (error) => {
        console.error(error);
        this.actionMessage('error', error);
      },
      complete: () => {
        this.actionMessage('success', "Complaint created successfully.");
      }
    });
    this.validateForm.reset();
  }

  actionMessage(status: string, message: string): void {
    this.message.create(status, `${message}`);
  }

  showConfirmCreateComplaint(complaintForm: NgForm): void {
    this.modal.confirm({
      nzTitle: '<i>Confirmation</i>',
      nzContent: '<b>Confirm creation of complaint?</b>',
      nzOnOk: () => this.createComplaint(complaintForm)
    });
  }

}
