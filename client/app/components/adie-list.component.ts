// Angular imports
import { Component, OnInit } from 'angular2/core';
import { HTTP_PROVIDERS }    from 'angular2/http';
import { Router } from 'angular2/router';

// Rxjs imports
import { Observable } from 'rxjs/Observable';

// Project imports
import { Adie } from '../models/adie';
import { AdieService } from '../services/adie.service';

@Component({
	selector: "adie-list",
	templateUrl: 'app/components/templates/adie-list.component.html',
  providers: [HTTP_PROVIDERS, AdieService]	
})

export class AdieListComponent implements OnInit {
	errorMessage: string;	
	public adies: Adie[];

	constructor(private _adieService: AdieService, private _router: Router) {
	}

	ngOnInit() {
		this.getAdies();
	}

	getAdies() {
		this._adieService.getAdies()
			.subscribe(
			adies => { this.adies = adies; console.log(this.adies); },
		  error => this.errorMessage = <any>error);
	}

	gotoDetail(adie: Adie) {
		this._router.navigate(['AdieDetail', { id: adie.id }]);
	}
}
