import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Complaint } from 'src/app/_models/Complaint';
import { ComplaintService } from 'src/app/_services/complaint/complaint.service';

@Component({
  selector: 'app-complaint-details',
  templateUrl: './complaint-details.component.html',
  styleUrls: ['./complaint-details.component.css']
})
export class ComplaintDetailsComponent implements OnInit {

  id: number = 0;
  description!: any;
  complaint: Complaint = new Complaint();
  constructor(
    private activatedRoute: ActivatedRoute,
    private complaintService: ComplaintService
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
      },
      error: (error) => console.error(error)
    });
  }



  checkStatus(status: any): any {
    if (this.complaint.complaintStatus == status) {
      return true;
    } else {
      return false;
    }
  }

}
