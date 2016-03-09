/// <reference path="../libs/angular2/typings/browser.d.ts" />

import {bootstrap}    from 'angular2/platform/browser';
import {provide} from 'angular2/core';
import {AppComponent} from './components/app.component'
import {ROUTER_PROVIDERS} from 'angular2/router';
import {HTTP_PROVIDERS, Http} from 'angular2/http';
import {AuthHttp, AuthConfig, JwtHelper} from 'angular2-jwt';
import {Auth0Service} from "./services/auth.service";
// Add all operators to Observable
import 'rxjs/Rx';

bootstrap(AppComponent, [
	HTTP_PROVIDERS,
	ROUTER_PROVIDERS,
	provide(AuthHttp, {
		useFactory: (http) => {
			return new AuthHttp(new AuthConfig(), http);
		},
		deps: [Http]
	}),
	Auth0Service,
	JwtHelper
]);