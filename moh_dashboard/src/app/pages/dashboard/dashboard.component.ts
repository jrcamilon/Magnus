import { Component } from '@angular/core';
import { AuthService } from '../../services/security/auth.service';

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class Dashboard {

  isAuthenticated: boolean;

  constructor(public auth: AuthService) {
    this.auth.isAuthenticated$.subscribe(isAuthenticated => {
      this.isAuthenticated = isAuthenticated;
    });
  }
}
