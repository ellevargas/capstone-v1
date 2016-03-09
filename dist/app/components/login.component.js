System.register(['angular2/core', 'angular2-jwt', 'angular2/http'], function(exports_1, context_1) {
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
    var core_1, angular2_jwt_1, http_1;
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
            }],
        execute: function() {
            LoginComponent = (function () {
                function LoginComponent(http, authHttp) {
                    this.http = http;
                    this.authHttp = authHttp;
                    this.lock = new Auth0Lock('srPypYZh5tSUgC270wDX8jFixMukw5TF', 'adacapstone.auth0.com');
                    this.jwtHelper = new angular2_jwt_1.JwtHelper();
                }
                LoginComponent.prototype.login = function () {
                    this.lock.show({
                        authParams: {
                            scope: 'openid nickname'
                        }
                    }, function (err, profile, id_token) {
                        if (err) {
                            throw new Error(err);
                        }
                        localStorage.setItem('profile', JSON.stringify(profile));
                        localStorage.setItem('id_token', id_token);
                    });
                };
                LoginComponent.prototype.logout = function () {
                    localStorage.removeItem('profile');
                    localStorage.removeItem('id_token');
                };
                LoginComponent.prototype.loggedIn = function () {
                    return angular2_jwt_1.tokenNotExpired();
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
                        template: "\n\t\t<button *ngIf=\"!loggedIn()\" (click)=\"login()\">Login</button>\n    <button *ngIf=\"loggedIn()\" (click)=\"logout()\">Logout</button>\n    <hr>\n    <button *ngIf=\"loggedIn()\" (click)=\"tokenSubscription()\">Show Token from Observable</button>\n    <button *ngIf=\"loggedIn()\" (click)=\"useJwtHelper()\">Use Jwt Helper</button>\n   "
                    }), 
                    __metadata('design:paramtypes', [http_1.Http, angular2_jwt_1.AuthHttp])
                ], LoginComponent);
                return LoginComponent;
            }());
            exports_1("LoginComponent", LoginComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb21wb25lbnRzL2xvZ2luLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQWlCQTtnQkFJRSx3QkFBbUIsSUFBVSxFQUFTLFFBQWtCO29CQUFyQyxTQUFJLEdBQUosSUFBSSxDQUFNO29CQUFTLGFBQVEsR0FBUixRQUFRLENBQVU7b0JBSHhELFNBQUksR0FBRyxJQUFJLFNBQVMsQ0FBQyxrQ0FBa0MsRUFBRSx1QkFBdUIsQ0FBQyxDQUFDO29CQUNsRixjQUFTLEdBQWMsSUFBSSx3QkFBUyxFQUFFLENBQUM7Z0JBRXFCLENBQUM7Z0JBRTdELDhCQUFLLEdBQUw7b0JBQ0UsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7d0JBQ2IsVUFBVSxFQUFFOzRCQUNWLEtBQUssRUFBRSxpQkFBaUI7eUJBQ3pCO3FCQUNGLEVBQ0MsVUFBQyxHQUFXLEVBQUUsT0FBZSxFQUFFLFFBQWdCO3dCQUU3QyxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDOzRCQUNSLE1BQU0sSUFBSSxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7d0JBQ3ZCLENBQUM7d0JBRUQsWUFBWSxDQUFDLE9BQU8sQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO3dCQUN6RCxZQUFZLENBQUMsT0FBTyxDQUFDLFVBQVUsRUFBRSxRQUFRLENBQUMsQ0FBQztvQkFFN0MsQ0FBQyxDQUFDLENBQUM7Z0JBQ1AsQ0FBQztnQkFFRCwrQkFBTSxHQUFOO29CQUNFLFlBQVksQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLENBQUM7b0JBQ25DLFlBQVksQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDLENBQUM7Z0JBQ3RDLENBQUM7Z0JBRUQsaUNBQVEsR0FBUjtvQkFDRSxNQUFNLENBQUMsOEJBQWUsRUFBRSxDQUFDO2dCQUMzQixDQUFDO2dCQUVELDBDQUFpQixHQUFqQjtvQkFDRSxJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQ2pDLFVBQUEsSUFBSSxJQUFJLE9BQUEsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBakIsQ0FBaUIsRUFDekIsVUFBQSxHQUFHLElBQUksT0FBQSxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxFQUFoQixDQUFnQixFQUN2QixjQUFNLE9BQUEsT0FBTyxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsRUFBdkIsQ0FBdUIsQ0FDOUIsQ0FBQztnQkFDSixDQUFDO2dCQUVELHFDQUFZLEdBQVo7b0JBQ0UsSUFBSSxLQUFLLEdBQUcsWUFBWSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQztvQkFFN0MsT0FBTyxDQUFDLEdBQUcsQ0FDVCxJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsRUFDakMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxzQkFBc0IsQ0FBQyxLQUFLLENBQUMsRUFDNUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLENBQ3JDLENBQUM7Z0JBQ0osQ0FBQztnQkE1REg7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDVCxRQUFRLEVBQUUsT0FBTzt3QkFDakIsUUFBUSxFQUFFLHlWQU1SO3FCQUNILENBQUM7O2tDQUFBO2dCQW9ERixxQkFBQztZQUFELENBbERBLEFBa0RDLElBQUE7WUFsREQsMkNBa0RDLENBQUEiLCJmaWxlIjoiYXBwL2NvbXBvbmVudHMvbG9naW4uY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuaW1wb3J0IHtBdXRoSHR0cCwgdG9rZW5Ob3RFeHBpcmVkLCBKd3RIZWxwZXJ9IGZyb20gJ2FuZ3VsYXIyLWp3dCc7XG5pbXBvcnQge0h0dHB9IGZyb20gJ2FuZ3VsYXIyL2h0dHAnO1xuXG5kZWNsYXJlIHZhciBBdXRoMExvY2s7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2xvZ2luJyxcbiAgdGVtcGxhdGU6IGBcblx0XHQ8YnV0dG9uICpuZ0lmPVwiIWxvZ2dlZEluKClcIiAoY2xpY2spPVwibG9naW4oKVwiPkxvZ2luPC9idXR0b24+XG4gICAgPGJ1dHRvbiAqbmdJZj1cImxvZ2dlZEluKClcIiAoY2xpY2spPVwibG9nb3V0KClcIj5Mb2dvdXQ8L2J1dHRvbj5cbiAgICA8aHI+XG4gICAgPGJ1dHRvbiAqbmdJZj1cImxvZ2dlZEluKClcIiAoY2xpY2spPVwidG9rZW5TdWJzY3JpcHRpb24oKVwiPlNob3cgVG9rZW4gZnJvbSBPYnNlcnZhYmxlPC9idXR0b24+XG4gICAgPGJ1dHRvbiAqbmdJZj1cImxvZ2dlZEluKClcIiAoY2xpY2spPVwidXNlSnd0SGVscGVyKClcIj5Vc2UgSnd0IEhlbHBlcjwvYnV0dG9uPlxuICAgYFxufSlcblxuZXhwb3J0IGNsYXNzIExvZ2luQ29tcG9uZW50IHtcbiAgbG9jayA9IG5ldyBBdXRoMExvY2soJ3NyUHlwWVpoNXRTVWdDMjcwd0RYOGpGaXhNdWt3NVRGJywgJ2FkYWNhcHN0b25lLmF1dGgwLmNvbScpO1xuICBqd3RIZWxwZXI6IEp3dEhlbHBlciA9IG5ldyBKd3RIZWxwZXIoKTtcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgaHR0cDogSHR0cCwgcHVibGljIGF1dGhIdHRwOiBBdXRoSHR0cCkgeyB9XG5cbiAgbG9naW4oKSB7XG4gICAgdGhpcy5sb2NrLnNob3coe1xuICAgICAgYXV0aFBhcmFtczoge1xuICAgICAgICBzY29wZTogJ29wZW5pZCBuaWNrbmFtZSdcbiAgICAgIH1cbiAgICB9LFxuICAgICAgKGVycjogc3RyaW5nLCBwcm9maWxlOiBzdHJpbmcsIGlkX3Rva2VuOiBzdHJpbmcpID0+IHtcblxuICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGVycik7XG4gICAgICAgIH1cblxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgncHJvZmlsZScsIEpTT04uc3RyaW5naWZ5KHByb2ZpbGUpKTtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2lkX3Rva2VuJywgaWRfdG9rZW4pO1xuXG4gICAgICB9KTtcbiAgfVxuXG4gIGxvZ291dCgpIHtcbiAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgncHJvZmlsZScpO1xuICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCdpZF90b2tlbicpO1xuICB9XG5cbiAgbG9nZ2VkSW4oKSB7XG4gICAgcmV0dXJuIHRva2VuTm90RXhwaXJlZCgpO1xuICB9XG5cbiAgdG9rZW5TdWJzY3JpcHRpb24oKSB7XG4gICAgdGhpcy5hdXRoSHR0cC50b2tlblN0cmVhbS5zdWJzY3JpYmUoXG4gICAgICBkYXRhID0+IGNvbnNvbGUubG9nKGRhdGEpLFxuICAgICAgZXJyID0+IGNvbnNvbGUubG9nKGVyciksXG4gICAgICAoKSA9PiBjb25zb2xlLmxvZygnQ29tcGxldGUnKVxuICAgICk7XG4gIH1cblxuICB1c2VKd3RIZWxwZXIoKSB7XG4gICAgdmFyIHRva2VuID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2lkX3Rva2VuJyk7XG5cbiAgICBjb25zb2xlLmxvZyhcbiAgICAgIHRoaXMuand0SGVscGVyLmRlY29kZVRva2VuKHRva2VuKSxcbiAgICAgIHRoaXMuand0SGVscGVyLmdldFRva2VuRXhwaXJhdGlvbkRhdGUodG9rZW4pLFxuICAgICAgdGhpcy5qd3RIZWxwZXIuaXNUb2tlbkV4cGlyZWQodG9rZW4pXG4gICAgKTtcbiAgfVxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
