import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';
import { ITeacher } from '../../Models/ITeachers.interface'
import { IStudent } from '../../Models/IStudent.interface'
import { ISubject } from '../../Models/ISubject.interface'
import { IStudentSubjectGrade } from '../../Models/IStudentSubjectGrade.interface'

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private _url = '/api'

  constructor(private http: HttpClient) {
  }

  public getTeachers(): Observable<ITeacher[]>{
    return this.http.get<ITeacher[]>(this._url +'/Teachers');
  }

  public getStudents(): Observable<IStudent[]> {
    return this.http.get<IStudent[]>(this._url + '/Student');
  }

  public getSubjects(): Observable<ISubject[]> {
    return this.http.get<ISubject[]>(this._url + '/Subject');
  }

  public getStudentSubjectGrades(): Observable<IStudentSubjectGrade[]> {
    return this.http.get<IStudentSubjectGrade[]>(this._url + '/StudentSubjectGrade');
  }

}
