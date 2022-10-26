import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserHelpdeskTicketComponent } from './user-helpdesk-ticket.component';

describe('UserHelpdeskTicketComponent', () => {
  let component: UserHelpdeskTicketComponent;
  let fixture: ComponentFixture<UserHelpdeskTicketComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserHelpdeskTicketComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserHelpdeskTicketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
