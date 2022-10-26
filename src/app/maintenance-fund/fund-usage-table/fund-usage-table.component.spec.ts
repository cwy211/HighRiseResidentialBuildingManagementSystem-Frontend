import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FundUsageTableComponent } from './fund-usage-table.component';

describe('FundUsageTableComponent', () => {
  let component: FundUsageTableComponent;
  let fixture: ComponentFixture<FundUsageTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FundUsageTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FundUsageTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
