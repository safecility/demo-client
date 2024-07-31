import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpInterceptor,
  HttpStatusCode, HttpErrorResponse
} from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { UserService } from "safecility-auth";
import { catchError } from "rxjs/operators";
import { MatSnackBar } from "@angular/material/snack-bar";
import { Router } from "@angular/router";

@Injectable()
export class AppInterceptor implements HttpInterceptor {

  constructor(
    private userService: UserService,
    private snackBar: MatSnackBar,
    private router: Router,
  ) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<any> {
    return next.handle(request)
      .pipe(
        catchError((error: HttpErrorResponse) => {
          let errorMsg = '';
          if (error.status === HttpStatusCode.Unauthorized) {
            this.router.navigate(['/login'], {queryParams: {error: "unauthorized"}});
          }
          console.log(errorMsg);
          return throwError(() => errorMsg);
        })
      )
  }

}
