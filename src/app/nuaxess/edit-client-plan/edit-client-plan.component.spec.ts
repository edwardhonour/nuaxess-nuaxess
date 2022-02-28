import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditClientPlanComponent } from './edit-client-plan.component';

describe('EditClientPlanComponent', () => {
  let component: EditClientPlanComponent;
  let fixture: ComponentFixture<EditClientPlanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditClientPlanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditClientPlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
