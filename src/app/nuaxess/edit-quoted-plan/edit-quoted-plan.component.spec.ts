import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditQuotedPlanComponent } from './edit-quoted-plan.component';

describe('EditQuotedPlanComponent', () => {
  let component: EditQuotedPlanComponent;
  let fixture: ComponentFixture<EditQuotedPlanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditQuotedPlanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditQuotedPlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
