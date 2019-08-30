import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})
export class NewUserComponent implements OnInit {
  communication: string[];
  gender: string[];

  constructor() { 
    this.gender = ['Male','Female','Other'];
    this.communication = []
  }

  ngOnInit() {
  }

  submit(userForm){
    console.log("Form is submitted",userForm);
  }
}