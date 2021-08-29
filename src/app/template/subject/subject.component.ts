import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../service/api/api.service'
import { ISubject } from '../../Models/ISubject.interface'

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.css']
})
export class SubjectComponent implements OnInit {

  public subjects: Array<ISubject> = [];

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.getSubjects().subscribe(res => {
      console.log(res);
      this.subjects = res
    });
  }

}
