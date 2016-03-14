import { Component, OnInit } from 'angular2/core';
import { HTTP_PROVIDERS }    from 'angular2/http';
import { RouteParams } from 'angular2/router';

// Project imports
import { Company } from '../models/company';
import { Employee } from '../models/employee';
import { CompanyService } from '../services/company.service';
import { EmployeeDetailComponent } from './employee-detail.component';

@Component({
	selector: 'company-detail',
	template: `
		<div *ngIf="company">
			<h2>{{company.name}} details</h2>
	    <div><label>id: </label>{{company.id}}</div>
	  </div>
    <div class="error" *ngIf="errorMessage">{{errorMessage}}</div>
    <div *ngIf="employees">
    	<ul>
    		<li *ngFor="#employee of employees" >
					Name: {{employee.name}} | Position: {{employee.position}}
    		</li>
    	</ul>
    </div>
	`,
	inputs: ['company', 'employees'],
  providers: [HTTP_PROVIDERS, CompanyService],
	directives: [EmployeeDetailComponent]
})

export class CompanyDetailComponent implements OnInit {
	company: Company;
	employees: Employee[];
	errorMessage: string;

	constructor(
		private _companyService: CompanyService,
		private _routeParams: RouteParams) { }

	ngOnInit() {
    let id = +this._routeParams.get('id');
    this._companyService.getCompany(id)
      .subscribe(
			response => {
				this.company = response.company;
				this.employees = response.employees;
			},
			error => this.errorMessage = <any>error);
  }
}