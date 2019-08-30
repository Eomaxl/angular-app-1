import { Component, OnInit } from '@angular/core';
import {  ActivatedRoute} from '@angular/router';
import { IUser } from './../../interfaces/iuser';
import { UserService }from './../../services/user.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css'],
  providers: [ UserService ]
})
export class UserDetailsComponent implements OnInit {
  user:IUser;
    
  constructor( private activatedRoute: ActivatedRoute,
  private _userService: UserService) { 
  }

  ngOnInit() {
    

    
    this.activatedRoute.params.subscribe((params)=>{
     this.user=  this._userService.getUserById(+params['id']);
     //this._userService.getUserViaRest(+params['id']).subscribe(user => this.user = user)
     console.log("User details >>>>>> "+this.user.name);
    })
  }

  createUser(){

  }

  updateUser() {

  }

  deleteUser(){

  }

  getPost(){

  }

}