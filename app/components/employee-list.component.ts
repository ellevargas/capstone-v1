// Angular imports
import { Component, OnInit } from 'angular2/core';
import { HTTP_PROVIDERS }    from 'angular2/http';
// Rxjs imports
import { Observable } from 'rxjs/Observable';
// Project imports
import { EmployeeService } from '../services/employee.service';
import { Employee } from '../models/employee';

@Component({
	selector: "employee-list",
	template: `
	<ul>
		<li *ngFor="#employee of employees">
			Name: {{ employee.name }} | Company id: {{ employee.companyId }}
		</li>
	</ul>
	<div class="error" *ngIf="errorMessage">{{errorMessage}}</div>
	`,
	providers: [ HTTP_PROVIDERS, EmployeeService ]
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