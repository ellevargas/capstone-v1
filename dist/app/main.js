/// <reference path="../libs/angular2/typings/browser.d.ts" />
System.register(['angular2/platform/browser', 'angular2/core', './components/app.component', 'angular2/router', 'angular2/http', 'angular2-jwt', "./services/auth.service", 'rxjs/Rx'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var browser_1, core_1, app_component_1, router_1, http_1, angular2_jwt_1, auth_service_1;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (app_component_1_1) {
                app_component_1 = app_component_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (angular2_jwt_1_1) {
                angular2_jwt_1 = angular2_jwt_1_1;
            },
            function (auth_service_1_1) {
                auth_service_1 = auth_service_1_1;
            },
            function (_1) {}],
        execute: function() {
            browser_1.bootstrap(app_component_1.AppComponent, [
                http_1.HTTP_PROVIDERS,
                router_1.ROUTER_PROVIDERS,
                core_1.provide(angular2_jwt_1.AuthHttp, {
                    useFactory: function (http) {
                        return new angular2_jwt_1.AuthHttp(new angular2_jwt_1.AuthConfig(), http);
                    },
                    deps: [http_1.Http]
                }),
                auth_service_1.Auth0Service,
                angular2_jwt_1.JwtHelper
            ]);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9tYWluLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDhEQUE4RDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBWTlELG1CQUFTLENBQUMsNEJBQVksRUFBRTtnQkFDdkIscUJBQWM7Z0JBQ2QseUJBQWdCO2dCQUNoQixjQUFPLENBQUMsdUJBQVEsRUFBRTtvQkFDakIsVUFBVSxFQUFFLFVBQUMsSUFBSTt3QkFDaEIsTUFBTSxDQUFDLElBQUksdUJBQVEsQ0FBQyxJQUFJLHlCQUFVLEVBQUUsRUFBRSxJQUFJLENBQUMsQ0FBQztvQkFDN0MsQ0FBQztvQkFDRCxJQUFJLEVBQUUsQ0FBQyxXQUFJLENBQUM7aUJBQ1osQ0FBQztnQkFDRiwyQkFBWTtnQkFDWix3QkFBUzthQUNULENBQUMsQ0FBQyIsImZpbGUiOiJhcHAvbWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi9saWJzL2FuZ3VsYXIyL3R5cGluZ3MvYnJvd3Nlci5kLnRzXCIgLz5cblxuaW1wb3J0IHtib290c3RyYXB9ICAgIGZyb20gJ2FuZ3VsYXIyL3BsYXRmb3JtL2Jyb3dzZXInO1xuaW1wb3J0IHtwcm92aWRlfSBmcm9tICdhbmd1bGFyMi9jb3JlJztcbmltcG9ydCB7QXBwQ29tcG9uZW50fSBmcm9tICcuL2NvbXBvbmVudHMvYXBwLmNvbXBvbmVudCdcbmltcG9ydCB7Uk9VVEVSX1BST1ZJREVSU30gZnJvbSAnYW5ndWxhcjIvcm91dGVyJztcbmltcG9ydCB7SFRUUF9QUk9WSURFUlMsIEh0dHB9IGZyb20gJ2FuZ3VsYXIyL2h0dHAnO1xuaW1wb3J0IHtBdXRoSHR0cCwgQXV0aENvbmZpZywgSnd0SGVscGVyfSBmcm9tICdhbmd1bGFyMi1qd3QnO1xuaW1wb3J0IHtBdXRoMFNlcnZpY2V9IGZyb20gXCIuL3NlcnZpY2VzL2F1dGguc2VydmljZVwiO1xuLy8gQWRkIGFsbCBvcGVyYXRvcnMgdG8gT2JzZXJ2YWJsZVxuaW1wb3J0ICdyeGpzL1J4JztcblxuYm9vdHN0cmFwKEFwcENvbXBvbmVudCwgW1xuXHRIVFRQX1BST1ZJREVSUyxcblx0Uk9VVEVSX1BST1ZJREVSUyxcblx0cHJvdmlkZShBdXRoSHR0cCwge1xuXHRcdHVzZUZhY3Rvcnk6IChodHRwKSA9PiB7XG5cdFx0XHRyZXR1cm4gbmV3IEF1dGhIdHRwKG5ldyBBdXRoQ29uZmlnKCksIGh0dHApO1xuXHRcdH0sXG5cdFx0ZGVwczogW0h0dHBdXG5cdH0pLFxuXHRBdXRoMFNlcnZpY2UsXG5cdEp3dEhlbHBlclxuXSk7Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
