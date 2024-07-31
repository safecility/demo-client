import { Component } from '@angular/core';
import {RouterLink, RouterOutlet} from '@angular/router';
import {MatCard, MatCardContent, MatCardHeader} from "@angular/material/card";
import {User, AccountBoxComponent} from "safecility-auth";
import {MatToolbar, MatToolbarRow} from "@angular/material/toolbar";
import {MatSidenavModule} from "@angular/material/sidenav";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet, RouterLink,
    AccountBoxComponent,
    MatCardHeader, MatCardContent, MatCard, MatToolbar, MatToolbarRow, MatSidenavModule, NgIf,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  title = 'app-demo-client';

  user: User | undefined;

  userChanged(user: any) {
    this.user = user;
  }

}
