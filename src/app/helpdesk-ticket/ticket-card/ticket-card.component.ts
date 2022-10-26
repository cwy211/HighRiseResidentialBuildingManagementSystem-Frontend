import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Ticket } from 'src/app/_models/Ticket';
import { UserAuthorizationService } from 'src/app/_services/user/user-authorization.service';
import * as moment from 'moment';
import { NzModalService } from 'ng-zorro-antd/modal';


@Component({
  selector: 'app-ticket-card',
  templateUrl: './ticket-card.component.html',
  styleUrls: ['./ticket-card.component.css']
})
export class TicketCardComponent implements OnInit {

  @Input() ticket: Ticket = new Ticket();
  date: string = '';
  time: string = '';

  constructor(
    private userAuthService: UserAuthorizationService,
    private router: Router,
    private modal: NzModalService
  ) { }

  ngOnInit(): void {
    this.getDateTime();
  }

  onClick() {
    const userRole: string = this.userAuthService.getRole();
    if (this.ticket.ticketStatus == "Pending" && userRole == "Admin") {
      this.showConfirmHandleTicket();
    } else if (userRole == "Admin" && this.ticket.ticketStatus == "Processing") {
      this.router.navigate(['/handleTicket'], { queryParams: { id: this.ticket.id } });
    } else {
      this.router.navigate(['/ticketDetails'], { queryParams: { id: this.ticket.id } });
    }
  }

  showConfirmHandleTicket(): void {
    this.modal.confirm({
      nzTitle: '<i>Confirmation</i>',
      nzContent: '<b>This will turn the ticket status to Processing</b>',
      nzOnOk: () => {
        this.router.navigate(['/handleTicket'], { queryParams: { id: this.ticket.id } });
      }
    });
  }

  getDateTime() {
    this.date = moment(this.ticket.ticketDate).format("YYYY-MM-DD");
    this.time = moment(this.ticket.ticketDate).format("hh:mm A");
  }

}
