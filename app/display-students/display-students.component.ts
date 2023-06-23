import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Student } from '../Interface';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-display-students',
  templateUrl: './display-students.component.html',
  styleUrls: ['./display-students.component.css']
})
export class DisplayStudentsComponent implements OnInit {
   @Output() sentData= new EventEmitter<{reg:string}>()
  checked =0
students:Student[]=[]
constructor(private studentService :StudentService) {
    this.students=this.studentService.getStudents()
}
ngOnInit(): void {
  console.log(this.checked);
  
}

ShowStudentsWoBalance(){
  this.checked=2
}

OnUpdate(reg:string){
this.sentData.emit({reg})
}

ShowStudentsWithBalance(){
  this.checked=1
}
showAll(){
  this.checked=0
}
}
