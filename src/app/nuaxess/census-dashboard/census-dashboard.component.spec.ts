import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CensusDashboardComponent } from './census-dashboard.component';

describe('CensusDashboardComponent', () => {
  let component: CensusDashboardComponent;
  let fixture: ComponentFixture<CensusDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CensusDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CensusDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
