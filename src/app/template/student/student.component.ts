import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../service/api/api.service'
import { IStudent } from '../../Models/IStudent.interface'

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  public students: Array<IStudent> = [];

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.getStudents().subscribe(res => {
      console.log(res);
      this.students = res;
    });
  }

}
