import { Component } from 'angular2/core';
import { LoginComponent } from './login.component';

@Component({
	selector: 'menu-bar',
	template: `
		<div class="ui menu">
      <div class="ui container">
        <a href="http://adadevelopersacademy.org/" class="header item">
          <img class="logo" src="app/assets/images/logos/ada_large.png" alt="Logo for Ada Developers Academy">
        </a>
        <div class="header item borderless">
          <h1 class="ui header">
            We Are Adies
          </h1>
          <login></login>
        </div>
      </div>
    </div>
	`,
	directives: [ LoginComponent ]
})

export class MenuBarComponent {

}