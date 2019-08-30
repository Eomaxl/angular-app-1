import { Component, OnInit } from '@angular/core';
import { IUser } from './../../interfaces/iuser';
import { UserService } from './../../services/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users :IUser[]
  constructor(private userService: UserService) { }

  ngOnInit() {
   // this.users= this.userService.getUsers();
  //  this.userService.getUsersByRest().subscribe(
  //    user => this.users = users
  //  );
  this.userService.getUsersByRest().subscribe(users => this.users = users);
  }

    
  
}