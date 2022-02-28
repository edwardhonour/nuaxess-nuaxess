import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddClientPlanComponent } from './add-client-plan.component';

describe('AddClientPlanComponent', () => {
  let component: AddClientPlanComponent;
  let fixture: ComponentFixture<AddClientPlanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddClientPlanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddClientPlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
