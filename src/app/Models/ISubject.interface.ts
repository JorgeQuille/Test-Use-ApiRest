import { ITeacher } from "./ITeachers.interface";

export interface ISubject {
  id: number;
  name: string;
  teacherId: number;
  teacher: ITeacher;
}
