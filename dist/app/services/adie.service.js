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
                        var bearerString = "Bearer " + localStorage.getItem('id_token');
                        header.append('Authorization', bearerString);
                    }
                    return this.http.get(this._adiesUrl, { headers: header })
                        .map(function (res) { return res.json().data; })
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
                    var adieUrl = "" + this._adiesUrl + adie.id;
                    if (this.authService.loggedIn()) {
                        var bearerString = "Bearer " + localStorage.getItem('id_token');
                        header.append('Authorization', bearerString);
                    }
                    return this.http.patch(adieUrl, adie.toString(), { headers: header })
                        .map(function (res) { return res.json().data; })
                        .do(function (data) { return console.log(data); })
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zZXJ2aWNlcy9hZGllLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFhQTtnQkFDQyxxQkFBcUIsSUFBVSxFQUFVLFdBQXlCO29CQUE3QyxTQUFJLEdBQUosSUFBSSxDQUFNO29CQUFVLGdCQUFXLEdBQVgsV0FBVyxDQUFjO29CQUUxRCxjQUFTLEdBQUcsK0NBQStDLENBQUMsQ0FBRSxpQkFBaUI7Z0JBRmxCLENBQUM7Z0JBSXRFLDhCQUFRLEdBQVI7b0JBQ0MsSUFBSSxNQUFNLEdBQVksSUFBSSxjQUFPLEVBQUUsQ0FBQztvQkFDcEMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDLENBQUM7d0JBQzlCLElBQUksWUFBWSxHQUFXLFNBQVMsR0FBRyxZQUFZLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxDQUFDO3dCQUN4RSxNQUFNLENBQUMsTUFBTSxDQUFDLGVBQWUsRUFBRSxZQUFZLENBQUMsQ0FBQztvQkFDakQsQ0FBQztvQkFFRCxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsQ0FBQzt5QkFDdkQsR0FBRyxDQUFDLFVBQUEsR0FBRyxJQUFJLE9BQVMsR0FBRyxDQUFDLElBQUksRUFBRSxDQUFDLElBQUksRUFBeEIsQ0FBd0IsQ0FBQzt5QkFFcEMsS0FBSyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztnQkFDMUIsQ0FBQztnQkFFRCw2QkFBTyxHQUFQLFVBQVEsRUFBVTtvQkFDbEIsSUFBSSxNQUFNLEdBQVksSUFBSSxjQUFPLEVBQUUsQ0FBQztvQkFDcEMsSUFBSSxPQUFPLEdBQVcsS0FBRyxJQUFJLENBQUMsU0FBUyxHQUFHLEVBQUksQ0FBQztvQkFDL0MsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDLENBQUM7d0JBQzlCLElBQUksWUFBWSxHQUFXLFNBQVMsR0FBRyxZQUFZLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxDQUFDO3dCQUN4RSxNQUFNLENBQUMsTUFBTSxDQUFDLGVBQWUsRUFBRSxZQUFZLENBQUMsQ0FBQztvQkFDakQsQ0FBQztvQkFDRCxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxDQUFDO3lCQUNoRCxHQUFHLENBQUMsVUFBQSxHQUFHLElBQUksT0FBTSxHQUFHLENBQUMsSUFBSSxFQUFFLENBQUMsSUFBSSxFQUFyQixDQUFxQixDQUFDO3lCQUVqQyxLQUFLLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO2dCQUMxQixDQUFDO2dCQUVELGdDQUFVLEdBQVYsVUFBVyxJQUFVO29CQUNyQixJQUFJLE1BQU0sR0FBWSxJQUFJLGNBQU8sRUFBRSxDQUFDO29CQUNwQyxJQUFJLE9BQU8sR0FBVyxLQUFHLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLEVBQUksQ0FBQztvQkFDcEQsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDLENBQUM7d0JBQzlCLElBQUksWUFBWSxHQUFXLFNBQVMsR0FBRyxZQUFZLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxDQUFDO3dCQUN4RSxNQUFNLENBQUMsTUFBTSxDQUFDLGVBQWUsRUFBRSxZQUFZLENBQUMsQ0FBQztvQkFDakQsQ0FBQztvQkFDRCxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxRQUFRLEVBQUUsRUFBRSxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsQ0FBQzt5QkFDbkUsR0FBRyxDQUFDLFVBQUEsR0FBRyxJQUFJLE9BQU0sR0FBRyxDQUFDLElBQUksRUFBRSxDQUFDLElBQUksRUFBckIsQ0FBcUIsQ0FBQzt5QkFDakMsRUFBRSxDQUFDLFVBQUEsSUFBSSxJQUFJLE9BQUEsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBakIsQ0FBaUIsQ0FBQzt5QkFDN0IsS0FBSyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztnQkFDMUIsQ0FBQztnQkFJTyxpQ0FBVyxHQUFuQixVQUFvQixLQUFlO29CQUNqQyxPQUFPLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO29CQUNyQixNQUFNLENBQUMsdUJBQVUsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxDQUFDLEtBQUssSUFBSSxjQUFjLENBQUMsQ0FBQztnQkFDaEUsQ0FBQztnQkFuREg7b0JBQUMsaUJBQVUsRUFBRTs7K0JBQUE7Z0JBb0RiLGtCQUFDO1lBQUQsQ0FsREEsQUFrREMsSUFBQTtZQWxERCxxQ0FrREMsQ0FBQSIsImZpbGUiOiJhcHAvc2VydmljZXMvYWRpZS5zZXJ2aWNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQW5ndWxhciBpbXBvcnRzXG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5pbXBvcnQgeyBIdHRwLCBSZXNwb25zZSwgSGVhZGVycyB9IGZyb20gJ2FuZ3VsYXIyL2h0dHAnO1xuXG4vLyBSeGpzIGltcG9ydHNcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzL09ic2VydmFibGUnO1xuXG4vLyBQcm9qZWN0IGltcG9ydHNcbmltcG9ydCB7IEFkaWUgfSBmcm9tICcuLi9tb2RlbHMvYWRpZSc7XG5pbXBvcnQgeyBBdXRoMFNlcnZpY2UgfSBmcm9tICcuL2F1dGguc2VydmljZSc7XG5cbkBJbmplY3RhYmxlKClcblxuZXhwb3J0IGNsYXNzIEFkaWVTZXJ2aWNlIHtcblx0Y29uc3RydWN0b3IgKHByaXZhdGUgaHR0cDogSHR0cCwgcHJpdmF0ZSBhdXRoU2VydmljZTogQXV0aDBTZXJ2aWNlKSB7fVxuXG5cdHByaXZhdGUgX2FkaWVzVXJsID0gJ2h0dHBzOi8vYWRhLWNhcHN0b25lLWFwaS5oZXJva3VhcHAuY29tL2FkaWVzLyc7ICAvLyBVUkwgdG8gd2ViIGFwaVxuXG5cdGdldEFkaWVzKCkge1xuXHRcdHZhciBoZWFkZXI6IEhlYWRlcnMgPSBuZXcgSGVhZGVycygpO1xuXHRcdGlmICh0aGlzLmF1dGhTZXJ2aWNlLmxvZ2dlZEluKCkpIHtcbiAgICAgIHZhciBiZWFyZXJTdHJpbmc6IHN0cmluZyA9IFwiQmVhcmVyIFwiICsgbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2lkX3Rva2VuJyk7XG4gICAgICBoZWFkZXIuYXBwZW5kKCdBdXRob3JpemF0aW9uJywgYmVhcmVyU3RyaW5nKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gdGhpcy5odHRwLmdldCh0aGlzLl9hZGllc1VybCwgeyBoZWFkZXJzOiBoZWFkZXIgfSlcblx0XHRcdC5tYXAocmVzID0+IDxBZGllW10+IHJlcy5qc29uKCkuZGF0YSlcblx0XHRcdC8vIC5kbyhkYXRhID0+IGNvbnNvbGUubG9nKGRhdGEpKVxuXHRcdFx0LmNhdGNoKHRoaXMuaGFuZGxlRXJyb3IpO1xuICB9XG5cbiAgZ2V0QWRpZShpZDogbnVtYmVyKSB7XG5cdFx0dmFyIGhlYWRlcjogSGVhZGVycyA9IG5ldyBIZWFkZXJzKCk7XG5cdFx0dmFyIGFkaWVVcmw6IHN0cmluZyA9IGAke3RoaXMuX2FkaWVzVXJsfSR7aWR9YDtcblx0XHRpZiAodGhpcy5hdXRoU2VydmljZS5sb2dnZWRJbigpKSB7XG4gICAgICB2YXIgYmVhcmVyU3RyaW5nOiBzdHJpbmcgPSBcIkJlYXJlciBcIiArIGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdpZF90b2tlbicpO1xuICAgICAgaGVhZGVyLmFwcGVuZCgnQXV0aG9yaXphdGlvbicsIGJlYXJlclN0cmluZyk7XG5cdFx0fVxuXHRcdHJldHVybiB0aGlzLmh0dHAuZ2V0KGFkaWVVcmwsIHsgaGVhZGVyczogaGVhZGVyIH0pXG5cdFx0XHQubWFwKHJlcyA9PiA8QWRpZT5yZXMuanNvbigpLmRhdGEpXG5cdFx0XHQvLyAuZG8oZGF0YSA9PiBjb25zb2xlLmxvZyhkYXRhKSlcblx0XHRcdC5jYXRjaCh0aGlzLmhhbmRsZUVycm9yKTtcdFxuICB9XG5cbiAgdXBkYXRlQWRpZShhZGllOiBBZGllKSB7XG5cdFx0dmFyIGhlYWRlcjogSGVhZGVycyA9IG5ldyBIZWFkZXJzKCk7XG5cdFx0dmFyIGFkaWVVcmw6IHN0cmluZyA9IGAke3RoaXMuX2FkaWVzVXJsfSR7YWRpZS5pZH1gO1xuXHRcdGlmICh0aGlzLmF1dGhTZXJ2aWNlLmxvZ2dlZEluKCkpIHtcbiAgICAgIHZhciBiZWFyZXJTdHJpbmc6IHN0cmluZyA9IFwiQmVhcmVyIFwiICsgbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2lkX3Rva2VuJyk7XG4gICAgICBoZWFkZXIuYXBwZW5kKCdBdXRob3JpemF0aW9uJywgYmVhcmVyU3RyaW5nKTtcblx0XHR9XG5cdFx0cmV0dXJuIHRoaXMuaHR0cC5wYXRjaChhZGllVXJsLCBhZGllLnRvU3RyaW5nKCksIHsgaGVhZGVyczogaGVhZGVyIH0pXG5cdFx0XHQubWFwKHJlcyA9PiA8QWRpZT5yZXMuanNvbigpLmRhdGEpXG5cdFx0XHQuZG8oZGF0YSA9PiBjb25zb2xlLmxvZyhkYXRhKSlcblx0XHRcdC5jYXRjaCh0aGlzLmhhbmRsZUVycm9yKTtcdFxuICB9XG5cblxuXG4gIHByaXZhdGUgaGFuZGxlRXJyb3IoZXJyb3I6IFJlc3BvbnNlKSB7XG4gICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgcmV0dXJuIE9ic2VydmFibGUudGhyb3coZXJyb3IuanNvbigpLmVycm9yIHx8ICdTZXJ2ZXIgZXJyb3InKTtcbiAgfVxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
