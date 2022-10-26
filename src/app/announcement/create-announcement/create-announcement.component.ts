import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzModalService } from 'ng-zorro-antd/modal';
import { AnnouncementService } from 'src/app/_services/announcement/announcement.service';

@Component({
  selector: 'app-create-announcement',
  templateUrl: './create-announcement.component.html',
  styleUrls: ['./create-announcement.component.css']
})
export class CreateAnnouncementComponent implements OnInit {

  validateForm!: FormGroup;

  constructor(
    private announcementService: AnnouncementService,
    private modal: NzModalService,
    private message: NzMessageService,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      title: [null, [Validators.required]],
      description: [null, [Validators.required]]
    });
  }

  submitForm(announcementForm: any): void {
    if (this.validateForm.valid) {
      this.showConfirmCreateAnnouncement(announcementForm);
    } else {
      Object.values(this.validateForm.controls).forEach(control => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    }
  }

  showConfirmCreateAnnouncement(announcementForm: NgForm): void {
    this.modal.confirm({
      nzTitle: '<i>Confirmation</i>',
      nzContent: '<b>Confirm creation of new announcement?</b>',
      nzOnOk: () => this.createAnnouncement(announcementForm)
    });
  }

  successMessage(): void {
    this.message.create('success', `Announcement created successfully`);
  }

  createAnnouncement(announcementForm: NgForm) {

    this.announcementService.createAnnouncement(announcementForm.value).subscribe({
      next: (response) => console.log(response),
      error: (error) => {
        console.error(error);
        this.actionMessage('error', error);
      },
      complete: () => {
        this.actionMessage('success', "Announcement created successfully.");
      }
    });

    this.validateForm.reset();
  }

  actionMessage(status: string, message: string): void {
    this.message.create(status, `${message}`);
  }
}
