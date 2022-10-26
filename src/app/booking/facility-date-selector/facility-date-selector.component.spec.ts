import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacilityDateSelectorComponent } from './facility-date-selector.component';

describe('FacilityDateSelectorComponent', () => {
  let component: FacilityDateSelectorComponent;
  let fixture: ComponentFixture<FacilityDateSelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FacilityDateSelectorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FacilityDateSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
