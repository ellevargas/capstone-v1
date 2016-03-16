import { Component } from 'angular2/core';
import { ROUTER_DIRECTIVES } from 'angular2/router';

import { LoginComponent } from './login.component';

@Component({
	selector: 'menu-bar',
	template: `
		<div class="ui stackable menu fixed top sticky">
      <a href="http://adadevelopersacademy.org/" class="header item">
        <img class="logo" src="app/assets/images/logos/ada_large.png" alt="Logo for Ada Developers Academy">
      </a>
        <a class="item" [routerLink]="['Home']">Home</a>
        <a class="item" [routerLink]="['Adies']">Adies</a>
        <a class="item" [routerLink]="['Companies']">Companies</a>
      <div class="right menu">
        <login></login>
      </div>
        
    </div>
	`,
	directives: [ LoginComponent, ROUTER_DIRECTIVES ]
})

export class MenuBarComponent {

}