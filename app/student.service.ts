import { Injectable } from '@angular/core';
import { Student } from './Interface';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private students:Student[]=[
    {
      name:"John Doe",
      image:"https://imgs.search.brave.com/KRZe2fq1JzRCSgFbrqDr0Y-jGwYJibTxqsiMWm3VPnY/rs:fit:1200:800:1/g:ce/aHR0cHM6Ly9jZG42/LmRpc3NvbHZlLmNv/bS9wL0Q0MzBfNTBf/MDkwL0Q0MzBfNTBf/MDkwXzEyMDAuanBn"
      ,balance:1000,
      registrationNo:'p0001'
    }
  ]

  public registration =''
  constructor() { }

  getStudents(){
    return this.students
  }
  addStudent(student:Student){
    this.students.push(student)
  }
  updateStudent(reg:string, student:Student){
    let x = this.students.findIndex(x=>x.registrationNo===reg)
    this.students[x]=student;
  }

  getStudent(reg:string){
    return this.students.find(x=>x.registrationNo===reg) as Student
  }
}
