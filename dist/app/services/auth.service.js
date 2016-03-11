System.register(["angular2/core", 'angular2/http', 'angular2-jwt'], function(exports_1, context_1) {
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
    var core_1, http_1, angular2_jwt_1;
    var Auth0Service;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (angular2_jwt_1_1) {
                angular2_jwt_1 = angular2_jwt_1_1;
            }],
        execute: function() {
            Auth0Service = (function () {
                function Auth0Service(http) {
                    this.http = http;
                    this.lock = new Auth0Lock('srPypYZh5tSUgC270wDX8jFixMukw5TF', 'adacapstone.auth0.com');
                    this._adiesUrl = 'https://ada-capstone-api.herokuapp.com/authenticate'; // URL to web api
                }
                Auth0Service.prototype.login = function () {
                    var _this = this;
                    // debugger;
                    var self = this;
                    this.lock.show({
                        authParams: {
                            scope: 'openid nickname'
                        }
                    }, function (err, profile, id_token) {
                        if (err) {
                            throw new Error(err);
                        }
                        var header = new http_1.Headers();
                        var bearerString = "Bearer " + id_token;
                        header.append('Authorization', bearerString);
                        self.http.post(_this._adiesUrl, null, { headers: header })
                            .subscribe(function (res) {
                            localStorage.setItem('profile', JSON.stringify(profile));
                            localStorage.setItem('id_token', res.json().jwt);
                        }, function (err) { return console.error(err); });
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
                    __metadata('design:paramtypes', [http_1.Http])
                ], Auth0Service);
                return Auth0Service;
            }());
            exports_1("Auth0Service", Auth0Service);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zZXJ2aWNlcy9hdXRoLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFPQTtnQkFJRSxzQkFBbUIsSUFBVTtvQkFBVixTQUFJLEdBQUosSUFBSSxDQUFNO29CQUg3QixTQUFJLEdBQUcsSUFBSSxTQUFTLENBQUMsa0NBQWtDLEVBQUUsdUJBQXVCLENBQUMsQ0FBQztvQkFDMUUsY0FBUyxHQUFHLHFEQUFxRCxDQUFDLENBQUUsaUJBQWlCO2dCQUU1RCxDQUFDO2dCQUVsQyw0QkFBSyxHQUFMO29CQUFBLGlCQXlCQztvQkF4QkMsWUFBWTtvQkFDWixJQUFJLElBQUksR0FBRyxJQUFJLENBQUM7b0JBQ2hCLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUNaO3dCQUNFLFVBQVUsRUFBRTs0QkFDVixLQUFLLEVBQUUsaUJBQWlCO3lCQUN6QjtxQkFDRixFQUFFLFVBQUMsR0FBVyxFQUFFLE9BQWUsRUFBRSxRQUFnQjt3QkFFbEQsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQzs0QkFDUixNQUFNLElBQUksS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO3dCQUN2QixDQUFDO3dCQUNELElBQUksTUFBTSxHQUFZLElBQUksY0FBTyxFQUFFLENBQUM7d0JBQ3BDLElBQUksWUFBWSxHQUFXLFNBQVMsR0FBRyxRQUFRLENBQUM7d0JBQ2hELE1BQU0sQ0FBQyxNQUFNLENBQUMsZUFBZSxFQUFFLFlBQVksQ0FBQyxDQUFDO3dCQUM3QyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFJLENBQUMsU0FBUyxFQUFFLElBQUksRUFBRSxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsQ0FBQzs2QkFDdEQsU0FBUyxDQUNSLFVBQUMsR0FBYTs0QkFDWixZQUFZLENBQUMsT0FBTyxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7NEJBQ3pELFlBQVksQ0FBQyxPQUFPLENBQUMsVUFBVSxFQUFFLEdBQUcsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQzt3QkFDbkQsQ0FBQyxFQUNELFVBQUMsR0FBRyxJQUFLLE9BQUEsT0FBTyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsRUFBbEIsQ0FBa0IsQ0FDMUIsQ0FBQztvQkFDUixDQUFDLENBQUMsQ0FBQztnQkFDTCxDQUFDO2dCQUVELDZCQUFNLEdBQU47b0JBQ0UsWUFBWSxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsQ0FBQztvQkFDbkMsWUFBWSxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsQ0FBQztnQkFDdEMsQ0FBQztnQkFFRCwrQkFBUSxHQUFSO29CQUNFLE1BQU0sQ0FBQyw4QkFBZSxFQUFFLENBQUM7Z0JBQzNCLENBQUM7Z0JBekNIO29CQUFDLGlCQUFVLEVBQUU7O2dDQUFBO2dCQTJDYixtQkFBQztZQUFELENBMUNBLEFBMENDLElBQUE7WUExQ0QsdUNBMENDLENBQUEiLCJmaWxlIjoiYXBwL3NlcnZpY2VzL2F1dGguc2VydmljZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSBcImFuZ3VsYXIyL2NvcmVcIjtcbmltcG9ydCB7SFRUUF9QUk9WSURFUlMsIEh0dHAsIFJlc3BvbnNlLCBIZWFkZXJzfSBmcm9tICdhbmd1bGFyMi9odHRwJztcbmltcG9ydCB7QXV0aEh0dHAsIHRva2VuTm90RXhwaXJlZCwgSnd0SGVscGVyfSBmcm9tICdhbmd1bGFyMi1qd3QnO1xuXG5kZWNsYXJlIHZhciBBdXRoMExvY2s7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBBdXRoMFNlcnZpY2Uge1xuICBsb2NrID0gbmV3IEF1dGgwTG9jaygnc3JQeXBZWmg1dFNVZ0MyNzB3RFg4akZpeE11a3c1VEYnLCAnYWRhY2Fwc3RvbmUuYXV0aDAuY29tJyk7XG4gIHByaXZhdGUgX2FkaWVzVXJsID0gJ2h0dHBzOi8vYWRhLWNhcHN0b25lLWFwaS5oZXJva3VhcHAuY29tL2F1dGhlbnRpY2F0ZSc7ICAvLyBVUkwgdG8gd2ViIGFwaVxuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBodHRwOiBIdHRwKSB7IH1cblxuICBsb2dpbigpIHtcbiAgICAvLyBkZWJ1Z2dlcjtcbiAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgdGhpcy5sb2NrLnNob3coXG4gICAgICB7XG4gICAgICAgIGF1dGhQYXJhbXM6IHtcbiAgICAgICAgICBzY29wZTogJ29wZW5pZCBuaWNrbmFtZSdcbiAgICAgICAgfVxuICAgICAgfSwgKGVycjogc3RyaW5nLCBwcm9maWxlOiBzdHJpbmcsIGlkX3Rva2VuOiBzdHJpbmcpID0+IHtcblxuICAgICAgaWYgKGVycikge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoZXJyKTtcbiAgICAgIH1cbiAgICAgIHZhciBoZWFkZXI6IEhlYWRlcnMgPSBuZXcgSGVhZGVycygpO1xuICAgICAgdmFyIGJlYXJlclN0cmluZzogc3RyaW5nID0gXCJCZWFyZXIgXCIgKyBpZF90b2tlbjtcbiAgICAgIGhlYWRlci5hcHBlbmQoJ0F1dGhvcml6YXRpb24nLCBiZWFyZXJTdHJpbmcpO1xuICAgICAgc2VsZi5odHRwLnBvc3QodGhpcy5fYWRpZXNVcmwsIG51bGwsIHsgaGVhZGVyczogaGVhZGVyIH0pXG4gICAgICAgIC5zdWJzY3JpYmUoXG4gICAgICAgICAgKHJlczogUmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdwcm9maWxlJywgSlNPTi5zdHJpbmdpZnkocHJvZmlsZSkpO1xuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2lkX3Rva2VuJywgcmVzLmpzb24oKS5qd3QpO1xuICAgICAgICAgIH0sXG4gICAgICAgICAgKGVycikgPT4gY29uc29sZS5lcnJvcihlcnIpLFxuICAgICAgICAgICk7XG4gICAgfSk7XG4gIH1cblxuICBsb2dvdXQoKSB7XG4gICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ3Byb2ZpbGUnKTtcbiAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgnaWRfdG9rZW4nKTtcbiAgfVxuXG4gIGxvZ2dlZEluKCkge1xuICAgIHJldHVybiB0b2tlbk5vdEV4cGlyZWQoKTtcbiAgfVxuXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
