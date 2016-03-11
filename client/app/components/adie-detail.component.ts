import { Component, OnInit } from 'angular2/core';
import { HTTP_PROVIDERS }    from 'angular2/http';
import { RouteParams } from 'angular2/router';

// Project imports
import { Adie } from '../models/adie';
import { AdieService } from '../services/adie.service';

@Component ({
	selector: 'adie-detail',
	template: `
		<div *ngIf="adie">
			<h2>{{adie.name}} details</h2>
	    <div><label>id: </label>{{adie.id}}</div>
	    <div>
	        <label>name: </label>
	        <input [(ngModel)]="adie.name" placeholder="name"/>
	    </div>
	  </div>
    <div class="error" *ngIf="errorMessage">{{errorMessage}}</div>
	`,
	inputs: ['adie'],
  providers: [HTTP_PROVIDERS, AdieService]	
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