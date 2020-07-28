import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private http:HttpClient) { }

  userAdded = new Subject();
 private baseUrl="http://localhost:3000/student";
  createUser(obj)
  {
    console.log(obj);
    return this.http.post(`${this.baseUrl}` ,obj);
  }

  getUsers()
  {
    return this.http.get(`${this.baseUrl}`);
  }

  updateStudent(student)
  {
    return this.http.put("http://localhost:3000/student/"+student.id,student);
  }

  deleteStudents(student)
  {
    return this.http.delete(`${this.baseUrl}`+"/"+student.id);
  }

  informChild(){
    this.userAdded.next();
  }

}
