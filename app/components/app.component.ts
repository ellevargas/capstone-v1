import { Component } from 'angular2/core';
import { AdieListComponent } from './adie-list.component';
import { AdieService } from '../services/adie.service';

@Component({
	selector: 'my-app',
	template: `
	<h1>{{title}}</h1>
	<adie-list></adie-list>
	`,
	providers: [AdieService],
  directives: [AdieListComponent]
})

export class AppComponent {
	public title = "Capstone Practice App";
}
