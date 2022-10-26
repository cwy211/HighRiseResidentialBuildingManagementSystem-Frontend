import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserAuthorizationService } from 'src/app/_services/user/user-authorization.service';
import { UserService } from 'src/app/_services/user/user.service';
import * as moment from 'moment';
import { Complaint } from 'src/app/_models/Complaint';
import { NzModalService } from 'ng-zorro-antd/modal';

@Component({
  selector: 'app-complaint-card',
  templateUrl: './complaint-card.component.html',
  styleUrls: ['./complaint-card.component.css']
})
export class ComplaintCardComponent implements OnInit {

  @Input() complaint: Complaint = new Complaint();
  date: string = '';
  time: string = '';
  constructor(
    private router: Router,
    private userAuthService: UserAuthorizationService,
    private userService: UserService,
    private modal: NzModalService
  ) { }

  ngOnInit(): void {
    this.getDateTime();
  }

  onClick() {
    const userRole: string = this.userAuthService.getRole();
    if (this.complaint.complaintStatus == "Pending" && userRole == "Admin") {
      this.showConfirmHandleComplaint();
    } else if (userRole == "Admin" && this.complaint.complaintStatus == "Processing") {
      this.router.navigate(['/handleComplaint'], { queryParams: { id: this.complaint.id } });
    } else {
      this.router.navigate(['/complaintDetails'], { queryParams: { id: this.complaint.id } });
    }
  }

  showConfirmHandleComplaint(): void {
    this.modal.confirm({
      nzTitle: '<i>Confirmation</i>',
      nzContent: '<b>This will turn the complaint status to Processing</b>',
      nzOnOk: () => {
        this.router.navigate(['/handleComplaint'], { queryParams: { id: this.complaint.id } });
      }
    });
  }



  public isRoleMatch(allowedRoles: any) {
    return this.userService.roleMatch(allowedRoles);
  }

  getDateTime() {
    this.date = moment(this.complaint.createdDateTime).format("YYYY-MM-DD");
    this.time = moment(this.complaint.createdDateTime).format("hh:mm A");
  }

}
