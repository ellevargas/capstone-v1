import { Component } from 'angular2/core';
import { EmployeeService } from '../services/employee.service';
import { Employee } from '../models/employee';

@Component({
	selector: "employee-list",
	template: `
	<ul>
		<li *ngFor="#employee of employees" (click)="onSelect(employee)">
			Name: {{ employee.name }} | Company id: {{ employee.company_id }}
		</li>
	</ul>
	`
})

export class EmployeeListComponent {
	public employees: Employee[];

	constructor(employeeService: EmployeeService) {
		this.employees = employeeService.getEmployees();
	}
}