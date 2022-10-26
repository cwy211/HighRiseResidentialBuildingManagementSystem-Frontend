import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateHelpdeskTicketComponent } from './create-helpdesk-ticket.component';

describe('CreateHelpdeskTicketComponent', () => {
  let component: CreateHelpdeskTicketComponent;
  let fixture: ComponentFixture<CreateHelpdeskTicketComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateHelpdeskTicketComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateHelpdeskTicketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
