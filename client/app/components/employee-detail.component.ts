import { Component } from 'angular2/core';

// Project imports
import { Employee } from '../models/employee';

@Component({
	selector: 'employee-detail',
	template: `
			<h2>{{employee.name}}</h2>
	    <div>{{employee.position}}</div>
    <div class="error" *ngIf="errorMessage">{{errorMessage}}</div>
	`,
	inputs: ['employee'],
})

export class EmployeeDetailComponent {
	employee: Employee;
	errorMessage: string;

	constructor(){}

}