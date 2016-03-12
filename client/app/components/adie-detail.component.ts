import { Component, OnInit } from 'angular2/core';
import { HTTP_PROVIDERS }    from 'angular2/http';
import { RouteParams } from 'angular2/router';

// Project imports
import { Adie } from '../models/adie';
import { AdieService } from '../services/adie.service';
import { AdieFormComponent } from './adie-form.component';

@Component ({
	selector: 'adie-detail',
	template: `
		<div *ngIf="adie">
			<h2>{{adie.name}} details</h2>
			<p>{{ adie | json }}</p>
	    <div><label>id: </label>{{adie.id}}</div>
	    <adie-form [adie]="adie"></adie-form>
	  </div>
    <div class="error" *ngIf="errorMessage">{{errorMessage}}</div>
	`,
	// inputs: ['adie'],
  providers: [HTTP_PROVIDERS, AdieService],
  directives: [AdieFormComponent]
})

export class AdieDetailComponent implements OnInit {
	adie: Adie;
	errorMessage: string;

	constructor(
		private _adieService: AdieService, 
		private _routeParams: RouteParams ){}

	ngOnInit() {
    let id = +this._routeParams.get('id');
    this._adieService.getAdie(id)
      .subscribe(
				adie => { 
					this.adie = adie;
				},
				error => this.errorMessage = <any>error);
  }
}