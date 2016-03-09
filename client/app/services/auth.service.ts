import {Injectable} from "angular2/core";
import {HTTP_PROVIDERS, Http} from 'angular2/http';
// import {AuthHttp, AuthConfig, tokenNotExpired, JwtHelper} from 'angular2-jwt';
import {tokenNotExpired, JwtHelper} from 'angular2-jwt';

declare var Auth0Lock;

@Injectable()
export class Auth0Service {
  lock = new Auth0Lock('srPypYZh5tSUgC270wDX8jFixMukw5TF', 'adacapstone.auth0.com');
  // jwtHelper: JwtHelper = new JwtHelper();

  // constructor(public http: Http, public authHttp: AuthHttp) { }

  login() {
    this.lock.show(
      {
        authParams: {
          scope: 'openid nickname'
        }
      }, (err: string, profile: string, id_token: string) => {

      if (err) {
        throw new Error(err);
      }
      localStorage.setItem('profile', JSON.stringify(profile));
      localStorage.setItem('id_token', id_token);
    });
  }

  logout() {
    localStorage.removeItem('profile');
    localStorage.removeItem('id_token');
  }

  loggedIn() {
    return tokenNotExpired();
  }
  // tokenSubscription() {
  //   this.authHttp.tokenStream.subscribe(
  //     data => console.log(data),
  //     err => console.log(err),
  //     () => console.log('Complete')
  //   );
  // }

  // useJwtHelper() {
  //   var token = localStorage.getItem('id_token');

  //   console.log(
  //     this.jwtHelper.decodeToken(token),
  //     this.jwtHelper.getTokenExpirationDate(token),
  //     this.jwtHelper.isTokenExpired(token)
  //   );
  // }
}