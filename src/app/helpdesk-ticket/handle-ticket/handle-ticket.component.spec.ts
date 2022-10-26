import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HandleTicketComponent } from './handle-ticket.component';

describe('HandleTicketComponent', () => {
  let component: HandleTicketComponent;
  let fixture: ComponentFixture<HandleTicketComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HandleTicketComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HandleTicketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
