import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComplaintCategoryKeywordComponent } from './complaint-category-keyword.component';

describe('ComplaintCategoryKeywordComponent', () => {
  let component: ComplaintCategoryKeywordComponent;
  let fixture: ComponentFixture<ComplaintCategoryKeywordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComplaintCategoryKeywordComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComplaintCategoryKeywordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
