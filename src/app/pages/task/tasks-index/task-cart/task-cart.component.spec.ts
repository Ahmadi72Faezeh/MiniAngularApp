import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskCartComponent } from './task-cart.component';

describe('TaskCartComponent', () => {
  let component: TaskCartComponent;
  let fixture: ComponentFixture<TaskCartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TaskCartComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TaskCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
