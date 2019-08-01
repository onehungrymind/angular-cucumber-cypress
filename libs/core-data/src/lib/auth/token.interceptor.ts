import { tap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { AuthService } from './auth.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptor implements HttpInterceptor {
  constructor(private auth: AuthService, private router: Router) { }

  checkAuthorization(event: HttpResponse<any>) {
    if (event.body.errors && event.body.errors[0].message.statusCode === 401) {
      this.auth.logout();
      this.router.navigate(['login']);
    }
  }

  // intercept request and add token
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    // modify request
    request = request.clone({
      setHeaders: {
        Authorization: `Bearer ${this.auth.getToken()}`
      }
    });

    console.log('---- request ----');
    console.log(request);
    console.log('--- end of request ---');

    return next.handle(request)
      .pipe(
        tap(event => {
          if (event instanceof HttpResponse) {
            this.checkAuthorization(event);
          }
        }, error => {
          // http response status code
          console.log('---- response ----');
          console.error('status code:');
          console.error(error.status);
          console.error(error.message);
          console.log('--- end of response ---');
        })
      )
  };

}
