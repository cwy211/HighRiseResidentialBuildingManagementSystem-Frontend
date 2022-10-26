import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminOwnershipComponent } from './admin-ownership.component';

describe('AdminOwnershipComponent', () => {
  let component: AdminOwnershipComponent;
  let fixture: ComponentFixture<AdminOwnershipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminOwnershipComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminOwnershipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
