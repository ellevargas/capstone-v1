import {bootstrap}    from 'angular2/platform/browser';
import {provide} from 'angular2/core';
import {HTTP_PROVIDERS, Http} from 'angular2/http';
import {AuthHttp, AuthConfig} from 'angular2-jwt';

import {ROUTER_PROVIDERS} from 'angular2/router';

// Add all operators to Observable
import 'rxjs/Rx';

import {AppComponent} from './components/app.component'

bootstrap(AppComponent, [
	ROUTER_PROVIDERS,
	HTTP_PROVIDERS,
  provide(AuthHttp, {
    useFactory: (http) => {
      return new AuthHttp(new AuthConfig(), http);
    },
    deps: [Http]
  }),
]);
