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

	constructor() {}

	// TODO: Remove this when we're done
  get diagnostic() { return JSON.stringify(this.adie); }
}