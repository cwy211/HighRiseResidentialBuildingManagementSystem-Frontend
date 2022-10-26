import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddFundUsageComponent } from './add-fund-usage.component';

describe('AddFundUsageComponent', () => {
  let component: AddFundUsageComponent;
  let fixture: ComponentFixture<AddFundUsageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddFundUsageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddFundUsageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
