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
                    this._adiesUrl = 'https://ada-capstone-api.herokuapp.com/adies/'; // URL to web api
                }
                AdieService.prototype.getAdies = function () {
                    var header = new http_1.Headers();
                    if (this.authService.loggedIn()) {
                        // set headers
                        var bearerString = "Bearer " + localStorage.getItem('id_token');
                        header.append('Authorization', bearerString);
                    }
                    return this.http.get(this._adiesUrl, { headers: header })
                        .map(function (res) { return res.json().data; })
                        .do(function (data) { return console.log(data); })
                        .catch(this.handleError);
                };
                AdieService.prototype.handleError = function (error) {
                    // in a real world app, we may send the error to some remote logging infrastructure
                    // instead of just logging it to the console
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zZXJ2aWNlcy9hZGllLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFhQTtnQkFDQyxxQkFBcUIsSUFBVSxFQUFVLFdBQXlCO29CQUE3QyxTQUFJLEdBQUosSUFBSSxDQUFNO29CQUFVLGdCQUFXLEdBQVgsV0FBVyxDQUFjO29CQUUxRCxjQUFTLEdBQUcsK0NBQStDLENBQUMsQ0FBRSxpQkFBaUI7Z0JBRmxCLENBQUM7Z0JBSXRFLDhCQUFRLEdBQVI7b0JBQ0MsSUFBSSxNQUFNLEdBQVksSUFBSSxjQUFPLEVBQUUsQ0FBQztvQkFDcEMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDLENBQUM7d0JBQ2pDLGNBQWM7d0JBQ1gsSUFBSSxZQUFZLEdBQVcsU0FBUyxHQUFHLFlBQVksQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLENBQUM7d0JBQ3hFLE1BQU0sQ0FBQyxNQUFNLENBQUMsZUFBZSxFQUFFLFlBQVksQ0FBQyxDQUFDO29CQUNqRCxDQUFDO29CQUVELE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxDQUFDO3lCQUN2RCxHQUFHLENBQUMsVUFBQSxHQUFHLElBQUksT0FBUyxHQUFHLENBQUMsSUFBSSxFQUFFLENBQUMsSUFBSSxFQUF4QixDQUF3QixDQUFDO3lCQUNwQyxFQUFFLENBQUMsVUFBQSxJQUFJLElBQUksT0FBQSxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFqQixDQUFpQixDQUFDO3lCQUM3QixLQUFLLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO2dCQUMxQixDQUFDO2dCQUNPLGlDQUFXLEdBQW5CLFVBQW9CLEtBQWU7b0JBQ2pDLG1GQUFtRjtvQkFDbkYsNENBQTRDO29CQUM1QyxPQUFPLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO29CQUNyQixNQUFNLENBQUMsdUJBQVUsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxDQUFDLEtBQUssSUFBSSxjQUFjLENBQUMsQ0FBQztnQkFDaEUsQ0FBQztnQkF6Qkg7b0JBQUMsaUJBQVUsRUFBRTs7K0JBQUE7Z0JBMEJiLGtCQUFDO1lBQUQsQ0F4QkEsQUF3QkMsSUFBQTtZQXhCRCxxQ0F3QkMsQ0FBQSIsImZpbGUiOiJhcHAvc2VydmljZXMvYWRpZS5zZXJ2aWNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQW5ndWxhciBpbXBvcnRzXG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5pbXBvcnQgeyBIdHRwLCBSZXNwb25zZSwgSGVhZGVycyB9IGZyb20gJ2FuZ3VsYXIyL2h0dHAnO1xuXG4vLyBSeGpzIGltcG9ydHNcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzL09ic2VydmFibGUnO1xuXG4vLyBQcm9qZWN0IGltcG9ydHNcbmltcG9ydCB7IEFkaWUgfSBmcm9tICcuLi9tb2RlbHMvYWRpZSc7XG5pbXBvcnQgeyBBdXRoMFNlcnZpY2UgfSBmcm9tICcuL2F1dGguc2VydmljZSc7XG5cbkBJbmplY3RhYmxlKClcblxuZXhwb3J0IGNsYXNzIEFkaWVTZXJ2aWNlIHtcblx0Y29uc3RydWN0b3IgKHByaXZhdGUgaHR0cDogSHR0cCwgcHJpdmF0ZSBhdXRoU2VydmljZTogQXV0aDBTZXJ2aWNlKSB7fVxuXG5cdHByaXZhdGUgX2FkaWVzVXJsID0gJ2h0dHBzOi8vYWRhLWNhcHN0b25lLWFwaS5oZXJva3VhcHAuY29tL2FkaWVzLyc7ICAvLyBVUkwgdG8gd2ViIGFwaVxuXG5cdGdldEFkaWVzKCkge1xuXHRcdHZhciBoZWFkZXI6IEhlYWRlcnMgPSBuZXcgSGVhZGVycygpO1xuXHRcdGlmICh0aGlzLmF1dGhTZXJ2aWNlLmxvZ2dlZEluKCkpIHtcblx0XHRcdC8vIHNldCBoZWFkZXJzXG4gICAgICB2YXIgYmVhcmVyU3RyaW5nOiBzdHJpbmcgPSBcIkJlYXJlciBcIiArIGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdpZF90b2tlbicpO1xuICAgICAgaGVhZGVyLmFwcGVuZCgnQXV0aG9yaXphdGlvbicsIGJlYXJlclN0cmluZyk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHRoaXMuaHR0cC5nZXQodGhpcy5fYWRpZXNVcmwsIHsgaGVhZGVyczogaGVhZGVyIH0pXG5cdFx0XHQubWFwKHJlcyA9PiA8QWRpZVtdPiByZXMuanNvbigpLmRhdGEpXG5cdFx0XHQuZG8oZGF0YSA9PiBjb25zb2xlLmxvZyhkYXRhKSlcblx0XHRcdC5jYXRjaCh0aGlzLmhhbmRsZUVycm9yKTtcbiAgfVxuICBwcml2YXRlIGhhbmRsZUVycm9yKGVycm9yOiBSZXNwb25zZSkge1xuICAgIC8vIGluIGEgcmVhbCB3b3JsZCBhcHAsIHdlIG1heSBzZW5kIHRoZSBlcnJvciB0byBzb21lIHJlbW90ZSBsb2dnaW5nIGluZnJhc3RydWN0dXJlXG4gICAgLy8gaW5zdGVhZCBvZiBqdXN0IGxvZ2dpbmcgaXQgdG8gdGhlIGNvbnNvbGVcbiAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICByZXR1cm4gT2JzZXJ2YWJsZS50aHJvdyhlcnJvci5qc29uKCkuZXJyb3IgfHwgJ1NlcnZlciBlcnJvcicpO1xuICB9XG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
