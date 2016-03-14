import { Component } from 'angular2/core';
import { NgForm } from 'angular2/common';
import { HTTP_PROVIDERS }    from 'angular2/http';
import { AdieService } from '../services/adie.service';
import { Auth0Service } from '../services/auth.service';


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

	constructor(
		private _adieService: AdieService, 
		private _authService: Auth0Service) { }

	submitForm() {
		this._adieService.updateAdie(this.adie)
			.subscribe(
				adie => {
					this.adie = adie;
				},
				error => this.errorMessage = <any>error); 
	}
}