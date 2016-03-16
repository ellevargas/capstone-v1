// Angular imports
import { Injectable } from 'angular2/core';
import { Http, Response, Headers } from 'angular2/http';
// Rxjs imports
import { Observable } from 'rxjs/Observable';
// Project imports
import { Company } from '../models/company';
import { Auth0Service } from './auth.service';

@Injectable()

export class CompanyService {
	constructor(
		private http: Http,
		private authService: Auth0Service) {}

	private _companiesUrl = 'https://ada-capstone-api.herokuapp.com/companies/';

	getCompanies() { 
		return this.http.get(this._companiesUrl)
			.map(res => <Company[]> res.json().data)
			// .do(data => console.log(data))
			.catch(err => this.handleError(err));
	}

	getCompany(id: number) {
		var header: Headers = new Headers();
		var companiesUrl: string = `https://ada-capstone-api.herokuapp.com/companies_complete/${id}`
		if (this.authService.loggedIn()) {
      var bearerString: string = "Bearer " + localStorage.getItem('id_token');
      header.append('Authorization', bearerString);
		}
		return this.http.get(companiesUrl, { headers: header })
			.map(res => res.json().data)
			.do(data => console.log(data))
			.catch(this.handleError);	
	}

	private handleError(error: Response) {
    // in a real world app, we may send the error to some remote logging infrastructure
    // instead of just logging it to the console
    console.error(error);
    return Observable.throw(error.json().error || 'Server error');
  }
}