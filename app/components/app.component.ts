import {Component} from 'angular2/core';

import {AdieListComponent} from './adie-list.component';

@Component({
	selector: 'my-app',
	template: `
	<h1>{{title}}</h1>
	<adie-list></adie-list>
	`,
  directives: [AdieListComponent]
})

export class AppComponent {
	public title = "Capstone Practice App";
}
