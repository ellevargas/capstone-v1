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
                    // debugger;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zZXJ2aWNlcy9hdXRoLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFRQTtnQkFBQTtvQkFDRSxTQUFJLEdBQUcsSUFBSSxTQUFTLENBQUMsa0NBQWtDLEVBQUUsdUJBQXVCLENBQUMsQ0FBQztnQkErQ3BGLENBQUM7Z0JBOUNDLDBDQUEwQztnQkFFMUMsZ0VBQWdFO2dCQUVoRSw0QkFBSyxHQUFMO29CQUNFLFlBQVk7b0JBQ1osSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQ1o7d0JBQ0UsVUFBVSxFQUFFOzRCQUNWLEtBQUssRUFBRSxpQkFBaUI7eUJBQ3pCO3FCQUNGLEVBQUUsVUFBQyxHQUFXLEVBQUUsT0FBZSxFQUFFLFFBQWdCO3dCQUVsRCxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDOzRCQUNSLE1BQU0sSUFBSSxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7d0JBQ3ZCLENBQUM7d0JBQ0QsWUFBWSxDQUFDLE9BQU8sQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO3dCQUN6RCxZQUFZLENBQUMsT0FBTyxDQUFDLFVBQVUsRUFBRSxRQUFRLENBQUMsQ0FBQztvQkFDN0MsQ0FBQyxDQUFDLENBQUM7Z0JBQ0wsQ0FBQztnQkFFRCw2QkFBTSxHQUFOO29CQUNFLFlBQVksQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLENBQUM7b0JBQ25DLFlBQVksQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDLENBQUM7Z0JBQ3RDLENBQUM7Z0JBRUQsK0JBQVEsR0FBUjtvQkFDRSxNQUFNLENBQUMsOEJBQWUsRUFBRSxDQUFDO2dCQUMzQixDQUFDO2dCQS9CSDtvQkFBQyxpQkFBVSxFQUFFOztnQ0FBQTtnQkFpRGIsbUJBQUM7WUFBRCxDQWhEQSxBQWdEQyxJQUFBO1lBaERELHVDQWdEQyxDQUFBIiwiZmlsZSI6ImFwcC9zZXJ2aWNlcy9hdXRoLnNlcnZpY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0luamVjdGFibGV9IGZyb20gXCJhbmd1bGFyMi9jb3JlXCI7XG5pbXBvcnQge0hUVFBfUFJPVklERVJTLCBIdHRwfSBmcm9tICdhbmd1bGFyMi9odHRwJztcbi8vIGltcG9ydCB7QXV0aEh0dHAsIEF1dGhDb25maWcsIHRva2VuTm90RXhwaXJlZCwgSnd0SGVscGVyfSBmcm9tICdhbmd1bGFyMi1qd3QnO1xuaW1wb3J0IHt0b2tlbk5vdEV4cGlyZWQsIEp3dEhlbHBlcn0gZnJvbSAnYW5ndWxhcjItand0JztcblxuZGVjbGFyZSB2YXIgQXV0aDBMb2NrO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQXV0aDBTZXJ2aWNlIHtcbiAgbG9jayA9IG5ldyBBdXRoMExvY2soJ3NyUHlwWVpoNXRTVWdDMjcwd0RYOGpGaXhNdWt3NVRGJywgJ2FkYWNhcHN0b25lLmF1dGgwLmNvbScpO1xuICAvLyBqd3RIZWxwZXI6IEp3dEhlbHBlciA9IG5ldyBKd3RIZWxwZXIoKTtcblxuICAvLyBjb25zdHJ1Y3RvcihwdWJsaWMgaHR0cDogSHR0cCwgcHVibGljIGF1dGhIdHRwOiBBdXRoSHR0cCkgeyB9XG5cbiAgbG9naW4oKSB7XG4gICAgLy8gZGVidWdnZXI7XG4gICAgdGhpcy5sb2NrLnNob3coXG4gICAgICB7XG4gICAgICAgIGF1dGhQYXJhbXM6IHtcbiAgICAgICAgICBzY29wZTogJ29wZW5pZCBuaWNrbmFtZSdcbiAgICAgICAgfVxuICAgICAgfSwgKGVycjogc3RyaW5nLCBwcm9maWxlOiBzdHJpbmcsIGlkX3Rva2VuOiBzdHJpbmcpID0+IHtcblxuICAgICAgaWYgKGVycikge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoZXJyKTtcbiAgICAgIH1cbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdwcm9maWxlJywgSlNPTi5zdHJpbmdpZnkocHJvZmlsZSkpO1xuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2lkX3Rva2VuJywgaWRfdG9rZW4pO1xuICAgIH0pO1xuICB9XG5cbiAgbG9nb3V0KCkge1xuICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCdwcm9maWxlJyk7XG4gICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ2lkX3Rva2VuJyk7XG4gIH1cblxuICBsb2dnZWRJbigpIHtcbiAgICByZXR1cm4gdG9rZW5Ob3RFeHBpcmVkKCk7XG4gIH1cbiAgLy8gdG9rZW5TdWJzY3JpcHRpb24oKSB7XG4gIC8vICAgdGhpcy5hdXRoSHR0cC50b2tlblN0cmVhbS5zdWJzY3JpYmUoXG4gIC8vICAgICBkYXRhID0+IGNvbnNvbGUubG9nKGRhdGEpLFxuICAvLyAgICAgZXJyID0+IGNvbnNvbGUubG9nKGVyciksXG4gIC8vICAgICAoKSA9PiBjb25zb2xlLmxvZygnQ29tcGxldGUnKVxuICAvLyAgICk7XG4gIC8vIH1cblxuICAvLyB1c2VKd3RIZWxwZXIoKSB7XG4gIC8vICAgdmFyIHRva2VuID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2lkX3Rva2VuJyk7XG5cbiAgLy8gICBjb25zb2xlLmxvZyhcbiAgLy8gICAgIHRoaXMuand0SGVscGVyLmRlY29kZVRva2VuKHRva2VuKSxcbiAgLy8gICAgIHRoaXMuand0SGVscGVyLmdldFRva2VuRXhwaXJhdGlvbkRhdGUodG9rZW4pLFxuICAvLyAgICAgdGhpcy5qd3RIZWxwZXIuaXNUb2tlbkV4cGlyZWQodG9rZW4pXG4gIC8vICAgKTtcbiAgLy8gfVxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
