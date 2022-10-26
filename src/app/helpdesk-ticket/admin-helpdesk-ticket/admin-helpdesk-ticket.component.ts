import { Component, OnInit } from '@angular/core';
import { Ticket } from 'src/app/_models/Ticket';
import { HelpdeskTicketService } from 'src/app/_services/helpdesk-ticket/helpdesk-ticket.service';

@Component({
  selector: 'app-admin-helpdesk-ticket',
  templateUrl: './admin-helpdesk-ticket.component.html',
  styleUrls: ['./admin-helpdesk-ticket.component.css']
})
export class AdminHelpdeskTicketComponent implements OnInit {

  ticketList: Ticket[] = [];
  pendingTicketList: Ticket[] = [];
  processingTicketList: Ticket[] = [];
  reviewedTicketList: Ticket[] = [];

  constructor(private helpdeskTicketService: HelpdeskTicketService) { }

  ngOnInit(): void {
    this.getAllHelpdeskTicket();
  }

  getAllHelpdeskTicket() {
    this.helpdeskTicketService.getAllHelpdeskTicket().subscribe({
      next: (response) => this.ticketList = response,
      error: (error) => console.error(error),
      complete: () => this.categoriseTickets()
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
