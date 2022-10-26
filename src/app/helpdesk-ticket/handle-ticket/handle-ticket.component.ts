import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzModalService } from 'ng-zorro-antd/modal';
import { Ticket } from 'src/app/_models/Ticket';
import { HelpdeskTicketService } from 'src/app/_services/helpdesk-ticket/helpdesk-ticket.service';

@Component({
  selector: 'app-handle-ticket',
  templateUrl: './handle-ticket.component.html',
  styleUrls: ['./handle-ticket.component.css']
})
export class HandleTicketComponent implements OnInit {

  ticket:Ticket=new Ticket();
  submitted:boolean=false;
  user:string="";
  id:number=0;

  constructor(
    private helpdeskTicketService:HelpdeskTicketService,
    private activatedRoute:ActivatedRoute,
    private message: NzMessageService,
    private modal: NzModalService,
    private router:Router
    ) { }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe(params => {
      this.id = params['id'];
    });
    this.getHelpdeskTicketById();
  }

  getHelpdeskTicketById(){
    this.helpdeskTicketService.getHelpdeskTicketById(this.id).subscribe({
      next:(response)=>{
        this.ticket=response;
        this.user=this.ticket.ticketUser.userId;
      },
      error:(error)=>console.error(error),
      complete:()=>{
        if(this.ticket.ticketStatus=="Pending"){
          this.processTicket();
        }
      }
    });
  }

  showConfirmHandleTicket(): void {
    this.submitted=true;
    if(this.ticket.ticketResponse!=null&&this.ticket.ticketResponse!=''){
    this.modal.confirm({
      nzTitle: '<i>Confirmation</i>',
      nzContent: '<b>Confirm handling of ticket?</b>',
      nzOnOk: () => this.handleTicket()
    });
  }
  }

  handleTicket(){

      this.helpdeskTicketService.handleHelpdeskTicket(this.ticket).subscribe({
        next:(response)=>console.log(response),
        error:(error)=>{
          console.error(error);
          this.actionMessage('error',error);
        },
        complete:()=>{
          this.actionMessage('success',"Helpdesk ticket handled successfully. You will be redirected back to View Helpdesk Ticket Page in 3 seconds");
          setTimeout(() => this.router.navigate(['/adminHelpdeskTicket']),3000);
        }
  
      });
    
    
  }
  actionMessage(status:string,message:string): void {
    this.message.create(status, `${message}`);
  }

  checkStatus(status:any):boolean{
    if(this.ticket.ticketStatus==status){
      return true;
    }else{
      return false;
    }
  }

  processTicket(){
    const processedTicket={
      id:this.id
    };
    this.helpdeskTicketService.processHelpdeskTicket(processedTicket).subscribe({
      next:(response)=>console.log(response),
      error:(error)=>console.error(error)
    });
  }


}
