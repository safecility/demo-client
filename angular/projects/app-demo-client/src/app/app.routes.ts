import { Routes } from '@angular/router';
import { LoginComponent, UserService } from "safecility-auth";

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: '/dashboard/main', pathMatch: 'full' },
  {
    path: 'dashboard',
    canActivate: [UserService],
    loadChildren: () =>
      import('./dashboard/dashboard.module').then((mod) => mod.DashboardModule),
  },
  {
    path: 'users',
    canActivate: [UserService],
    loadChildren: () =>
      import('./users/users.module').then((mod) => mod.UsersModule),
  },
];
