import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})
export class NewUserComponent implements OnInit {
  communicationMode: string[];
  genders: string[];

  constructor() { 
    this.genders = ['Male','Female','Other'];
    this.communicationMode = ['Phone','Email'];
  }

  ngOnInit() {
  }

  submit(userForm){
    console.log("Form is submitted",userForm);
  }
}