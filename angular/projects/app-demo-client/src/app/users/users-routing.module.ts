import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MainUsersComponent} from "./components/main-users/main-users.component";

const routes: Routes = [
  { path: '', redirectTo: 'main', pathMatch: 'prefix' },
  { path: 'main', component: MainUsersComponent, pathMatch: 'prefix'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
