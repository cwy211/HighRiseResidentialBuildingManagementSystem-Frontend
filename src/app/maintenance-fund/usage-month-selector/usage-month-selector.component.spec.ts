import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsageMonthSelectorComponent } from './usage-month-selector.component';

describe('UsageMonthSelectorComponent', () => {
  let component: UsageMonthSelectorComponent;
  let fixture: ComponentFixture<UsageMonthSelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsageMonthSelectorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsageMonthSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
