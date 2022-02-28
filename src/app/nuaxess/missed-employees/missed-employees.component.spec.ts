import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MissedEmployeesComponent } from './missed-employees.component';

describe('MissedEmployeesComponent', () => {
  let component: MissedEmployeesComponent;
  let fixture: ComponentFixture<MissedEmployeesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MissedEmployeesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MissedEmployeesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
