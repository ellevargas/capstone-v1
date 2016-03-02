// Angular imports
import { Injectable } from 'angular2/core';
import { Http, Response } from 'angular2/http';
// Rxjs imports
import { Observable } from 'rxjs/Observable';
// Project imports
import { Employee } from '../models/employee';

@Injectable()

export class EmployeeService {
	constructor(private http:Http){}

	private _employeesUrl = 'app/employees';

	private getEmployees() {
		return this.http.get(this._employeesUrl)
			.map(res => <Employee[]> res.json().data)
			.do(data => console.log(data))
			.catch(err => this.handleError(err));
	}

	private handleError(error: Response) {
    // in a real world app, we may send the error to some remote logging infrastructure
    // instead of just logging it to the console
    console.error(error);
    return Observable.throw(error.json().error || 'Server error');
  }
}