import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminHelpdeskTicketComponent } from './admin-helpdesk-ticket.component';

describe('AdminHelpdeskTicketComponent', () => {
  let component: AdminHelpdeskTicketComponent;
  let fixture: ComponentFixture<AdminHelpdeskTicketComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminHelpdeskTicketComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminHelpdeskTicketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
