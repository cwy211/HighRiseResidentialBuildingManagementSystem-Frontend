import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-complaint-keyword',
  templateUrl: './add-complaint-keyword.component.html',
  styleUrls: ['./add-complaint-keyword.component.css']
})
export class AddComplaintKeywordComponent implements OnInit {

  validateForm!: FormGroup;
  @Output() onAddComplaintKeyword: EventEmitter<any> = new EventEmitter();

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      keyword: [null, [Validators.required]]
    });

  }

  submitForm(keywordForm: any): void {
    if (this.validateForm.valid) {
      this.addKeyword(keywordForm);
    } else {
      Object.values(this.validateForm.controls).forEach(control => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    }
  }

  addKeyword(keywordForm: NgForm) {
    this.onAddComplaintKeyword.emit(keywordForm.value.keyword);
    this.validateForm.reset();
  }

}
