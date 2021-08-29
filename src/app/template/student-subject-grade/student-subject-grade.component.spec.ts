import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentSubjectGradeComponent } from './student-subject-grade.component';

describe('StudentSubjectGradeComponent', () => {
  let component: StudentSubjectGradeComponent;
  let fixture: ComponentFixture<StudentSubjectGradeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentSubjectGradeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentSubjectGradeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
