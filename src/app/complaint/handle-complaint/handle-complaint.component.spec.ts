import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HandleComplaintComponent } from './handle-complaint.component';

describe('HandleComplaintComponent', () => {
  let component: HandleComplaintComponent;
  let fixture: ComponentFixture<HandleComplaintComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HandleComplaintComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HandleComplaintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
