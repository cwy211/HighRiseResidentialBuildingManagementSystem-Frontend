import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouteReuseStrategy } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzModalService } from 'ng-zorro-antd/modal';
import { Complaint } from 'src/app/_models/Complaint';
import { ComplaintService } from 'src/app/_services/complaint/complaint.service';

@Component({
  selector: 'app-handle-complaint',
  templateUrl: './handle-complaint.component.html',
  styleUrls: ['./handle-complaint.component.css']
})
export class HandleComplaintComponent implements OnInit {

  id: number = 0;
  complaint: Complaint = new Complaint();
  submitted: boolean = false;
  user: string = '';
  constructor(
    private activatedRoute: ActivatedRoute,
    private complaintService: ComplaintService,
    private modal: NzModalService,
    private message: NzMessageService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe(params => {
      this.id = params['id'];
    });

    this.getComplaintById();
  }

  getComplaintById() {
    this.complaintService.getComplaintById(this.id).subscribe({
      next: (response) => {
        this.complaint = response;
        this.user = this.complaint.complaintUser.userId;
      },
      error: (error) => console.error(error),
      complete: () => {
        if (this.complaint.complaintStatus == "Pending") {
          this.processComplaint();
        }
      }
    });
  }

  showConfirmHandleComplaint(): void {
    this.submitted = true;
    if (this.complaint.complaintResponse != null && this.complaint.complaintResponse != '') {
      this.modal.confirm({
        nzTitle: '<i>Confirmation</i>',
        nzContent: '<b>Confirm handling of ticket?</b>',
        nzOnOk: () => this.handleComplaint()
      });
    }


  }

  handleComplaint() {
    this.complaintService.handleComplaint(this.complaint).subscribe({
      next: (response) => console.log(response),
      error: (error) => {
        console.error(error);
        this.actionMessage('error', error);
      },
      complete: () => {
        this.actionMessage('success', "Complaint handled successfully. You will redirected back in 3 seconds");
        setTimeout(() => this.router.navigate(['/adminComplaint']), 3000);
      }
    });


  }

  actionMessage(status: string, message: string): void {
    this.message.create(status, `${message}`);
  }

  checkStatus(status: any): any {
    if (this.complaint.complaintStatus == status) {
      return true;
    } else {
      return false;
    }
  }

  processComplaint() {
    const processedComplaint = {
      id: this.id
    };
    this.complaintService.processComplaint(processedComplaint).subscribe({
      next: (response) => console.log(response),
      error: (error) => console.error(error)
    });
  }

}
