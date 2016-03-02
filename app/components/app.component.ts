import { Component } from 'angular2/core';
import { AdieListComponent } from './adie-list.component';
import { AdieService } from '../services/adie.service';
import { CompanyService } from '../services/company.service';
import { CompanyListComponent } from './company-list.component';

@Component({
	selector: 'my-app',
	template: `
	<h1>{{title}}</h1>
	<adie-list></adie-list>
	<company-list></company-list>
	`,
	providers: [AdieService, CompanyService],
  directives: [AdieListComponent, CompanyListComponent]
})

export class AppComponent {
	public title = "Capstone Practice App";
}
