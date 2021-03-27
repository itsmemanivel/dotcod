import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
// import { AuthenticationService } from '@app/_services';
import { User } from '../components/user.interface';


@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private currentUserSubject: BehaviorSubject<any>;
  public currentUser: Observable<User>;

  constructor(
        private router: Router,
        private http: HttpClient,
    
        // private authenticationService: AuthenticationService
 ) { 
    this.currentUserSubject = new BehaviorSubject(JSON.parse(localStorage.getItem('currentUser') || '{}'));
    this.currentUser = this.currentUserSubject.asObservable();
  }


  login(Contact_Email: string, password: string) {
    return this.http.post(`https://verify.flexm.com/api/token/authenticate`, { Contact_Email, password })
        .pipe(map(user => {
            // store user details and basic auth credentials in local storage to keep user logged in between page refreshes
            // user.authdata = window.btoa(username + ':' + password);
            localStorage.setItem('currentUser', JSON.stringify(user));
            this.currentUserSubject.next(user);
            return user;
        }));
}

logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
    this.router.navigate(['/'], );
    window.location.reload();
}

public isAuthenticated(): boolean {
  const token:any = localStorage.getItem('currentUser');
  if(token !=null){
    // console.log(token);
     return true;
  }

  // console.log(token);
  return false;
}




}
