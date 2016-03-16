import {Component} from 'angular2/core';
import {AuthHttp, tokenNotExpired, JwtHelper} from 'angular2-jwt';
import {Http} from 'angular2/http';

import {Auth0Service} from '../services/auth.service';

declare var Auth0Lock;

@Component({
  selector: 'login',
  template: `
    <div class="ui item">
  		<button class="ui basic vertical animated button" tabindex="0" *ngIf="!loggedIn()" (click)="login()">
        <div class="hidden content">Adies only!</div>
        <div class="visible content"><i class="large github square icon"></i>Login</div>
      </button>
      <button class="ui basic button" *ngIf="loggedIn()" (click)="logout()"><i class="large github square icon"></i>Logout</button>
    </div>
   `,
   providers: [ Auth0Service ]
})

export class LoginComponent {
  lock = new Auth0Lock('srPypYZh5tSUgC270wDX8jFixMukw5TF', 'adacapstone.auth0.com');
  jwtHelper: JwtHelper = new JwtHelper();

  constructor(
    public http: Http, 
    public authHttp: AuthHttp, 
    private _authService: Auth0Service) { }

  login() {
    this._authService.login();
  }

  logout() {
    this._authService.logout();
  }

  loggedIn() {
    return this._authService.loggedIn();
  }

}