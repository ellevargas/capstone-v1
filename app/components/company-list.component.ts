import { Component } from 'angular2/core';
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
  `,
})

export class CompanyListComponent {
	public companies: Company[];
	public selectedCompany: Company;

	constructor(companyService: CompanyService) {
		this.companies = companyService.getCompanies();
	}

	onSelect(company: Company) {
		this.selectedCompany = company;
	}
}
