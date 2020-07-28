import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss']
})
export class AlertComponent implements OnInit {
   msg:"Welcome to Crud Application ";
  constructor() { }

  ngOnInit() {
    
    alert("Welcome to Crud Application");
  }

}
