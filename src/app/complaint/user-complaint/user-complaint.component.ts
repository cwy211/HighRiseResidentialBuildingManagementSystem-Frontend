import { Component, OnInit } from '@angular/core';
import { Complaint } from 'src/app/_models/Complaint';
import { ComplaintService } from 'src/app/_services/complaint/complaint.service';

@Component({
  selector: 'app-user-complaint',
  templateUrl: './user-complaint.component.html',
  styleUrls: ['./user-complaint.component.css']
})
export class UserComplaintComponent implements OnInit {

  complaintList: Complaint[] = [];
  pendingComplaintList: Complaint[] = [];
  processingComplaintList: Complaint[] = [];
  reviewedComplaintList: Complaint[] = [];


  constructor(private complaintService: ComplaintService) { }

  ngOnInit(): void {
    this.getComplaintByUserName();
  }

  getComplaintByUserName() {
    this.complaintService.getComplaintByUserName().subscribe({
      next: (response: any) => {
        this.complaintList = response;
      },
      error: (error) => console.error(error),
      complete: () => this.categoriseComplaints()
    });
  }

  categoriseComplaints() {
    for (let i = 0; i < this.complaintList.length; i++) {
      switch (this.complaintList[i].complaintStatus) {
        case "Pending":
          this.pendingComplaintList.push(this.complaintList[i]);
          break;
        case "Processing":
          this.processingComplaintList.push(this.complaintList[i]);
          break;
        case "Reviewed":
          this.reviewedComplaintList.push(this.complaintList[i]);
          break;
      }
    }
  }

}
