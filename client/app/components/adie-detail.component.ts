import { Component, OnInit } from 'angular2/core';
import { HTTP_PROVIDERS }    from 'angular2/http';
import { RouteParams } from 'angular2/router';

// Project imports
import { Adie } from '../models/adie';
import { AdieService } from '../services/adie.service';
import { Auth0Service } from '../services/auth.service';
import { AdieFormComponent } from './adie-form.component';

@Component ({
	selector: 'adie-detail',
	templateUrl: 'app/components/templates/adie-detail.component.html',
  providers: [HTTP_PROVIDERS, AdieService],
  directives: [AdieFormComponent]
})

export class AdieDetailComponent implements OnInit {
	adie: Adie;
	errorMessage: string;
	currentUserId: number;
	loading: boolean = true;

	constructor(
		private _adieService: AdieService, 
		private _routeParams: RouteParams,
		private _authService: Auth0Service ){
	}

	ngOnInit() {
    let id = +this._routeParams.get('id');
    this.currentUserId = this._authService.getCurrentUserId();
    this._adieService.getAdie(id)
      .subscribe(
				adie => { 
					this.loading = false;
					this.adie = adie;
				},
				error => this.errorMessage = <any>error);
  }
}