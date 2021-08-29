import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TeacherComponent } from './template/teacher/teacher.component';
import { StudentComponent } from './template/student/student.component';
import { SubjectComponent } from './template/subject/subject.component';
import { StudentSubjectGradeComponent } from './template/student-subject-grade/student-subject-grade.component'

const routes: Routes = [
  { path: '', redirectTo: 'teacher', pathMatch: 'full' },
  { path: 'teacher', component: TeacherComponent },
  { path: 'student', component: StudentComponent },
  { path: 'subject', component: SubjectComponent },
  { path: 'studentSubjectGrade', component: StudentSubjectGradeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const rountingComponents = [TeacherComponent, StudentComponent, SubjectComponent, StudentSubjectGradeComponent]
