import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FixCompanyComponent } from './fix-company.component';

describe('FixCompanyComponent', () => {
  let component: FixCompanyComponent;
  let fixture: ComponentFixture<FixCompanyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FixCompanyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FixCompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
