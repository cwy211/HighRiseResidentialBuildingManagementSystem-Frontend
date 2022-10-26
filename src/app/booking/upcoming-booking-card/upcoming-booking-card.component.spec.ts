import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpcomingBookingCardComponent } from './upcoming-booking-card.component';

describe('UpcomingBookingCardComponent', () => {
  let component: UpcomingBookingCardComponent;
  let fixture: ComponentFixture<UpcomingBookingCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpcomingBookingCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpcomingBookingCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
