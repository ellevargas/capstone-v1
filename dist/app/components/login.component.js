System.register(['angular2/core', 'angular2-jwt', 'angular2/http', '../services/auth.service'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, angular2_jwt_1, http_1, auth_service_1;
    var LoginComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (angular2_jwt_1_1) {
                angular2_jwt_1 = angular2_jwt_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (auth_service_1_1) {
                auth_service_1 = auth_service_1_1;
            }],
        execute: function() {
            LoginComponent = (function () {
                function LoginComponent(http, authHttp, _authService) {
                    this.http = http;
                    this.authHttp = authHttp;
                    this._authService = _authService;
                    this.lock = new Auth0Lock('srPypYZh5tSUgC270wDX8jFixMukw5TF', 'adacapstone.auth0.com');
                    this.jwtHelper = new angular2_jwt_1.JwtHelper();
                }
                LoginComponent.prototype.login = function () {
                    this._authService.login();
                };
                LoginComponent.prototype.logout = function () {
                    this._authService.logout();
                };
                LoginComponent.prototype.loggedIn = function () {
                    return this._authService.loggedIn();
                };
                LoginComponent = __decorate([
                    core_1.Component({
                        selector: 'login',
                        template: "\n    <div class=\"ui item\">\n  \t\t<button class=\"ui basic vertical animated button\" tabindex=\"0\" *ngIf=\"!loggedIn()\" (click)=\"login()\">\n        <div class=\"hidden content\">Adies only!</div>\n        <div class=\"visible content\"><i class=\"large github square icon\"></i>Login</div>\n      </button>\n      <button class=\"ui basic button\" *ngIf=\"loggedIn()\" (click)=\"logout()\"><i class=\"large github square icon\"></i>Logout</button>\n    </div>\n   ",
                        providers: [auth_service_1.Auth0Service]
                    }), 
                    __metadata('design:paramtypes', [http_1.Http, angular2_jwt_1.AuthHttp, auth_service_1.Auth0Service])
                ], LoginComponent);
                return LoginComponent;
            }());
            exports_1("LoginComponent", LoginComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb21wb25lbnRzL2xvZ2luLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQXNCQTtnQkFJRSx3QkFDUyxJQUFVLEVBQ1YsUUFBa0IsRUFDakIsWUFBMEI7b0JBRjNCLFNBQUksR0FBSixJQUFJLENBQU07b0JBQ1YsYUFBUSxHQUFSLFFBQVEsQ0FBVTtvQkFDakIsaUJBQVksR0FBWixZQUFZLENBQWM7b0JBTnBDLFNBQUksR0FBRyxJQUFJLFNBQVMsQ0FBQyxrQ0FBa0MsRUFBRSx1QkFBdUIsQ0FBQyxDQUFDO29CQUNsRixjQUFTLEdBQWMsSUFBSSx3QkFBUyxFQUFFLENBQUM7Z0JBS0MsQ0FBQztnQkFFekMsOEJBQUssR0FBTDtvQkFDRSxJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssRUFBRSxDQUFDO2dCQUM1QixDQUFDO2dCQUVELCtCQUFNLEdBQU47b0JBQ0UsSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLEVBQUUsQ0FBQztnQkFDN0IsQ0FBQztnQkFFRCxpQ0FBUSxHQUFSO29CQUNFLE1BQU0sQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsRUFBRSxDQUFDO2dCQUN0QyxDQUFDO2dCQWpDSDtvQkFBQyxnQkFBUyxDQUFDO3dCQUNULFFBQVEsRUFBRSxPQUFPO3dCQUNqQixRQUFRLEVBQUUsMGRBUVI7d0JBQ0QsU0FBUyxFQUFFLENBQUUsMkJBQVksQ0FBRTtxQkFDN0IsQ0FBQzs7a0NBQUE7Z0JBdUJGLHFCQUFDO1lBQUQsQ0FyQkEsQUFxQkMsSUFBQTtZQXJCRCwyQ0FxQkMsQ0FBQSIsImZpbGUiOiJhcHAvY29tcG9uZW50cy9sb2dpbi5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5pbXBvcnQge0F1dGhIdHRwLCB0b2tlbk5vdEV4cGlyZWQsIEp3dEhlbHBlcn0gZnJvbSAnYW5ndWxhcjItand0JztcbmltcG9ydCB7SHR0cH0gZnJvbSAnYW5ndWxhcjIvaHR0cCc7XG5cbmltcG9ydCB7QXV0aDBTZXJ2aWNlfSBmcm9tICcuLi9zZXJ2aWNlcy9hdXRoLnNlcnZpY2UnO1xuXG5kZWNsYXJlIHZhciBBdXRoMExvY2s7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2xvZ2luJyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8ZGl2IGNsYXNzPVwidWkgaXRlbVwiPlxuICBcdFx0PGJ1dHRvbiBjbGFzcz1cInVpIGJhc2ljIHZlcnRpY2FsIGFuaW1hdGVkIGJ1dHRvblwiIHRhYmluZGV4PVwiMFwiICpuZ0lmPVwiIWxvZ2dlZEluKClcIiAoY2xpY2spPVwibG9naW4oKVwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiaGlkZGVuIGNvbnRlbnRcIj5BZGllcyBvbmx5ITwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwidmlzaWJsZSBjb250ZW50XCI+PGkgY2xhc3M9XCJsYXJnZSBnaXRodWIgc3F1YXJlIGljb25cIj48L2k+TG9naW48L2Rpdj5cbiAgICAgIDwvYnV0dG9uPlxuICAgICAgPGJ1dHRvbiBjbGFzcz1cInVpIGJhc2ljIGJ1dHRvblwiICpuZ0lmPVwibG9nZ2VkSW4oKVwiIChjbGljayk9XCJsb2dvdXQoKVwiPjxpIGNsYXNzPVwibGFyZ2UgZ2l0aHViIHNxdWFyZSBpY29uXCI+PC9pPkxvZ291dDwvYnV0dG9uPlxuICAgIDwvZGl2PlxuICAgYCxcbiAgIHByb3ZpZGVyczogWyBBdXRoMFNlcnZpY2UgXVxufSlcblxuZXhwb3J0IGNsYXNzIExvZ2luQ29tcG9uZW50IHtcbiAgbG9jayA9IG5ldyBBdXRoMExvY2soJ3NyUHlwWVpoNXRTVWdDMjcwd0RYOGpGaXhNdWt3NVRGJywgJ2FkYWNhcHN0b25lLmF1dGgwLmNvbScpO1xuICBqd3RIZWxwZXI6IEp3dEhlbHBlciA9IG5ldyBKd3RIZWxwZXIoKTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgaHR0cDogSHR0cCwgXG4gICAgcHVibGljIGF1dGhIdHRwOiBBdXRoSHR0cCwgXG4gICAgcHJpdmF0ZSBfYXV0aFNlcnZpY2U6IEF1dGgwU2VydmljZSkgeyB9XG5cbiAgbG9naW4oKSB7XG4gICAgdGhpcy5fYXV0aFNlcnZpY2UubG9naW4oKTtcbiAgfVxuXG4gIGxvZ291dCgpIHtcbiAgICB0aGlzLl9hdXRoU2VydmljZS5sb2dvdXQoKTtcbiAgfVxuXG4gIGxvZ2dlZEluKCkge1xuICAgIHJldHVybiB0aGlzLl9hdXRoU2VydmljZS5sb2dnZWRJbigpO1xuICB9XG5cbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
