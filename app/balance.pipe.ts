import { Pipe, PipeTransform } from '@angular/core';
import { Student } from './Interface';

@Pipe({
  name: 'balance'
})
export class BalancePipe implements PipeTransform {

  transform(value:Student[], showbalance:number): Student[] {
    if(value.length===0){
      return value;
    }
    let students:Student[]=[]

    for(let v of value){
      if(showbalance===0){
        students=value
      }
      if(showbalance===1){
        if(v.balance>0){
          students.push(v)
        }
      }
      if(showbalance===2){
        if(v.balance<=0){
          students.push(v)
        }
      }
    }

    return students
  }

}
