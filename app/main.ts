import {bootstrap}    from 'angular2/platform/browser'
import {ROUTER_PROVIDERS} from 'angular2/router';

// Add all operators to Observable
import 'rxjs/Rx';

import {AppComponent} from './components/app.component'

bootstrap(AppComponent, [ROUTER_PROVIDERS]);
