import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecurringMaintenanceComponent } from './recurring-maintenance.component';

describe('RecurringMaintenanceComponent', () => {
  let component: RecurringMaintenanceComponent;
  let fixture: ComponentFixture<RecurringMaintenanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecurringMaintenanceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecurringMaintenanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
