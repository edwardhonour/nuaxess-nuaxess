import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DuplicateEmployeesComponent } from './duplicate-employees.component';

describe('DuplicateEmployeesComponent', () => {
  let component: DuplicateEmployeesComponent;
  let fixture: ComponentFixture<DuplicateEmployeesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DuplicateEmployeesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DuplicateEmployeesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
