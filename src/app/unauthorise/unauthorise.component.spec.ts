import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnauthoriseComponent } from './unauthorise.component';

describe('UnauthoriseComponent', () => {
  let component: UnauthoriseComponent;
  let fixture: ComponentFixture<UnauthoriseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnauthoriseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UnauthoriseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
