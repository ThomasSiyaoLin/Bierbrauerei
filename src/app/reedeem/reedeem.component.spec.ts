import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReedeemComponent } from './reedeem.component';

describe('ReedeemComponent', () => {
  let component: ReedeemComponent;
  let fixture: ComponentFixture<ReedeemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReedeemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReedeemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
