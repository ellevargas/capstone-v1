import { Component } from 'angular2/core';

// Import services
import { AdieService } from '../services/adie.service';
import { CompanyService } from '../services/company.service';
import { EmployeeService } from '../services/employee.service';

// Import components
import { AdieListComponent } from './adie-list.component';
import { CompanyListComponent } from './company-list.component';
import { EmployeeListComponent } from './employee-list.component';

@Component({
	selector: 'my-app',
	template: `
	<h1>{{title}}</h1>
	<adie-list></adie-list>
	<company-list></company-list>
	<employee-list></employee-list>
	`,
	providers: [AdieService, CompanyService, EmployeeService],
  directives: [AdieListComponent, CompanyListComponent, EmployeeListComponent]
})

export class AppComponent {
	public title = "Capstone Practice App";
}
