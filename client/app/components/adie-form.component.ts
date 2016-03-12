import { Component } from 'angular2/core';

// Project imports
import { Adie } from '../models/adie';

@Component({
	selector: 'adie-form',
	template: `
		<h3>Edit Your Profile</h3>
    <div *ngIf ="adie">
        <label>name: </label>
        <input [(ngModel)]="adie.name" placeholder="name"/>
    </div>
    <div class="error" *ngIf="errorMessage">{{errorMessage}}</div>
	`,
	inputs: ['adie'],
})

export class AdieFormComponent {
	adie: Adie;

	constructor() {}
}