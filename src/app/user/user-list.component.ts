import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { UserService } from './user.service';
import { User } from './User';
@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user.component.css']
})
export class UserListComponent {
  userList: User[];
  errMessage: string = "";
  showError: boolean = false;
  constructor(private userService: UserService, private router: Router) {
    this.loadUser();
  };
  loadUser() {
    this.userService.GetUsers().subscribe(res => {
      this.userList = res;
    }, err => {
      this.showError = err;
      this.errMessage = err.error.Message;
    });
  }
  CreateUser() {
    this.userService.user = {};
    this.userService.UserID = "-1";
    this.router.navigateByUrl("/layout/userlist/user");
  }
  UpdateUser(user: User) {
    this.userService.user = user;
    this.userService.UserID = user.EncUserID;
    this.router.navigateByUrl("/layout/userlist/user");
  }
  RemoveUser(UserID: string) {
    this.userService.RemoveUser(UserID).subscribe(res => {
      this.loadUser();
    }, error => {
      this.showError = true;
      this.errMessage = error.error.Message;
    })
  }
}
