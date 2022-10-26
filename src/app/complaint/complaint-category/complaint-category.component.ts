import { Component, OnInit } from '@angular/core';
import { ComplaintService } from 'src/app/_services/complaint/complaint.service';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { UserService } from 'src/app/_services/user/user.service';


@Component({
  selector: 'app-complaint-category',
  templateUrl: './complaint-category.component.html',
  styleUrls: ['./complaint-category.component.css']
})
export class ComplaintCategoryComponent implements OnInit {

  complaintCategoryList!: any[];
  complaintCategory: string = "";

  constructor(
    private complaintService: ComplaintService,
  ) { }

  ngOnInit(): void {
    this.getAllComplaintCategory();
  }

  getAllComplaintCategory() {
    this.complaintService.getAllComplaintCategory().subscribe({
      next: (response: any) => {
        this.complaintCategoryList = response;
      },
      error: (error) => console.error(error)
    });
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.complaintCategoryList, event.previousIndex, event.currentIndex);
    var sequence: string[] = [];
    for (let i = 0; i < this.complaintCategoryList.length; i++) {
      sequence.push(this.complaintCategoryList[i].complaintCategoryName);
    }
    this.complaintService.updateComplaintCategoryRank(sequence).subscribe({
      next: (response) => console.log(response),
      error: (error) => console.error(error)
    });;
  }

  trackByFn(index: number) {
    return index;
  }


  addComplaintCategory() {
    const newComplaintCategory = {
      complaintCategoryName: this.complaintCategory,
      rank: 1000
    };
    this.complaintService.addComplaintCategory(newComplaintCategory).subscribe({
      next: (response) => console.log(response),
      error: (error) => console.error(error),
      complete: () => this.getAllComplaintCategory()
    });;
    this.complaintCategory = '';
  }

  notOthers(category: string): boolean {
    if (category == "Others") {
      return false;
    }
    return true;
  }



}
