import {Component} from 'angular2/core';
import {Adie} from '../models/adie';

@Component ({
	selector: 'adie-detail',
	template: `
		<h2>{{selectedAdie.name}} details</h2>
      <div><label>id: </label>{{selectedAdie.id}}</div>
      <div>
          <label>name: </label>
          <input [(ngModel)]="selectedAdie.name" placeholder="name"/>
      </div>
	`,
	inputs: ['selectedAdie']
})

export class AdieDetailComponent {
	selectedAdie: Adie;
}