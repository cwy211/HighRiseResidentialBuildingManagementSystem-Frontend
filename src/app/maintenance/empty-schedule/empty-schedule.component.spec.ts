import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmptyScheduleComponent } from './empty-schedule.component';

describe('EmptyScheduleComponent', () => {
  let component: EmptyScheduleComponent;
  let fixture: ComponentFixture<EmptyScheduleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmptyScheduleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmptyScheduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
