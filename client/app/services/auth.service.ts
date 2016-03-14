import {Injectable} from "angular2/core";
import {HTTP_PROVIDERS, Http, Response, Headers} from 'angular2/http';
import {AuthHttp, tokenNotExpired, JwtHelper} from 'angular2-jwt';

declare var Auth0Lock;

@Injectable()
export class Auth0Service {
  lock = new Auth0Lock('srPypYZh5tSUgC270wDX8jFixMukw5TF', 'adacapstone.auth0.com');
  private _adiesUrl = 'https://ada-capstone-api.herokuapp.com/authenticate';  // URL to web api
  jwtHelper: JwtHelper = new JwtHelper();

  constructor(public http: Http) { }

  login() {
    // debugger;
    var self = this;
    this.lock.show(
      {
        authParams: {
          scope: 'openid nickname'
        }
      }, (err: string, profile: string, id_token: string) => {

      if (err) {
        throw new Error(err);
      }
      var header: Headers = new Headers();
      var bearerString: string = "Bearer " + id_token;
      header.append('Authorization', bearerString);
      self.http.post(this._adiesUrl, null, { headers: header })
        .subscribe(
          (res: Response) => {
            localStorage.setItem('profile', JSON.stringify(profile));
            localStorage.setItem('id_token', res.json().jwt);
          },
          (err) => console.error(err)
          );
    });
  }

  logout() {
    localStorage.removeItem('profile');
    localStorage.removeItem('id_token');
  }

  loggedIn() {
    return tokenNotExpired();
  }

  getCurrentUserId() {
    if (localStorage.getItem('id_token')) {
      var token = localStorage.getItem('id_token');
      return this.jwtHelper.decodeToken(token).user_id;  
    }
    return null;
  }

}