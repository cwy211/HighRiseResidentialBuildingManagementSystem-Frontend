import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewMaintenanceHistoryComponent } from './view-maintenance-history.component';

describe('ViewMaintenanceHistoryComponent', () => {
  let component: ViewMaintenanceHistoryComponent;
  let fixture: ComponentFixture<ViewMaintenanceHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewMaintenanceHistoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewMaintenanceHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
