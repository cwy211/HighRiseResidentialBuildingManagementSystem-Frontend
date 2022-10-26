import { TestBed } from '@angular/core/testing';

import { HelpdeskTicketService } from './helpdesk-ticket.service';

describe('HelpdeskTicketService', () => {
  let service: HelpdeskTicketService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HelpdeskTicketService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
