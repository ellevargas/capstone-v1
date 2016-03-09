// Angular imports
import { Component, OnInit } from 'angular2/core';
import { HTTP_PROVIDERS }    from 'angular2/http';

// Rxjs imports
import { Observable } from 'rxjs/Observable';

// Project imports
import { AdieDetailComponent } from './adie-detail.component';
import { Adie } from '../models/adie';
import { AdieService } from '../services/adie.service';

@Component({
	selector: "adie-list",
	template: `
	<ul>
		<li *ngFor="#adie of adies" (click)="onSelect(adie)">
			Name: {{ adie.name }} | Cohort: {{ adie.cohort }}
		</li>
	</ul>
  <div *ngIf="selectedAdie">
      <adie-detail [selectedAdie]="selectedAdie"></adie-detail>
  </div>
  <div class="error" *ngIf="errorMessage">{{errorMessage}}</div>
  `,
  directives: [AdieDetailComponent],
  providers: [HTTP_PROVIDERS, AdieService]	
})

export class AdieListComponent implements OnInit {
	errorMessage: string;	
	public adies: Adie[];
	public selectedAdie: Adie;

	constructor(private _adieService: AdieService) {
	}

	ngOnInit() {
		this.getAdies();
	}

	getAdies() {
		this._adieService.getAdies()
			.subscribe(
			adies => this.adies = adies,
		  error => this.errorMessage = <any>error);
	}

	onSelect(adie: Adie) {
		this.selectedAdie = adie;
	}
}
