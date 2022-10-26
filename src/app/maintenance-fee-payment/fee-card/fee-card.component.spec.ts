import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeeCardComponent } from './fee-card.component';

describe('FeeCardComponent', () => {
  let component: FeeCardComponent;
  let fixture: ComponentFixture<FeeCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeeCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FeeCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
