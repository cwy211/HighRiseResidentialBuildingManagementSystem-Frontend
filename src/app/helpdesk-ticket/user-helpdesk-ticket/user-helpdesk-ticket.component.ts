import { Component, OnInit } from '@angular/core';
import { HelpdeskTicketService } from 'src/app/_services/helpdesk-ticket/helpdesk-ticket.service';

@Component({
  selector: 'app-user-helpdesk-ticket',
  templateUrl: './user-helpdesk-ticket.component.html',
  styleUrls: ['./user-helpdesk-ticket.component.css']
})
export class UserHelpdeskTicketComponent implements OnInit {

  ticketList: any[] = [];
  pendingTicketList: any[] = [];
  processingTicketList: any[] = [];
  reviewedTicketList: any[] = [];

  constructor(private helpdeskTicketService: HelpdeskTicketService) { }

  ngOnInit(): void {
    this.getHelpdeskTicketByUser();
  }


  getHelpdeskTicketByUser() {
    this.helpdeskTicketService.getHelpdeskTicketByUser().subscribe({
      next: (response) => this.ticketList = response,
      error: (error) => console.error(error),
      complete: () => this.categoriseTickets()
    });
  }

  createHelpdeskTicket(newTicket: any) {
    this.helpdeskTicketService.createHelpdeskTicket(newTicket).subscribe({
      next: (response) => console.log(response),
      error: (error) => console.error(error),
      complete: () => this.getHelpdeskTicketByUser()
    });
  }

  categoriseTickets() {
    for (let i = 0; i < this.ticketList.length; i++) {
      switch (this.ticketList[i].ticketStatus) {
        case "Pending":
          this.pendingTicketList.push(this.ticketList[i]);
          break;
        case "Processing":
          this.processingTicketList.push(this.ticketList[i]);
          break;
        case "Reviewed":
          this.reviewedTicketList.push(this.ticketList[i]);
          break;
      }
    }
  }

}
