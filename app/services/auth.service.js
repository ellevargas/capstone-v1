System.register(["angular2/core", 'angular2-jwt'], function(exports_1, context_1) {
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
    var core_1, angular2_jwt_1;
    var Auth0Service;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (angular2_jwt_1_1) {
                angular2_jwt_1 = angular2_jwt_1_1;
            }],
        execute: function() {
            Auth0Service = (function () {
                function Auth0Service() {
                    this.lock = new Auth0Lock('srPypYZh5tSUgC270wDX8jFixMukw5TF', 'adacapstone.auth0.com');
                }
                // jwtHelper: JwtHelper = new JwtHelper();
                // constructor(public http: Http, public authHttp: AuthHttp) { }
                Auth0Service.prototype.login = function () {
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
                Auth0Service.prototype.logout = function () {
                    localStorage.removeItem('profile');
                    localStorage.removeItem('id_token');
                };
                Auth0Service.prototype.loggedIn = function () {
                    return angular2_jwt_1.tokenNotExpired();
                };
                Auth0Service = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], Auth0Service);
                return Auth0Service;
            }());
            exports_1("Auth0Service", Auth0Service);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zZXJ2aWNlcy9hdXRoLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFRQTtnQkFBQTtvQkFDRSxTQUFJLEdBQUcsSUFBSSxTQUFTLENBQUMsa0NBQWtDLEVBQUUsdUJBQXVCLENBQUMsQ0FBQztnQkE4Q3BGLENBQUM7Z0JBN0NDLDBDQUEwQztnQkFFMUMsZ0VBQWdFO2dCQUVoRSw0QkFBSyxHQUFMO29CQUNFLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUNaO3dCQUNFLFVBQVUsRUFBRTs0QkFDVixLQUFLLEVBQUUsaUJBQWlCO3lCQUN6QjtxQkFDRixFQUFFLFVBQUMsR0FBVyxFQUFFLE9BQWUsRUFBRSxRQUFnQjt3QkFFbEQsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQzs0QkFDUixNQUFNLElBQUksS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO3dCQUN2QixDQUFDO3dCQUNELFlBQVksQ0FBQyxPQUFPLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQzt3QkFDekQsWUFBWSxDQUFDLE9BQU8sQ0FBQyxVQUFVLEVBQUUsUUFBUSxDQUFDLENBQUM7b0JBQzdDLENBQUMsQ0FBQyxDQUFDO2dCQUNMLENBQUM7Z0JBRUQsNkJBQU0sR0FBTjtvQkFDRSxZQUFZLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxDQUFDO29CQUNuQyxZQUFZLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxDQUFDO2dCQUN0QyxDQUFDO2dCQUVELCtCQUFRLEdBQVI7b0JBQ0UsTUFBTSxDQUFDLDhCQUFlLEVBQUUsQ0FBQztnQkFDM0IsQ0FBQztnQkE5Qkg7b0JBQUMsaUJBQVUsRUFBRTs7Z0NBQUE7Z0JBZ0RiLG1CQUFDO1lBQUQsQ0EvQ0EsQUErQ0MsSUFBQTtZQS9DRCx1Q0ErQ0MsQ0FBQSIsImZpbGUiOiJhcHAvc2VydmljZXMvYXV0aC5zZXJ2aWNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tIFwiYW5ndWxhcjIvY29yZVwiO1xuaW1wb3J0IHtIVFRQX1BST1ZJREVSUywgSHR0cH0gZnJvbSAnYW5ndWxhcjIvaHR0cCc7XG4vLyBpbXBvcnQge0F1dGhIdHRwLCBBdXRoQ29uZmlnLCB0b2tlbk5vdEV4cGlyZWQsIEp3dEhlbHBlcn0gZnJvbSAnYW5ndWxhcjItand0JztcbmltcG9ydCB7dG9rZW5Ob3RFeHBpcmVkLCBKd3RIZWxwZXJ9IGZyb20gJ2FuZ3VsYXIyLWp3dCc7XG5cbmRlY2xhcmUgdmFyIEF1dGgwTG9jaztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEF1dGgwU2VydmljZSB7XG4gIGxvY2sgPSBuZXcgQXV0aDBMb2NrKCdzclB5cFlaaDV0U1VnQzI3MHdEWDhqRml4TXVrdzVURicsICdhZGFjYXBzdG9uZS5hdXRoMC5jb20nKTtcbiAgLy8gand0SGVscGVyOiBKd3RIZWxwZXIgPSBuZXcgSnd0SGVscGVyKCk7XG5cbiAgLy8gY29uc3RydWN0b3IocHVibGljIGh0dHA6IEh0dHAsIHB1YmxpYyBhdXRoSHR0cDogQXV0aEh0dHApIHsgfVxuXG4gIGxvZ2luKCkge1xuICAgIHRoaXMubG9jay5zaG93KFxuICAgICAge1xuICAgICAgICBhdXRoUGFyYW1zOiB7XG4gICAgICAgICAgc2NvcGU6ICdvcGVuaWQgbmlja25hbWUnXG4gICAgICAgIH1cbiAgICAgIH0sIChlcnI6IHN0cmluZywgcHJvZmlsZTogc3RyaW5nLCBpZF90b2tlbjogc3RyaW5nKSA9PiB7XG5cbiAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGVycik7XG4gICAgICB9XG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgncHJvZmlsZScsIEpTT04uc3RyaW5naWZ5KHByb2ZpbGUpKTtcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdpZF90b2tlbicsIGlkX3Rva2VuKTtcbiAgICB9KTtcbiAgfVxuXG4gIGxvZ291dCgpIHtcbiAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgncHJvZmlsZScpO1xuICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCdpZF90b2tlbicpO1xuICB9XG5cbiAgbG9nZ2VkSW4oKSB7XG4gICAgcmV0dXJuIHRva2VuTm90RXhwaXJlZCgpO1xuICB9XG4gIC8vIHRva2VuU3Vic2NyaXB0aW9uKCkge1xuICAvLyAgIHRoaXMuYXV0aEh0dHAudG9rZW5TdHJlYW0uc3Vic2NyaWJlKFxuICAvLyAgICAgZGF0YSA9PiBjb25zb2xlLmxvZyhkYXRhKSxcbiAgLy8gICAgIGVyciA9PiBjb25zb2xlLmxvZyhlcnIpLFxuICAvLyAgICAgKCkgPT4gY29uc29sZS5sb2coJ0NvbXBsZXRlJylcbiAgLy8gICApO1xuICAvLyB9XG5cbiAgLy8gdXNlSnd0SGVscGVyKCkge1xuICAvLyAgIHZhciB0b2tlbiA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdpZF90b2tlbicpO1xuXG4gIC8vICAgY29uc29sZS5sb2coXG4gIC8vICAgICB0aGlzLmp3dEhlbHBlci5kZWNvZGVUb2tlbih0b2tlbiksXG4gIC8vICAgICB0aGlzLmp3dEhlbHBlci5nZXRUb2tlbkV4cGlyYXRpb25EYXRlKHRva2VuKSxcbiAgLy8gICAgIHRoaXMuand0SGVscGVyLmlzVG9rZW5FeHBpcmVkKHRva2VuKVxuICAvLyAgICk7XG4gIC8vIH1cbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
