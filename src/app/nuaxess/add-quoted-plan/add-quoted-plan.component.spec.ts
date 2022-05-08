import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddQuotedPlanComponent } from './add-quoted-plan.component';

describe('AddQuotedPlanComponent', () => {
  let component: AddQuotedPlanComponent;
  let fixture: ComponentFixture<AddQuotedPlanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddQuotedPlanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddQuotedPlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
