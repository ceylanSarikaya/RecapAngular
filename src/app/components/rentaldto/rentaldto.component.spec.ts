import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RentaldtoComponent } from './rentaldto.component';

describe('RentaldtoComponent', () => {
  let component: RentaldtoComponent;
  let fixture: ComponentFixture<RentaldtoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RentaldtoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RentaldtoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
