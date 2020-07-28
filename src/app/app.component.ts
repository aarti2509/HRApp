import { Component } from '@angular/core';
import {CommonService} from './common.service';
import {NgForm} from '@angular/forms'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
 studentObj = {
   first_name :"",
   last_name :"",
   email :"",
   id :""

}
  isUpdate: boolean;

  constructor(private commonService : CommonService )
{}

  addUser(userForm)
  {
    console.log(userForm.value);
    let obj=userForm.value;
    
    this.commonService.createUser(obj).subscribe(respose => {
    alert('Data Added Successfully');
    userForm.form.reset();
    this.commonService.informChild();
    });
  }

  receiveData(student)
  {
      console.log(student);
      this.studentObj = Object.assign({},student);
      this.isUpdate = true;
  }

  updateStudent(userForm)
  {
    this.commonService.updateStudent(this.studentObj).subscribe(() =>{
      alert("Data Updated");
      this.commonService.informChild();
      this.isUpdate = false;
      userForm.form.reset();   
    })
  }

}
