import { Component } from '@angular/core';
import { UserService, View } from "safecility-auth";
import {JsonPipe, KeyValuePipe, NgForOf, NgIf} from "@angular/common";

@Component({
  selector: 'app-main-dashboard',
  standalone: true,
  imports: [
    NgIf,
    NgForOf,
    JsonPipe,
    KeyValuePipe
  ],
  templateUrl: './main-dashboard.component.html',
  styleUrl: './main-dashboard.component.scss'
})
export class MainDashboardComponent {

  appViews: Map<string, Array<View>> | undefined;

  constructor(private userService: UserService) {
    this.userService.user().subscribe(user => {
      if (!user)
        return;
      this.appViews = user.AuthViews?.reduce( (p, c) => {
        console.log("got view: ", c)
        let app = p.get(c.App);
        if (!app) {
          app = []
        }
        app.push(c);
        p.set(c.App, app);
        return p;
      }, new Map<string, Array<any>>())
    })
  }
}
