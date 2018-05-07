import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserListComponent } from './user-list.component';
import { UserComponent } from './user.component';

const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'layout' },
    {
        path: '', component: UserListComponent,
    },
    {
        path: 'user', component: UserComponent,
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class UserRoutingModule { }
