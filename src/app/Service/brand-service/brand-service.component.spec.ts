import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrandServiceComponent } from './brand-service.component';

describe('BrandServiceComponent', () => {
  let component: BrandServiceComponent;
  let fixture: ComponentFixture<BrandServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BrandServiceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BrandServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
