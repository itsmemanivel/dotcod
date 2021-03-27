import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { LoginService } from './login.service';
@Injectable()
export class AuthGuardService implements CanActivate {
  constructor(public auth: LoginService, public router: Router) {}
  canActivate(): boolean {
    if (!this.auth.isAuthenticated()) {
      this.router.navigate(['']);
      console.log('auth');
      return false;
    }
    console.log(this.auth.isAuthenticated());
    return true;
  }
}