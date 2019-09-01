import { Component, OnInit } from '@angular/core';
import {  FormGroup, FormArray, FormControl , Validator, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';

@Component({
  selector: 'app-new-user-reactive',
  templateUrl: './new-user-reactive.component.html',
  styleUrls: ['./new-user-reactive.component.css']
})
export class NewUserReactiveComponent implements OnInit {
  userForm: FormGroup

  

  constructor() { }

  ngOnInit() {
    this.userForm = new FormGroup({
      name: new FormControl('John Doe',[Validators.required,Validators.minLength(8),Validators.pattern('John Doe')]),
      username: new FormControl('johnDoe'),
      email: new FormControl('john@doe'),
      phone: new FormControl('1231233331'),
      website: new FormControl('website.com'),
      address: new FormGroup(
        {
            street: new FormControl('kaspate wasti'),
            city: new FormControl('pune'),
            suite: new FormControl('chowk'),
            zipcode: new FormControl('123123'),
            geo: new FormGroup({
                lat: new FormControl('12.1233'),
                lng: new FormControl('45.1231'),
            }), 
      }),
      company: new FormGroup({
           name: new FormControl('adssada'),
           bs: new FormControl('123dasd'),
           catchPhrase: new FormControl('zczxcad'),
      })
    })
  }

  onSubmit(){

  }
}