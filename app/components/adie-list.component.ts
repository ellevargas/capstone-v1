import { Component, OnInit } from 'angular2/core';
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
  `,
  directives: [AdieDetailComponent]
})

export class AdieListComponent implements OnInit {
	public adies: Adie[];
	public selectedAdie: Adie;

	constructor(private adieService: AdieService) {
	}

	ngOnInit() {
		this.adieService.getAdies()
			.then(adies => this.adies = adies);
	}

	onSelect(adie: Adie) {
		this.selectedAdie = adie;
	}
}
