import { Component, AfterViewInit } from 'angular2/core';

declare var jQuery: JQueryStatic;

@Component({
	selector: 'welcome',
	template: `
		<div>We are <span class="element"></span></div>
	`
})

export class WelcomeComponent implements AfterViewInit {

	constructor(){}

	ngAfterViewInit() {
		jQuery(".element").typed({
			strings: ["learners", "builders", "developers", "students", "women", "gender non-binary", "Adies."],
			typeSpeed: 0
		});
	}

}