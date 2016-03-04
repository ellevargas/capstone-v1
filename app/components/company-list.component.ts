// Angular imports
import { Component, OnInit } from 'angular2/core';
import { HTTP_PROVIDERS }    from 'angular2/http';
// Rxjs imports
import { Observable } from 'rxjs/Observable';
// Project imports
import { Company } from '../models/company';
import { CompanyService } from '../services/company.service';

@Component({
	selector: "company-list",
	template: `
	<ul>
		<li *ngFor="#company of companies" (click)="onSelect(company)">
			Name: {{ company.name }} | Website: {{ company.website }}
		</li>
	</ul>
	<div class="error" *ngIf="errorMessage">{{errorMessage}}</div>
  `,
  providers: [ HTTP_PROVIDERS, CompanyService ]
})

export class CompanyListComponent implements OnInit {
	errorMessage: string;
	public companies: Company[];
	public selectedCompany: Company;

	constructor(private _companyService: CompanyService) {}

	ngOnInit() {
		this.getCompanies();
	}

	getCompanies() {
		this._companyService.getCompanies()
			.subscribe(
				companies => this.companies = companies,
				error => this.errorMessage = <any>error)
	}

	onSelect(company: Company) {
		this.selectedCompany = company;
	}
}
