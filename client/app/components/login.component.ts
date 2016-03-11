import {Component} from 'angular2/core';
import {AuthHttp, tokenNotExpired, JwtHelper} from 'angular2-jwt';
import {Http} from 'angular2/http';

import {Auth0Service} from '../services/auth.service';

declare var Auth0Lock;

@Component({
  selector: 'login',
  template: `
		<button *ngIf="!loggedIn()" (click)="login()">Login</button>
    <button *ngIf="loggedIn()" (click)="logout()">Logout</button>
    <hr>
    <button *ngIf="loggedIn()" (click)="tokenSubscription()">Show Token from Observable</button>
    <button *ngIf="loggedIn()" (click)="useJwtHelper()">Use Jwt Helper</button>
   `,
   providers: [ Auth0Service ]
})

export class LoginComponent {
  lock = new Auth0Lock('srPypYZh5tSUgC270wDX8jFixMukw5TF', 'adacapstone.auth0.com');
  jwtHelper: JwtHelper = new JwtHelper();

  constructor(public http: Http, public authHttp: AuthHttp, private _authService: Auth0Service) { }

  login() {
    this._authService.login();
  }

  logout() {
    this._authService.logout();
  }

  loggedIn() {
    return this._authService.loggedIn();
  }

  tokenSubscription() {
    this.authHttp.tokenStream.subscribe(
      data => console.log(data),
      err => console.log(err),
      () => console.log('Complete')
    );
  }

  useJwtHelper() {
    var token = localStorage.getItem('id_token');

    console.log(
      this.jwtHelper.decodeToken(token),
      this.jwtHelper.getTokenExpirationDate(token),
      this.jwtHelper.isTokenExpired(token)
    );
  }
}