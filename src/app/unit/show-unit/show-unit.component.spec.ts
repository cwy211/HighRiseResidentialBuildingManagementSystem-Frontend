import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowUnitComponent } from './show-unit.component';

describe('ShowUnitComponent', () => {
  let component: ShowUnitComponent;
  let fixture: ComponentFixture<ShowUnitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowUnitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowUnitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
