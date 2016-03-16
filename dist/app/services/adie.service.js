System.register(['angular2/core', 'angular2/http', 'rxjs/Observable', './auth.service'], function(exports_1, context_1) {
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
    var core_1, http_1, Observable_1, auth_service_1;
    var AdieService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            },
            function (auth_service_1_1) {
                auth_service_1 = auth_service_1_1;
            }],
        execute: function() {
            AdieService = (function () {
                function AdieService(http, authService) {
                    this.http = http;
                    this.authService = authService;
                    this._adiesUrl = 'https://ada-capstone-api.herokuapp.com/adies/';
                }
                AdieService.prototype.getAdies = function () {
                    var header = new http_1.Headers();
                    if (this.authService.loggedIn()) {
                        var bearerString = "Bearer " + localStorage.getItem('id_token');
                        header.append('Authorization', bearerString);
                    }
                    return this.http.get(this._adiesUrl, { headers: header })
                        .map(function (res) { return res.json().data; })
                        .do(function (data) { return console.log(data); })
                        .catch(this.handleError);
                };
                AdieService.prototype.getAdie = function (id) {
                    var header = new http_1.Headers();
                    var adieUrl = "" + this._adiesUrl + id;
                    if (this.authService.loggedIn()) {
                        var bearerString = "Bearer " + localStorage.getItem('id_token');
                        header.append('Authorization', bearerString);
                    }
                    return this.http.get(adieUrl, { headers: header })
                        .map(function (res) { return res.json().data; })
                        .catch(this.handleError);
                };
                AdieService.prototype.updateAdie = function (adie) {
                    var header = new http_1.Headers();
                    header.append('Content-Type', 'application/json');
                    var adieUrl = "" + this._adiesUrl + adie.id;
                    if (this.authService.loggedIn()) {
                        var bearerString = "Bearer " + localStorage.getItem('id_token');
                        header.append('Authorization', bearerString);
                    }
                    return this.http.patch(adieUrl, JSON.stringify(adie), { headers: header })
                        .map(function (res) { return res.json().data; })
                        .catch(this.handleError);
                };
                AdieService.prototype.handleError = function (error) {
                    console.error(error);
                    return Observable_1.Observable.throw(error.json().error || 'Server error');
                };
                AdieService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http, auth_service_1.Auth0Service])
                ], AdieService);
                return AdieService;
            }());
            exports_1("AdieService", AdieService);
        }
    }
});
//# sourceMappingURL=adie.service.js.map