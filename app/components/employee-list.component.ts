// Angular imports
import { Component, OnInit } from 'angular2/core';
import { HTTP_PROVIDERS }    from 'angular2/http';
// Rxjs imports
import { Observable } from 'rxjs/Observable';
// Project imports
import { EmployeeService } from '../services/employee.service';
import { Employee } from '../models/employee';
// In-memory web api imports
import { provide } from 'angular2/core';
import { XHRBackend } from 'angular2/http';
import { InMemoryBackendService, SEED_DATA } from 'a2-in-memory-web-api/core';
import { EmployeeData } from '../mocks/employee-data';

@Component({
	selector: "employee-list",
	template: `
	<ul>
		<li *ngFor="#employee of employees">
			Name: {{ employee.name }} | Company id: {{ employee.company_id }}
		</li>
	</ul>
	<div class="error" *ngIf="errorMessage">{{errorMessage}}</div>
	`,
	providers: [
		HTTP_PROVIDERS, EmployeeService,
		// in-memory web api providers
		provide(XHRBackend, { useClass: InMemoryBackendService }), // in-mem server
		provide(SEED_DATA, { useClass: EmployeeData }) // in-mem server data
	]
})

export class EmployeeListComponent implements OnInit {
	errorMessage: string;
	public employees: Employee[];

	constructor(private _employeeService: EmployeeService) {}

	ngOnInit() {
		this.getEmployees();
	}

	getEmployees() {
		this._employeeService.getEmployees()
			.subscribe(
			employees => this.employees = employees,
			error => this.errorMessage = <any>error);
	}

}