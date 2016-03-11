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
                LoginComponent.prototype.tokenSubscription = function () {
                    this.authHttp.tokenStream.subscribe(function (data) { return console.log(data); }, function (err) { return console.log(err); }, function () { return console.log('Complete'); });
                };
                LoginComponent.prototype.useJwtHelper = function () {
                    var token = localStorage.getItem('id_token');
                    console.log(this.jwtHelper.decodeToken(token), this.jwtHelper.getTokenExpirationDate(token), this.jwtHelper.isTokenExpired(token));
                };
                LoginComponent = __decorate([
                    core_1.Component({
                        selector: 'login',
                        template: "\n\t\t<button *ngIf=\"!loggedIn()\" (click)=\"login()\">Login</button>\n    <button *ngIf=\"loggedIn()\" (click)=\"logout()\">Logout</button>\n    <hr>\n    <button *ngIf=\"loggedIn()\" (click)=\"tokenSubscription()\">Show Token from Observable</button>\n    <button *ngIf=\"loggedIn()\" (click)=\"useJwtHelper()\">Use Jwt Helper</button>\n   ",
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb21wb25lbnRzL2xvZ2luLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQW9CQTtnQkFJRSx3QkFBbUIsSUFBVSxFQUFTLFFBQWtCLEVBQVUsWUFBMEI7b0JBQXpFLFNBQUksR0FBSixJQUFJLENBQU07b0JBQVMsYUFBUSxHQUFSLFFBQVEsQ0FBVTtvQkFBVSxpQkFBWSxHQUFaLFlBQVksQ0FBYztvQkFINUYsU0FBSSxHQUFHLElBQUksU0FBUyxDQUFDLGtDQUFrQyxFQUFFLHVCQUF1QixDQUFDLENBQUM7b0JBQ2xGLGNBQVMsR0FBYyxJQUFJLHdCQUFTLEVBQUUsQ0FBQztnQkFFeUQsQ0FBQztnQkFFakcsOEJBQUssR0FBTDtvQkFDRSxJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssRUFBRSxDQUFDO2dCQUM1QixDQUFDO2dCQUVELCtCQUFNLEdBQU47b0JBQ0UsSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLEVBQUUsQ0FBQztnQkFDN0IsQ0FBQztnQkFFRCxpQ0FBUSxHQUFSO29CQUNFLE1BQU0sQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsRUFBRSxDQUFDO2dCQUN0QyxDQUFDO2dCQUVELDBDQUFpQixHQUFqQjtvQkFDRSxJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQ2pDLFVBQUEsSUFBSSxJQUFJLE9BQUEsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBakIsQ0FBaUIsRUFDekIsVUFBQSxHQUFHLElBQUksT0FBQSxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxFQUFoQixDQUFnQixFQUN2QixjQUFNLE9BQUEsT0FBTyxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsRUFBdkIsQ0FBdUIsQ0FDOUIsQ0FBQztnQkFDSixDQUFDO2dCQUVELHFDQUFZLEdBQVo7b0JBQ0UsSUFBSSxLQUFLLEdBQUcsWUFBWSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQztvQkFFN0MsT0FBTyxDQUFDLEdBQUcsQ0FDVCxJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsRUFDakMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxzQkFBc0IsQ0FBQyxLQUFLLENBQUMsRUFDNUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLENBQ3JDLENBQUM7Z0JBQ0osQ0FBQztnQkE5Q0g7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDVCxRQUFRLEVBQUUsT0FBTzt3QkFDakIsUUFBUSxFQUFFLHlWQU1SO3dCQUNELFNBQVMsRUFBRSxDQUFFLDJCQUFZLENBQUU7cUJBQzdCLENBQUM7O2tDQUFBO2dCQXFDRixxQkFBQztZQUFELENBbkNBLEFBbUNDLElBQUE7WUFuQ0QsMkNBbUNDLENBQUEiLCJmaWxlIjoiYXBwL2NvbXBvbmVudHMvbG9naW4uY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuaW1wb3J0IHtBdXRoSHR0cCwgdG9rZW5Ob3RFeHBpcmVkLCBKd3RIZWxwZXJ9IGZyb20gJ2FuZ3VsYXIyLWp3dCc7XG5pbXBvcnQge0h0dHB9IGZyb20gJ2FuZ3VsYXIyL2h0dHAnO1xuXG5pbXBvcnQge0F1dGgwU2VydmljZX0gZnJvbSAnLi4vc2VydmljZXMvYXV0aC5zZXJ2aWNlJztcblxuZGVjbGFyZSB2YXIgQXV0aDBMb2NrO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdsb2dpbicsXG4gIHRlbXBsYXRlOiBgXG5cdFx0PGJ1dHRvbiAqbmdJZj1cIiFsb2dnZWRJbigpXCIgKGNsaWNrKT1cImxvZ2luKClcIj5Mb2dpbjwvYnV0dG9uPlxuICAgIDxidXR0b24gKm5nSWY9XCJsb2dnZWRJbigpXCIgKGNsaWNrKT1cImxvZ291dCgpXCI+TG9nb3V0PC9idXR0b24+XG4gICAgPGhyPlxuICAgIDxidXR0b24gKm5nSWY9XCJsb2dnZWRJbigpXCIgKGNsaWNrKT1cInRva2VuU3Vic2NyaXB0aW9uKClcIj5TaG93IFRva2VuIGZyb20gT2JzZXJ2YWJsZTwvYnV0dG9uPlxuICAgIDxidXR0b24gKm5nSWY9XCJsb2dnZWRJbigpXCIgKGNsaWNrKT1cInVzZUp3dEhlbHBlcigpXCI+VXNlIEp3dCBIZWxwZXI8L2J1dHRvbj5cbiAgIGAsXG4gICBwcm92aWRlcnM6IFsgQXV0aDBTZXJ2aWNlIF1cbn0pXG5cbmV4cG9ydCBjbGFzcyBMb2dpbkNvbXBvbmVudCB7XG4gIGxvY2sgPSBuZXcgQXV0aDBMb2NrKCdzclB5cFlaaDV0U1VnQzI3MHdEWDhqRml4TXVrdzVURicsICdhZGFjYXBzdG9uZS5hdXRoMC5jb20nKTtcbiAgand0SGVscGVyOiBKd3RIZWxwZXIgPSBuZXcgSnd0SGVscGVyKCk7XG5cbiAgY29uc3RydWN0b3IocHVibGljIGh0dHA6IEh0dHAsIHB1YmxpYyBhdXRoSHR0cDogQXV0aEh0dHAsIHByaXZhdGUgX2F1dGhTZXJ2aWNlOiBBdXRoMFNlcnZpY2UpIHsgfVxuXG4gIGxvZ2luKCkge1xuICAgIHRoaXMuX2F1dGhTZXJ2aWNlLmxvZ2luKCk7XG4gIH1cblxuICBsb2dvdXQoKSB7XG4gICAgdGhpcy5fYXV0aFNlcnZpY2UubG9nb3V0KCk7XG4gIH1cblxuICBsb2dnZWRJbigpIHtcbiAgICByZXR1cm4gdGhpcy5fYXV0aFNlcnZpY2UubG9nZ2VkSW4oKTtcbiAgfVxuXG4gIHRva2VuU3Vic2NyaXB0aW9uKCkge1xuICAgIHRoaXMuYXV0aEh0dHAudG9rZW5TdHJlYW0uc3Vic2NyaWJlKFxuICAgICAgZGF0YSA9PiBjb25zb2xlLmxvZyhkYXRhKSxcbiAgICAgIGVyciA9PiBjb25zb2xlLmxvZyhlcnIpLFxuICAgICAgKCkgPT4gY29uc29sZS5sb2coJ0NvbXBsZXRlJylcbiAgICApO1xuICB9XG5cbiAgdXNlSnd0SGVscGVyKCkge1xuICAgIHZhciB0b2tlbiA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdpZF90b2tlbicpO1xuXG4gICAgY29uc29sZS5sb2coXG4gICAgICB0aGlzLmp3dEhlbHBlci5kZWNvZGVUb2tlbih0b2tlbiksXG4gICAgICB0aGlzLmp3dEhlbHBlci5nZXRUb2tlbkV4cGlyYXRpb25EYXRlKHRva2VuKSxcbiAgICAgIHRoaXMuand0SGVscGVyLmlzVG9rZW5FeHBpcmVkKHRva2VuKVxuICAgICk7XG4gIH1cbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
