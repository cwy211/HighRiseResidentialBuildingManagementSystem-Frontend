import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd/message';
import { ComplaintService } from 'src/app/_services/complaint/complaint.service';

@Component({
  selector: 'app-complaint-category-keyword',
  templateUrl: './complaint-category-keyword.component.html',
  styleUrls: ['./complaint-category-keyword.component.css']
})
export class ComplaintCategoryKeywordComponent implements OnInit {

  categoryName: string = "";
  keywords: string[] = [];

  constructor(
    private activatedRoute: ActivatedRoute,
    private complaintService: ComplaintService,
    private message: NzMessageService
  ) { }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe(params => {
      this.categoryName = params['categoryName'];
    });
    this.getKeywordByComplaintCategory();
  }

  getKeywordByComplaintCategory() {
    this.complaintService.getKeywordByComplaintCategory(this.categoryName).subscribe({
      next: (response) => {
        this.keywords = response;
      },
      error: (error) => console.error(error)
    });
  }

  addComplaintKeyword(keyword: string) {
    const newKeyword = {
      category: this.categoryName,
      keyword: keyword
    }
    this.complaintService.addComplaintKeyword(newKeyword).subscribe({
      next: (response) => {
        if (response == "UNAUTHORIZED") {
          this.actionMessage('error', "Duplicated keyword. Please try another keyword.");
        }
      },
      error: (error) => console.error(error),
      complete: () => this.getKeywordByComplaintCategory()
    });
  }

  onClick(keyword: string) {
    this.complaintService.deleteKeyword(keyword).subscribe({
      next: (response) => console.log(response),
      error: (error) => console.error(error),
      complete: () => this.getKeywordByComplaintCategory()
    });
  }

  actionMessage(status: string, message: string): void {
    this.message.create(status, `${message}`);
  }

}
