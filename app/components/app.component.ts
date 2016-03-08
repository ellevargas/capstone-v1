import { Component } from 'angular2/core';
import { RouteConfig, ROUTER_DIRECTIVES } from 'angular2/router';

// Import services
import { AdieService } from '../services/adie.service';
import { CompanyService } from '../services/company.service';
import { EmployeeService } from '../services/employee.service';

// Import components
import { AdieListComponent } from './adie-list.component';
// import { AdieDetailComponent } from './adie-detail.component';
import { CompanyListComponent } from './company-list.component';
import { EmployeeListComponent } from './employee-list.component';
import { LoginComponent } from './login.component';

@Component({
	selector: 'my-app',
	template: `
	<h1>{{title}}</h1>
	<login></login>
	<nav>
    <a [routerLink]="['Adies']">Adies</a>
    <a [routerLink]="['Companies']">Companies</a>
    <a [routerLink]="['Employees']">Employees</a>
  </nav>
	<router-outlet></router-outlet>
	`,
	providers: [AdieService, CompanyService, EmployeeService],
  directives: [ROUTER_DIRECTIVES, LoginComponent],
})

@RouteConfig([
	{ path: '/adies', name: 'Adies', component: AdieListComponent },
	{ path: '/companies', name: 'Companies', component: CompanyListComponent },
	{ path: '/employees', name: 'Employees', component: EmployeeListComponent }
	// { path: '/adie/:id', name: 'AdieDetail', component: AdieDetailComponent }
])

export class AppComponent {
	public title = "Capstone Practice App";
}
