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
                Auth0Service.prototype.getAdieId = function () {
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zZXJ2aWNlcy9hdXRoLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFPQTtnQkFLRSxzQkFBbUIsSUFBVTtvQkFBVixTQUFJLEdBQUosSUFBSSxDQUFNO29CQUo3QixTQUFJLEdBQUcsSUFBSSxTQUFTLENBQUMsa0NBQWtDLEVBQUUsdUJBQXVCLENBQUMsQ0FBQztvQkFDMUUsY0FBUyxHQUFHLHFEQUFxRCxDQUFDLENBQUUsaUJBQWlCO29CQUM3RixjQUFTLEdBQWMsSUFBSSx3QkFBUyxFQUFFLENBQUM7Z0JBRU4sQ0FBQztnQkFFbEMsNEJBQUssR0FBTDtvQkFBQSxpQkF5QkM7b0JBeEJDLFlBQVk7b0JBQ1osSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDO29CQUNoQixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FDWjt3QkFDRSxVQUFVLEVBQUU7NEJBQ1YsS0FBSyxFQUFFLGlCQUFpQjt5QkFDekI7cUJBQ0YsRUFBRSxVQUFDLEdBQVcsRUFBRSxPQUFlLEVBQUUsUUFBZ0I7d0JBRWxELEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7NEJBQ1IsTUFBTSxJQUFJLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQzt3QkFDdkIsQ0FBQzt3QkFDRCxJQUFJLE1BQU0sR0FBWSxJQUFJLGNBQU8sRUFBRSxDQUFDO3dCQUNwQyxJQUFJLFlBQVksR0FBVyxTQUFTLEdBQUcsUUFBUSxDQUFDO3dCQUNoRCxNQUFNLENBQUMsTUFBTSxDQUFDLGVBQWUsRUFBRSxZQUFZLENBQUMsQ0FBQzt3QkFDN0MsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSSxDQUFDLFNBQVMsRUFBRSxJQUFJLEVBQUUsRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLENBQUM7NkJBQ3RELFNBQVMsQ0FDUixVQUFDLEdBQWE7NEJBQ1osWUFBWSxDQUFDLE9BQU8sQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDOzRCQUN6RCxZQUFZLENBQUMsT0FBTyxDQUFDLFVBQVUsRUFBRSxHQUFHLENBQUMsSUFBSSxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUM7d0JBQ25ELENBQUMsRUFDRCxVQUFDLEdBQUcsSUFBSyxPQUFBLE9BQU8sQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLEVBQWxCLENBQWtCLENBQzFCLENBQUM7b0JBQ1IsQ0FBQyxDQUFDLENBQUM7Z0JBQ0wsQ0FBQztnQkFFRCw2QkFBTSxHQUFOO29CQUNFLFlBQVksQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLENBQUM7b0JBQ25DLFlBQVksQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDLENBQUM7Z0JBQ3RDLENBQUM7Z0JBRUQsK0JBQVEsR0FBUjtvQkFDRSxNQUFNLENBQUMsOEJBQWUsRUFBRSxDQUFDO2dCQUMzQixDQUFDO2dCQUVELGdDQUFTLEdBQVQ7b0JBQ0UsRUFBRSxDQUFDLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUM7d0JBQ3JDLElBQUksS0FBSyxHQUFHLFlBQVksQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLENBQUM7d0JBQzdDLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxPQUFPLENBQUM7b0JBQ25ELENBQUM7b0JBQ0QsTUFBTSxDQUFDLElBQUksQ0FBQztnQkFDZCxDQUFDO2dCQWxESDtvQkFBQyxpQkFBVSxFQUFFOztnQ0FBQTtnQkFvRGIsbUJBQUM7WUFBRCxDQW5EQSxBQW1EQyxJQUFBO1lBbkRELHVDQW1EQyxDQUFBIiwiZmlsZSI6ImFwcC9zZXJ2aWNlcy9hdXRoLnNlcnZpY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0luamVjdGFibGV9IGZyb20gXCJhbmd1bGFyMi9jb3JlXCI7XG5pbXBvcnQge0hUVFBfUFJPVklERVJTLCBIdHRwLCBSZXNwb25zZSwgSGVhZGVyc30gZnJvbSAnYW5ndWxhcjIvaHR0cCc7XG5pbXBvcnQge0F1dGhIdHRwLCB0b2tlbk5vdEV4cGlyZWQsIEp3dEhlbHBlcn0gZnJvbSAnYW5ndWxhcjItand0JztcblxuZGVjbGFyZSB2YXIgQXV0aDBMb2NrO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQXV0aDBTZXJ2aWNlIHtcbiAgbG9jayA9IG5ldyBBdXRoMExvY2soJ3NyUHlwWVpoNXRTVWdDMjcwd0RYOGpGaXhNdWt3NVRGJywgJ2FkYWNhcHN0b25lLmF1dGgwLmNvbScpO1xuICBwcml2YXRlIF9hZGllc1VybCA9ICdodHRwczovL2FkYS1jYXBzdG9uZS1hcGkuaGVyb2t1YXBwLmNvbS9hdXRoZW50aWNhdGUnOyAgLy8gVVJMIHRvIHdlYiBhcGlcbiAgand0SGVscGVyOiBKd3RIZWxwZXIgPSBuZXcgSnd0SGVscGVyKCk7XG5cbiAgY29uc3RydWN0b3IocHVibGljIGh0dHA6IEh0dHApIHsgfVxuXG4gIGxvZ2luKCkge1xuICAgIC8vIGRlYnVnZ2VyO1xuICAgIHZhciBzZWxmID0gdGhpcztcbiAgICB0aGlzLmxvY2suc2hvdyhcbiAgICAgIHtcbiAgICAgICAgYXV0aFBhcmFtczoge1xuICAgICAgICAgIHNjb3BlOiAnb3BlbmlkIG5pY2tuYW1lJ1xuICAgICAgICB9XG4gICAgICB9LCAoZXJyOiBzdHJpbmcsIHByb2ZpbGU6IHN0cmluZywgaWRfdG9rZW46IHN0cmluZykgPT4ge1xuXG4gICAgICBpZiAoZXJyKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihlcnIpO1xuICAgICAgfVxuICAgICAgdmFyIGhlYWRlcjogSGVhZGVycyA9IG5ldyBIZWFkZXJzKCk7XG4gICAgICB2YXIgYmVhcmVyU3RyaW5nOiBzdHJpbmcgPSBcIkJlYXJlciBcIiArIGlkX3Rva2VuO1xuICAgICAgaGVhZGVyLmFwcGVuZCgnQXV0aG9yaXphdGlvbicsIGJlYXJlclN0cmluZyk7XG4gICAgICBzZWxmLmh0dHAucG9zdCh0aGlzLl9hZGllc1VybCwgbnVsbCwgeyBoZWFkZXJzOiBoZWFkZXIgfSlcbiAgICAgICAgLnN1YnNjcmliZShcbiAgICAgICAgICAocmVzOiBSZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Byb2ZpbGUnLCBKU09OLnN0cmluZ2lmeShwcm9maWxlKSk7XG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnaWRfdG9rZW4nLCByZXMuanNvbigpLmp3dCk7XG4gICAgICAgICAgfSxcbiAgICAgICAgICAoZXJyKSA9PiBjb25zb2xlLmVycm9yKGVycilcbiAgICAgICAgICApO1xuICAgIH0pO1xuICB9XG5cbiAgbG9nb3V0KCkge1xuICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCdwcm9maWxlJyk7XG4gICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ2lkX3Rva2VuJyk7XG4gIH1cblxuICBsb2dnZWRJbigpIHtcbiAgICByZXR1cm4gdG9rZW5Ob3RFeHBpcmVkKCk7XG4gIH1cblxuICBnZXRBZGllSWQoKSB7XG4gICAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdpZF90b2tlbicpKSB7XG4gICAgICB2YXIgdG9rZW4gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnaWRfdG9rZW4nKTtcbiAgICAgIHJldHVybiB0aGlzLmp3dEhlbHBlci5kZWNvZGVUb2tlbih0b2tlbikudXNlcl9pZDsgIFxuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
