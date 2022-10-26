import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaintenanceFundUsageComponent } from './maintenance-fund-usage.component';

describe('MaintenanceFundUsageComponent', () => {
  let component: MaintenanceFundUsageComponent;
  let fixture: ComponentFixture<MaintenanceFundUsageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaintenanceFundUsageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MaintenanceFundUsageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
