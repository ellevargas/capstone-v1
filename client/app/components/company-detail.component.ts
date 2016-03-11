import { Component, OnInit } from 'angular2/core';
import { HTTP_PROVIDERS }    from 'angular2/http';
import { RouteParams } from 'angular2/router';

// Project imports
import { Company } from '../models/company';
import { CompanyService } from '../services/company.service';

@Component({
	selector: 'company-detail',
	template: `
		<div *ngIf="company">
			<h2>{{company.name}} details</h2>
	    <div><label>id: </label>{{company.id}}</div>
	  </div>
    <div class="error" *ngIf="errorMessage">{{errorMessage}}</div>
	`,
	inputs: ['company'],
  providers: [HTTP_PROVIDERS, CompanyService]
})

export class CompanyDetailComponent implements OnInit {
	company: Company;
	errorMessage: string;

	constructor(
		private _companyService: CompanyService,
		private _routeParams: RouteParams) { }

	ngOnInit() {
    let id = +this._routeParams.get('id');
    this._companyService.getCompany(id)
      .subscribe(
			company => {
				this.company = company;
			},
			error => this.errorMessage = <any>error);
  }
}