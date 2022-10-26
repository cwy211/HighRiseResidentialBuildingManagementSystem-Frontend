import { Component, OnInit } from '@angular/core';
import { Complaint } from 'src/app/_models/Complaint';
import { ComplaintService } from 'src/app/_services/complaint/complaint.service';

@Component({
  selector: 'app-admin-complaint',
  templateUrl: './admin-complaint.component.html',
  styleUrls: ['./admin-complaint.component.css']
})
export class AdminComplaintComponent implements OnInit {

  complaintList: Complaint[] = [];
  pendingComplaintList: Complaint[] = [];
  processingComplaintList: Complaint[] = [];
  reviewedComplaintList: Complaint[] = [];


  constructor(private complaintService: ComplaintService) { }

  ngOnInit(): void {
    this.getAllComplaint();
  }

  getAllComplaint() {
    this.complaintService.getAllComplaint().subscribe({
      next: (response: any) => {
        this.complaintList = response;
      },
      error: (error) => console.error(error),
      complete: () => this.categoriseComplaints()
    });
  }

  getAllComplaintBySentimentAsc() {
    this.complaintService.getAllComplaintBySentimentAsc().subscribe({
      next: (response: any) => {
        this.complaintList = response;
      },
      error: (error) => console.error(error),
      complete: () => this.categoriseComplaints()
    });
  }

  getAllComplaintMaintenancePriorityAsc() {
    this.complaintService.getAllComplaintMaintenancePriorityAsc().subscribe({
      next: (response: any) => {
        this.complaintList = response;
      },
      error: (error) => console.error(error),
      complete: () => this.categoriseComplaints()
    });
  }


  applyFilter(option: string) {
    if (option == "Sentiment") {
      this.getAllComplaintBySentimentAsc();
    } else if (option == "Maintenance Priority") {
      this.getAllComplaintMaintenancePriorityAsc();
    } else {
      this.getAllComplaint();
    }
  }

  categoriseComplaints() {
    this.pendingComplaintList = [];
    this.processingComplaintList = [];
    this.reviewedComplaintList = [];

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
