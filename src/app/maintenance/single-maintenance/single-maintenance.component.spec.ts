import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleMaintenanceComponent } from './single-maintenance.component';

describe('SingleMaintenanceComponent', () => {
  let component: SingleMaintenanceComponent;
  let fixture: ComponentFixture<SingleMaintenanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleMaintenanceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleMaintenanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
