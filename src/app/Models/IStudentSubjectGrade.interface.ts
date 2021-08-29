import { IStudent } from "./IStudent.interface";
import { ISubject } from "./ISubject.interface";

export interface IStudentSubjectGrade {
  homework_grade: number;
  test_grade: number;
  average: number;
  status_Subject: string;
  subjectId: number;
  studentId: number;
  subject: ISubject;
  student: IStudent;
}
