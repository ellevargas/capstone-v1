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
                    this.jwtHelper = new angular2_jwt_1.JwtHelper();
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
                Auth0Service.prototype.getCurrentUserId = function () {
                    if (localStorage.getItem('id_token')) {
                        var token = localStorage.getItem('id_token');
                        return this.jwtHelper.decodeToken(token).user_id;
                    }
                    return null;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zZXJ2aWNlcy9hdXRoLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFPQTtnQkFLRSxzQkFBbUIsSUFBVTtvQkFBVixTQUFJLEdBQUosSUFBSSxDQUFNO29CQUo3QixTQUFJLEdBQUcsSUFBSSxTQUFTLENBQUMsa0NBQWtDLEVBQUUsdUJBQXVCLENBQUMsQ0FBQztvQkFDMUUsY0FBUyxHQUFHLHFEQUFxRCxDQUFDLENBQUUsaUJBQWlCO29CQUM3RixjQUFTLEdBQWMsSUFBSSx3QkFBUyxFQUFFLENBQUM7Z0JBRU4sQ0FBQztnQkFFbEMsNEJBQUssR0FBTDtvQkFBQSxpQkF5QkM7b0JBeEJDLFlBQVk7b0JBQ1osSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDO29CQUNoQixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FDWjt3QkFDRSxVQUFVLEVBQUU7NEJBQ1YsS0FBSyxFQUFFLGlCQUFpQjt5QkFDekI7cUJBQ0YsRUFBRSxVQUFDLEdBQVcsRUFBRSxPQUFlLEVBQUUsUUFBZ0I7d0JBRWxELEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7NEJBQ1IsTUFBTSxJQUFJLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQzt3QkFDdkIsQ0FBQzt3QkFDRCxJQUFJLE1BQU0sR0FBWSxJQUFJLGNBQU8sRUFBRSxDQUFDO3dCQUNwQyxJQUFJLFlBQVksR0FBVyxTQUFTLEdBQUcsUUFBUSxDQUFDO3dCQUNoRCxNQUFNLENBQUMsTUFBTSxDQUFDLGVBQWUsRUFBRSxZQUFZLENBQUMsQ0FBQzt3QkFDN0MsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSSxDQUFDLFNBQVMsRUFBRSxJQUFJLEVBQUUsRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLENBQUM7NkJBQ3RELFNBQVMsQ0FDUixVQUFDLEdBQWE7NEJBQ1osWUFBWSxDQUFDLE9BQU8sQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDOzRCQUN6RCxZQUFZLENBQUMsT0FBTyxDQUFDLFVBQVUsRUFBRSxHQUFHLENBQUMsSUFBSSxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUM7d0JBQ25ELENBQUMsRUFDRCxVQUFDLEdBQUcsSUFBSyxPQUFBLE9BQU8sQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLEVBQWxCLENBQWtCLENBQzFCLENBQUM7b0JBQ1IsQ0FBQyxDQUFDLENBQUM7Z0JBQ0wsQ0FBQztnQkFFRCw2QkFBTSxHQUFOO29CQUNFLFlBQVksQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLENBQUM7b0JBQ25DLFlBQVksQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDLENBQUM7Z0JBQ3RDLENBQUM7Z0JBRUQsK0JBQVEsR0FBUjtvQkFDRSxNQUFNLENBQUMsOEJBQWUsRUFBRSxDQUFDO2dCQUMzQixDQUFDO2dCQUVELHVDQUFnQixHQUFoQjtvQkFDRSxFQUFFLENBQUMsQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQzt3QkFDckMsSUFBSSxLQUFLLEdBQUcsWUFBWSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQzt3QkFDN0MsTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDLE9BQU8sQ0FBQztvQkFDbkQsQ0FBQztvQkFDRCxNQUFNLENBQUMsSUFBSSxDQUFDO2dCQUNkLENBQUM7Z0JBbERIO29CQUFDLGlCQUFVLEVBQUU7O2dDQUFBO2dCQW9EYixtQkFBQztZQUFELENBbkRBLEFBbURDLElBQUE7WUFuREQsdUNBbURDLENBQUEiLCJmaWxlIjoiYXBwL3NlcnZpY2VzL2F1dGguc2VydmljZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSBcImFuZ3VsYXIyL2NvcmVcIjtcbmltcG9ydCB7SFRUUF9QUk9WSURFUlMsIEh0dHAsIFJlc3BvbnNlLCBIZWFkZXJzfSBmcm9tICdhbmd1bGFyMi9odHRwJztcbmltcG9ydCB7QXV0aEh0dHAsIHRva2VuTm90RXhwaXJlZCwgSnd0SGVscGVyfSBmcm9tICdhbmd1bGFyMi1qd3QnO1xuXG5kZWNsYXJlIHZhciBBdXRoMExvY2s7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBBdXRoMFNlcnZpY2Uge1xuICBsb2NrID0gbmV3IEF1dGgwTG9jaygnc3JQeXBZWmg1dFNVZ0MyNzB3RFg4akZpeE11a3c1VEYnLCAnYWRhY2Fwc3RvbmUuYXV0aDAuY29tJyk7XG4gIHByaXZhdGUgX2FkaWVzVXJsID0gJ2h0dHBzOi8vYWRhLWNhcHN0b25lLWFwaS5oZXJva3VhcHAuY29tL2F1dGhlbnRpY2F0ZSc7ICAvLyBVUkwgdG8gd2ViIGFwaVxuICBqd3RIZWxwZXI6IEp3dEhlbHBlciA9IG5ldyBKd3RIZWxwZXIoKTtcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgaHR0cDogSHR0cCkgeyB9XG5cbiAgbG9naW4oKSB7XG4gICAgLy8gZGVidWdnZXI7XG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgIHRoaXMubG9jay5zaG93KFxuICAgICAge1xuICAgICAgICBhdXRoUGFyYW1zOiB7XG4gICAgICAgICAgc2NvcGU6ICdvcGVuaWQgbmlja25hbWUnXG4gICAgICAgIH1cbiAgICAgIH0sIChlcnI6IHN0cmluZywgcHJvZmlsZTogc3RyaW5nLCBpZF90b2tlbjogc3RyaW5nKSA9PiB7XG5cbiAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGVycik7XG4gICAgICB9XG4gICAgICB2YXIgaGVhZGVyOiBIZWFkZXJzID0gbmV3IEhlYWRlcnMoKTtcbiAgICAgIHZhciBiZWFyZXJTdHJpbmc6IHN0cmluZyA9IFwiQmVhcmVyIFwiICsgaWRfdG9rZW47XG4gICAgICBoZWFkZXIuYXBwZW5kKCdBdXRob3JpemF0aW9uJywgYmVhcmVyU3RyaW5nKTtcbiAgICAgIHNlbGYuaHR0cC5wb3N0KHRoaXMuX2FkaWVzVXJsLCBudWxsLCB7IGhlYWRlcnM6IGhlYWRlciB9KVxuICAgICAgICAuc3Vic2NyaWJlKFxuICAgICAgICAgIChyZXM6IFJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgncHJvZmlsZScsIEpTT04uc3RyaW5naWZ5KHByb2ZpbGUpKTtcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdpZF90b2tlbicsIHJlcy5qc29uKCkuand0KTtcbiAgICAgICAgICB9LFxuICAgICAgICAgIChlcnIpID0+IGNvbnNvbGUuZXJyb3IoZXJyKVxuICAgICAgICAgICk7XG4gICAgfSk7XG4gIH1cblxuICBsb2dvdXQoKSB7XG4gICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ3Byb2ZpbGUnKTtcbiAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgnaWRfdG9rZW4nKTtcbiAgfVxuXG4gIGxvZ2dlZEluKCkge1xuICAgIHJldHVybiB0b2tlbk5vdEV4cGlyZWQoKTtcbiAgfVxuXG4gIGdldEN1cnJlbnRVc2VySWQoKSB7XG4gICAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdpZF90b2tlbicpKSB7XG4gICAgICB2YXIgdG9rZW4gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnaWRfdG9rZW4nKTtcbiAgICAgIHJldHVybiB0aGlzLmp3dEhlbHBlci5kZWNvZGVUb2tlbih0b2tlbikudXNlcl9pZDsgIFxuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
