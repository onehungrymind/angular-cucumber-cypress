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
  title = 'EnterPortal';
  isLoggedIn$: Observable<boolean> = this.authService.isAuthenticated$;
  isLoggedIn;

  links = [
    { path: '/projects', icon: 'work', label: 'Projects' },
    { path: '/reports', icon: 'assessment', label: 'Reports' }
  ];

  constructor(
    private authService: AuthService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.isLoggedIn$
      .subscribe(loggedIn => this.isLoggedIn = loggedIn);
  }

  logout() {
    this.authService.logout();
  }

  isSidenaveOpen(component, authentication) {
    return component.opened && authentication;
  }
}
