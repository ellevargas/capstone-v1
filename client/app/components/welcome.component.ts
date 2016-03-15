import { Component, AfterViewInit } from 'angular2/core';

declare var jQuery: JQueryStatic;

@Component({
	selector: 'welcome',
	template: `
	<div class="row">
		<div class="text-editor-wrap">
			<div class="title-bar">
				<span class="title">bash</span>	
			</div>
			<div class="text-body">
				$ We are <span class="element"></span>
			</div>
		</div>
	</div>	
	`,
	styleUrls: ['app/assets/stylesheets/welcome.component.css']
})

export class WelcomeComponent implements AfterViewInit {

	constructor(){}

	ngAfterViewInit() {
		jQuery(".element").typed({
			strings: ["learners", "builders", "developers", "students", "women", "gender non-binary", "Adies."],
			typeSpeed: 30
		});
	}

}