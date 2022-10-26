import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Ticket } from 'src/app/_models/Ticket';
import { HelpdeskTicketService } from 'src/app/_services/helpdesk-ticket/helpdesk-ticket.service';

@Component({
  selector: 'app-ticket-details',
  templateUrl: './ticket-details.component.html',
  styleUrls: ['./ticket-details.component.css']
})
export class TicketDetailsComponent implements OnInit {

  id: number = 0;
  status!: any;
  ticket: Ticket = new Ticket();
  user: string = '';

  constructor(
    private activatedRoute: ActivatedRoute,
    private helpdeskTicketService: HelpdeskTicketService
  ) { }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe(params => {
      this.id = params['id'];
    });
    this.getHelpdeskTicketById();
  }

  getHelpdeskTicketById() {
    this.helpdeskTicketService.getHelpdeskTicketById(this.id).subscribe({
      next: (response) => {
        this.ticket = response;
        this.user = this.ticket.ticketUser.userId;
      },
      error: (error) => console.error(error)
    });
  }

  checkStatus(status: any): any {
    if (this.ticket.ticketStatus == status) {
      return true;
    } else {
      return false;
    }
  }

}
