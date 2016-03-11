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
                        template: "\n\t\t<button *ngIf=\"!loggedIn()\" (click)=\"login()\">Login</button>\n    <button *ngIf=\"loggedIn()\" (click)=\"logout()\">Logout</button>\n   ",
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb21wb25lbnRzL2xvZ2luLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQWlCQTtnQkFJRSx3QkFBbUIsSUFBVSxFQUFTLFFBQWtCLEVBQVUsWUFBMEI7b0JBQXpFLFNBQUksR0FBSixJQUFJLENBQU07b0JBQVMsYUFBUSxHQUFSLFFBQVEsQ0FBVTtvQkFBVSxpQkFBWSxHQUFaLFlBQVksQ0FBYztvQkFINUYsU0FBSSxHQUFHLElBQUksU0FBUyxDQUFDLGtDQUFrQyxFQUFFLHVCQUF1QixDQUFDLENBQUM7b0JBQ2xGLGNBQVMsR0FBYyxJQUFJLHdCQUFTLEVBQUUsQ0FBQztnQkFFeUQsQ0FBQztnQkFFakcsOEJBQUssR0FBTDtvQkFDRSxJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssRUFBRSxDQUFDO2dCQUM1QixDQUFDO2dCQUVELCtCQUFNLEdBQU47b0JBQ0UsSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLEVBQUUsQ0FBQztnQkFDN0IsQ0FBQztnQkFFRCxpQ0FBUSxHQUFSO29CQUNFLE1BQU0sQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsRUFBRSxDQUFDO2dCQUN0QyxDQUFDO2dCQXpCSDtvQkFBQyxnQkFBUyxDQUFDO3dCQUNULFFBQVEsRUFBRSxPQUFPO3dCQUNqQixRQUFRLEVBQUUsb0pBR1I7d0JBQ0QsU0FBUyxFQUFFLENBQUUsMkJBQVksQ0FBRTtxQkFDN0IsQ0FBQzs7a0NBQUE7Z0JBcUNGLHFCQUFDO1lBQUQsQ0FuQ0EsQUFtQ0MsSUFBQTtZQW5DRCwyQ0FtQ0MsQ0FBQSIsImZpbGUiOiJhcHAvY29tcG9uZW50cy9sb2dpbi5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5pbXBvcnQge0F1dGhIdHRwLCB0b2tlbk5vdEV4cGlyZWQsIEp3dEhlbHBlcn0gZnJvbSAnYW5ndWxhcjItand0JztcbmltcG9ydCB7SHR0cH0gZnJvbSAnYW5ndWxhcjIvaHR0cCc7XG5cbmltcG9ydCB7QXV0aDBTZXJ2aWNlfSBmcm9tICcuLi9zZXJ2aWNlcy9hdXRoLnNlcnZpY2UnO1xuXG5kZWNsYXJlIHZhciBBdXRoMExvY2s7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2xvZ2luJyxcbiAgdGVtcGxhdGU6IGBcblx0XHQ8YnV0dG9uICpuZ0lmPVwiIWxvZ2dlZEluKClcIiAoY2xpY2spPVwibG9naW4oKVwiPkxvZ2luPC9idXR0b24+XG4gICAgPGJ1dHRvbiAqbmdJZj1cImxvZ2dlZEluKClcIiAoY2xpY2spPVwibG9nb3V0KClcIj5Mb2dvdXQ8L2J1dHRvbj5cbiAgIGAsXG4gICBwcm92aWRlcnM6IFsgQXV0aDBTZXJ2aWNlIF1cbn0pXG5cbmV4cG9ydCBjbGFzcyBMb2dpbkNvbXBvbmVudCB7XG4gIGxvY2sgPSBuZXcgQXV0aDBMb2NrKCdzclB5cFlaaDV0U1VnQzI3MHdEWDhqRml4TXVrdzVURicsICdhZGFjYXBzdG9uZS5hdXRoMC5jb20nKTtcbiAgand0SGVscGVyOiBKd3RIZWxwZXIgPSBuZXcgSnd0SGVscGVyKCk7XG5cbiAgY29uc3RydWN0b3IocHVibGljIGh0dHA6IEh0dHAsIHB1YmxpYyBhdXRoSHR0cDogQXV0aEh0dHAsIHByaXZhdGUgX2F1dGhTZXJ2aWNlOiBBdXRoMFNlcnZpY2UpIHsgfVxuXG4gIGxvZ2luKCkge1xuICAgIHRoaXMuX2F1dGhTZXJ2aWNlLmxvZ2luKCk7XG4gIH1cblxuICBsb2dvdXQoKSB7XG4gICAgdGhpcy5fYXV0aFNlcnZpY2UubG9nb3V0KCk7XG4gIH1cblxuICBsb2dnZWRJbigpIHtcbiAgICByZXR1cm4gdGhpcy5fYXV0aFNlcnZpY2UubG9nZ2VkSW4oKTtcbiAgfVxuXG4gIC8vIHRva2VuU3Vic2NyaXB0aW9uKCkge1xuICAvLyAgIHRoaXMuYXV0aEh0dHAudG9rZW5TdHJlYW0uc3Vic2NyaWJlKFxuICAvLyAgICAgZGF0YSA9PiBjb25zb2xlLmxvZyhkYXRhKSxcbiAgLy8gICAgIGVyciA9PiBjb25zb2xlLmxvZyhlcnIpLFxuICAvLyAgICAgKCkgPT4gY29uc29sZS5sb2coJ0NvbXBsZXRlJylcbiAgLy8gICApO1xuICAvLyB9XG5cbiAgLy8gdXNlSnd0SGVscGVyKCkge1xuICAvLyAgIHZhciB0b2tlbiA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdpZF90b2tlbicpO1xuXG4gIC8vICAgY29uc29sZS5sb2coXG4gIC8vICAgICB0aGlzLmp3dEhlbHBlci5kZWNvZGVUb2tlbih0b2tlbiksXG4gIC8vICAgICB0aGlzLmp3dEhlbHBlci5nZXRUb2tlbkV4cGlyYXRpb25EYXRlKHRva2VuKSxcbiAgLy8gICAgIHRoaXMuand0SGVscGVyLmlzVG9rZW5FeHBpcmVkKHRva2VuKVxuICAvLyAgICk7XG4gIC8vIH1cbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
