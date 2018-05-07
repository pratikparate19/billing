import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { APIConstant } from './../Common/AppConstant';
import { User, UserRole } from './User';
@Injectable()
export class UserService {
    UserRoles: UserRole[] = new Array(0);
    UserID: string = "0";
    user: User = {};
    constructor(private http: HttpClient) {
    }
    GetUsers(): Observable<User[]> {
        return this.http.get<User[]>(APIConstant + "User");
    }
    GetUser(UserID: string): Observable<User> {
        return this.http.get<User>(APIConstant + "User/" + UserID);
    }
    CreateUser(user: User): Observable<boolean> {
        return this.http.post<boolean>(APIConstant + "User", user);
    }
    UpdateUser(user: User, UserID: string): Observable<boolean> {
        return this.http.put<boolean>(APIConstant + "User?id=" + UserID, user);
    }
    RemoveUser(UserID: string): Observable<boolean> {
        return this.http.delete<boolean>(APIConstant + "User?id=" + UserID);
    }
    GetRoles(): Observable<UserRole[]> {
        return this.http.get<UserRole[]>(APIConstant + "UserRole");
    }
}