import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Document } from '../components/document.interface';
import { LoginService } from '../service/login.service';
import { User } from '../components/user.interface';

@Injectable({
  providedIn: 'root'
})
export class DocumentService {
  // private currentUserSubject: BehaviorSubject<any>;
  // public currentUser: Observable<any>;

  document= Document;
  constructor(
    private router: Router,
    private http: HttpClient,
    private auth : LoginService
  ) { }

  


  getDocuList() {
    let user:User = JSON.parse(localStorage.getItem('currentUser')|| '{}');
    let headers = new HttpHeaders({
      'access-token':  user.data });
    let options = { headers: headers };
    return this.http.post(` https://verify.flexm.com/api/scans/scanDocByTenent`,  this.document, options )
        .pipe(map(document => {
            // store user details and basic auth credentials in local storage to keep user logged in between page refreshes
            // user.authdata = window.btoa(username + ':' + password);
            // localStorage.setItem('currentUser', JSON.stringify(user));
            return document;
        }));
}

getDocuDetails(id:string) {
  let user:User = JSON.parse(localStorage.getItem('currentUser')|| '{}');
    let headers = new HttpHeaders({
      'access-token':  user.data });
    let options = { headers: headers };
  return this.http.get(`https://verify.flexm.com/api/scans/allScanByDocumentId/${id}`, options)
  .pipe(map(document =>{
    return document;
  }))
}
}
