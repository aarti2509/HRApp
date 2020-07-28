import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { CommonService } from '../common.service';
import {Router} from '@angular/router';
import { throwMatDialogContentAlreadyAttachedError } from '@angular/material';

@Component({
  selector: 'app-view-data',
  templateUrl: './view-data.component.html',
  styleUrls: ['./view-data.component.scss']
})
export class ViewDataComponent implements OnInit {
  AllStudent:any;
  msg:string;
  @Output() sendToParent = new EventEmitter();

  constructor(private commonService : CommonService,private router:Router) { }

  ngOnInit() {
    this.commonService.userAdded.subscribe(res =>{
      console.log('USer Added from Parent Component ');
      this.getUsers();
    });
    this.getUsers();
  }

  getUsers()
  {
     this.commonService.getUsers().subscribe(res =>{
    console.log(res);
    this.AllStudent = res;
    });
  }

  updateUser(student)
  {
   this.sendToParent.emit(student);
    console.log(student);
  }
  deleteUser(student)
  {
    this.commonService.deleteStudents(student).subscribe(
      res =>{
       
        this.msg="Record is delete successfully";
        alert(this.msg);
        this.getUsers();

      }
    );

  }

}
