import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { UserService } from './user.service';
import { User, UserRole } from './User';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  UserRoles: UserRole[];
  UserID: string;
  showError: boolean = false;
  user: User;
  errMessage: string = "";
  constructor(private userService: UserService, private router: Router) {
    if (this.userService.UserID == "0" || this.userService.UserID == undefined) {
      this.router.navigateByUrl('/layout/userlist');
    }
    else {
      this.UserID = this.userService.UserID;
      this.user = this.userService.user;
      if (this.userService.UserRoles == undefined || this.userService.UserRoles.length == 0) {
        userService.GetRoles().subscribe(res => {
          this.userService.UserRoles = res;
          this.UserRoles = res;
        }, error => {
         
          this.userService.UserRoles = new Array(0);
        });
      }
      else {
        this.UserRoles = this.userService.UserRoles;
      }
    }
  }
  SaveUser() {
    this.userService.CreateUser(this.user).subscribe(res => {
      this.errMessage = "";
      this.showError = false;
      this.router.navigateByUrl('/layout/userlist');
    }, error => {
      this.errMessage = error.error.Message;
      this.showError = true;
    })
  }
  UpdateUser() {
    this.userService.UpdateUser(this.user, this.UserID).subscribe(res => {
      this.errMessage = "";
      this.showError = false;
      this.router.navigateByUrl('/layout/userlist');
    }, error => {
      this.errMessage = error.error.Message;
      this.showError = true;
    })
  }
}
