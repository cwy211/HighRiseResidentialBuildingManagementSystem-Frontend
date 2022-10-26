import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzModalService } from 'ng-zorro-antd/modal';
import { HelpdeskTicketService } from 'src/app/_services/helpdesk-ticket/helpdesk-ticket.service';

@Component({
  selector: 'app-create-helpdesk-ticket',
  templateUrl: './create-helpdesk-ticket.component.html',
  styleUrls: ['./create-helpdesk-ticket.component.css']
})
export class CreateHelpdeskTicketComponent implements OnInit {

  @Output() onCreateTicket: EventEmitter<any> = new EventEmitter();

  validateForm!: FormGroup;


  constructor(
    private helpdeskTicketService: HelpdeskTicketService,
    private modal: NzModalService,
    private message: NzMessageService,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      title: [null, [Validators.required]],
      ticketDescription: [null, [Validators.required]]
    });
  }

  submitForm(ticketForm: any): void {
    if (this.validateForm.valid) {
      this.showConfirmCreateHelpdeskTicket(ticketForm);
    } else {
      Object.values(this.validateForm.controls).forEach(control => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    }
  }

  showConfirmCreateHelpdeskTicket(ticketForm: NgForm): void {
    this.modal.confirm({
      nzTitle: '<i>Confirmation</i>',
      nzContent: '<b>Confirm creation of new helpdesk ticket?</b>',
      nzOnOk: () => this.createHelpdeskTicket(ticketForm)
    });
  }

  createHelpdeskTicket(ticketForm: NgForm) {



    this.helpdeskTicketService.createHelpdeskTicket(ticketForm.value).subscribe({
      next: (response) => console.log(response),
      error: (error) => {
        console.error(error);
        this.actionMessage('error', error);
      },
      complete: () => {
        this.actionMessage('success', "Helpdesk ticket created successfully");
      }
    });
    this.validateForm.reset();

  }



  actionMessage(status: string, message: string): void {
    this.message.create(status, `${message}`);
  }

}
