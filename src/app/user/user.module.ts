import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { UserRoutingModule } from './user.routing';
import { UserListComponent } from './user-list.component';
import { UserComponent } from './user.component';
import { UserService } from './user.service';
@NgModule({
    declarations: [
        UserListComponent,
        UserComponent
    ],
    imports: [
        UserRoutingModule,
        CommonModule,
        FormsModule
    ],
    providers: [UserService]
})
export class UserModule { }
