import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../service/api/api.service'
import { ITeacher } from '../../Models/ITeachers.interface'

@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.css'],
  providers: [ApiService]
})
export class TeacherComponent implements OnInit {
  public teachers: Array<ITeacher> = [];

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.getTeachers().subscribe(res => {
      console.log(res);
      this.teachers = res;
    });
  }

}
