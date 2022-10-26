import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddComplaintKeywordComponent } from './add-complaint-keyword.component';

describe('AddComplaintKeywordComponent', () => {
  let component: AddComplaintKeywordComponent;
  let fixture: ComponentFixture<AddComplaintKeywordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddComplaintKeywordComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddComplaintKeywordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
