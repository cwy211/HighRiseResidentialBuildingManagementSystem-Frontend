import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserAnnouncementComponent } from './user-announcement.component';

describe('UserAnnouncementComponent', () => {
  let component: UserAnnouncementComponent;
  let fixture: ComponentFixture<UserAnnouncementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserAnnouncementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserAnnouncementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
