import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OwnershipTableComponent } from './ownership-table.component';

describe('OwnershipTableComponent', () => {
  let component: OwnershipTableComponent;
  let fixture: ComponentFixture<OwnershipTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OwnershipTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OwnershipTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
