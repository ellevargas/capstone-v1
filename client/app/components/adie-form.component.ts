import { Component } from 'angular2/core';
import { NgForm } from 'angular2/common';

// Project imports
import { Adie } from '../models/adie';

@Component({
	selector: 'adie-form',
	templateUrl: 'app/views/adie-form.component.html',
	inputs: ['adie'],
})

export class AdieFormComponent {
	adie: Adie;
	errorMessage: string;
	cohorts: number[] = [0,1,2,3,4];

	constructor() {}

	submitForm() {
		console.log('Form submitted!');
	}
}