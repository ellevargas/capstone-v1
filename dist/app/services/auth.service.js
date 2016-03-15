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
//# sourceMappingURL=auth.service.js.map