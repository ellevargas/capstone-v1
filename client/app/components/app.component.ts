import { Component } from 'angular2/core';
import { RouteConfig, ROUTER_DIRECTIVES } from 'angular2/router';

// Import components
import { AdieListComponent } from './adie-list.component';
import { AdieDetailComponent } from './adie-detail.component';
import { CompanyListComponent } from './company-list.component';
import { CompanyDetailComponent } from './company-detail.component';
import { MenuBarComponent } from './menu.component';
import { WelcomeComponent } from './welcome.component'

@Component({
	selector: 'my-app',
	template: `
	<menu-bar></menu-bar>
	<div class="ui main text container">

		<router-outlet></router-outlet>
	</div>
	`,
  directives: [ROUTER_DIRECTIVES, MenuBarComponent],
})

@RouteConfig([
	{ path: '/', name: 'Home', component: WelcomeComponent },
	{ path: '/adies', name: 'Adies', component: AdieListComponent },
	{ path: '/companies', name: 'Companies', component: CompanyListComponent },
	{ path: '/adie/:id', name: 'AdieDetail', component: AdieDetailComponent },
	{ path: '/company/:id', name: 'CompanyDetail', component: CompanyDetailComponent }
])

export class AppComponent {
}
