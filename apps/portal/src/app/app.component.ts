import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@demo/core-data';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Cucumber with Angular and Cypress';
  isLoggedIn$: Observable<boolean> = this.authService.isAuthenticated$;
  isLoggedIn;

  links = [
    { path: '/projects', icon: 'work', label: 'Projects' }
  ];

  constructor(
    private authService: AuthService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.isLoggedIn$
      .subscribe(loggedIn => {
        const path = (loggedIn) ? '' : 'login';
        this.isLoggedIn = loggedIn;
        this.router.navigate([path]);
      })
  }

  logout() {
    this.authService.logout();
  }

  isSidenaveOpen(component, authentication) {
    return component.opened && authentication;
  }
}
