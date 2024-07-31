import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MainDashboardComponent} from "./components/main-dashboard/main-dashboard.component";

const routes: Routes = [
  { path: '', redirectTo: 'main', pathMatch: 'prefix' },
  { path: 'main', component: MainDashboardComponent, pathMatch: "prefix" },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
