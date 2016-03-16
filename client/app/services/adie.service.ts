// Angular imports
import { Injectable } from 'angular2/core';
import { Http, Response, Headers } from 'angular2/http';

// Rxjs imports
import { Observable } from 'rxjs/Observable';

// Project imports
import { Adie } from '../models/adie';
import { Auth0Service } from './auth.service';

@Injectable()

export class AdieService {
	constructor (private http: Http, private authService: Auth0Service) {}

	private _adiesUrl = 'https://ada-capstone-api.herokuapp.com/adies/';

	getAdies() {
		var header: Headers = new Headers();
		if (this.authService.loggedIn()) {
      var bearerString: string = "Bearer " + localStorage.getItem('id_token');
      header.append('Authorization', bearerString);
		}

		return this.http.get(this._adiesUrl, { headers: header })
			.map(res => <Adie[]> res.json().data)
			.do(data => console.log(data))
			.catch(this.handleError);
  }

  getAdie(id: number) {
		var header: Headers = new Headers();
		var adieUrl: string = `${this._adiesUrl}${id}`;
		if (this.authService.loggedIn()) {
      var bearerString: string = "Bearer " + localStorage.getItem('id_token');
      header.append('Authorization', bearerString);
		}
		return this.http.get(adieUrl, { headers: header })
			.map(res => <Adie>res.json().data)
			// .do(data => console.log(data))
			.catch(this.handleError);	
  }

  updateAdie(adie: Adie) {
		var header: Headers = new Headers();
		header.append('Content-Type', 'application/json');
		var adieUrl: string = `${this._adiesUrl}${adie.id}`;
		if (this.authService.loggedIn()) {
      var bearerString: string = "Bearer " + localStorage.getItem('id_token');
      header.append('Authorization', bearerString);
		}
		return this.http.patch(adieUrl, JSON.stringify(adie), { headers: header })
			.map(res => <Adie>res.json().data)
			// .do(data => console.log(data))
			.catch(this.handleError);	
  }



  private handleError(error: Response) {
    console.error(error);
    return Observable.throw(error.json().error || 'Server error');
  }
}