import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../service/api/api.service'
import { IStudentSubjectGrade } from '../../Models/IStudentSubjectGrade.interface'

@Component({
  selector: 'app-student-subject-grade',
  templateUrl: './student-subject-grade.component.html',
  styleUrls: ['./student-subject-grade.component.css']
})
export class StudentSubjectGradeComponent implements OnInit {

  public gradeStudents: Array<IStudentSubjectGrade> = [];

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.getStudentSubjectGrades().subscribe(res => {
      console.log(res);
      this.gradeStudents = res;
    });
  }

  getFindFilter(filter: string): void {
    this.gradeStudents = this.gradeStudents.filter(p => p.status_Subject == filter);
  }
}
