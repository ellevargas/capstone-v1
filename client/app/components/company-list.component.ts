// Angular imports
import { Component, OnInit } from 'angular2/core';
import { HTTP_PROVIDERS }    from 'angular2/http';
import { Router } from 'angular2/router';
// Rxjs imports
import { Observable } from 'rxjs/Observable';
// Project imports
import { Company } from '../models/company';
import { CompanyService } from '../services/company.service';

@Component({
	selector: "company-list",
	templateUrl: 'app/components/templates/company-list.component.html',
  providers: [ HTTP_PROVIDERS, CompanyService ],
})

export class CompanyListComponent implements OnInit {
	errorMessage: string;
	public companies: Company[];
	public selectedCompany: Company;

	constructor(private _companyService: CompanyService, private _router: Router) {}

	ngOnInit() {
		this.getCompanies();
	}

	getCompanies() {
		this._companyService.getCompanies()
			.subscribe(
				companies => this.companies = companies,
				error => this.errorMessage = <any>error)
	}

	gotoDetail(company: Company) {
		this._router.navigate(['CompanyDetail', { id: company.id }]);
	}
}
