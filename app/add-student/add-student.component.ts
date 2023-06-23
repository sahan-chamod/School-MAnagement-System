import { Component , Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Student } from '../Interface';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit, OnChanges {
  form!:FormGroup
  show=false;
  @Input() reg!:string
 student!:Student
constructor(private fb:FormBuilder ,private studentService:StudentService){

}
ngOnInit(): void {
  this.form= this.fb.group({
    name:[null, [Validators.required]],
    registrationNo:[null, [Validators.required]],   
    image:[null, [Validators.required]],
    balance:[null]
  })
  console.log(this.reg);
}
ngOnChanges(changes: SimpleChanges): void {
   this.student= this.studentService.getStudent(this.reg)
   this.form.setValue({
    registrationNo:this.student.registrationNo,
    name:this.student.name,
    image:this.student.image,
    balance:this.student.balance
   })

  this.show=true
}


SubmitData(){

  if(this.show){
    this.studentService.updateStudent(this.reg, this.form.value)
    this.show=false;
    this.form.reset()
  }
  else{
    let student:Student={...this.form.value, balance:0}
    this.studentService.addStudent(student)
  }
  
}
}
