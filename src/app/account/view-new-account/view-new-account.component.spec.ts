import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewNewAccountComponent } from './view-new-account.component';

describe('ViewNewAccountComponent', () => {
  let component: ViewNewAccountComponent;
  let fixture: ComponentFixture<ViewNewAccountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewNewAccountComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewNewAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
