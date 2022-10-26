import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmptyBookingComponent } from './empty-booking.component';

describe('EmptyBookingComponent', () => {
  let component: EmptyBookingComponent;
  let fixture: ComponentFixture<EmptyBookingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmptyBookingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmptyBookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
