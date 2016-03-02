// Angular imports
import { Component, OnInit } from 'angular2/core';
import { HTTP_PROVIDERS }    from 'angular2/http';
// Rxjs imports
import { Observable } from 'rxjs/Observable';
// Project imports
import { Company } from '../models/company';
import { CompanyService } from '../services/company.service';
// In-memory web api imports
import { provide } from 'angular2/core';
import { XHRBackend } from 'angular2/http';
import { InMemoryBackendService, SEED_DATA } from 'a2-in-memory-web-api/core';
import { CompanyData } from '../mocks/company-data';

@Component({
	selector: "company-list",
	template: `
	<ul>
		<li *ngFor="#company of companies" (click)="onSelect(company)">
			Name: {{ company.name }} | Website: {{ company.website }}
		</li>
	</ul>
  `,
  providers: [HTTP_PROVIDERS, CompanyService,
		// in-memory web api providers
		provide(XHRBackend, { useClass: InMemoryBackendService }), // in-mem server
		provide(SEED_DATA, { useClass: CompanyData }) // in-mem server data
	]
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
