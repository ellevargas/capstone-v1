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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zZXJ2aWNlcy9hZGllLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFhQTtnQkFDQyxxQkFBcUIsSUFBVSxFQUFVLFdBQXlCO29CQUE3QyxTQUFJLEdBQUosSUFBSSxDQUFNO29CQUFVLGdCQUFXLEdBQVgsV0FBVyxDQUFjO29CQUUxRCxjQUFTLEdBQUcsK0NBQStDLENBQUM7Z0JBRkMsQ0FBQztnQkFJdEUsOEJBQVEsR0FBUjtvQkFDQyxJQUFJLE1BQU0sR0FBWSxJQUFJLGNBQU8sRUFBRSxDQUFDO29CQUNwQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUMsQ0FBQzt3QkFDOUIsSUFBSSxZQUFZLEdBQVcsU0FBUyxHQUFHLFlBQVksQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLENBQUM7d0JBQ3hFLE1BQU0sQ0FBQyxNQUFNLENBQUMsZUFBZSxFQUFFLFlBQVksQ0FBQyxDQUFDO29CQUNqRCxDQUFDO29CQUVELE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxDQUFDO3lCQUN2RCxHQUFHLENBQUMsVUFBQSxHQUFHLElBQUksT0FBUyxHQUFHLENBQUMsSUFBSSxFQUFFLENBQUMsSUFBSSxFQUF4QixDQUF3QixDQUFDO3lCQUNwQyxFQUFFLENBQUMsVUFBQSxJQUFJLElBQUksT0FBQSxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFqQixDQUFpQixDQUFDO3lCQUM3QixLQUFLLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO2dCQUMxQixDQUFDO2dCQUVELDZCQUFPLEdBQVAsVUFBUSxFQUFVO29CQUNsQixJQUFJLE1BQU0sR0FBWSxJQUFJLGNBQU8sRUFBRSxDQUFDO29CQUNwQyxJQUFJLE9BQU8sR0FBVyxLQUFHLElBQUksQ0FBQyxTQUFTLEdBQUcsRUFBSSxDQUFDO29CQUMvQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUMsQ0FBQzt3QkFDOUIsSUFBSSxZQUFZLEdBQVcsU0FBUyxHQUFHLFlBQVksQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLENBQUM7d0JBQ3hFLE1BQU0sQ0FBQyxNQUFNLENBQUMsZUFBZSxFQUFFLFlBQVksQ0FBQyxDQUFDO29CQUNqRCxDQUFDO29CQUNELE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxPQUFPLEVBQUUsRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLENBQUM7eUJBQ2hELEdBQUcsQ0FBQyxVQUFBLEdBQUcsSUFBSSxPQUFNLEdBQUcsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxJQUFJLEVBQXJCLENBQXFCLENBQUM7eUJBRWpDLEtBQUssQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7Z0JBQzFCLENBQUM7Z0JBRUQsZ0NBQVUsR0FBVixVQUFXLElBQVU7b0JBQ3JCLElBQUksTUFBTSxHQUFZLElBQUksY0FBTyxFQUFFLENBQUM7b0JBQ3BDLE1BQU0sQ0FBQyxNQUFNLENBQUMsY0FBYyxFQUFFLGtCQUFrQixDQUFDLENBQUM7b0JBQ2xELElBQUksT0FBTyxHQUFXLEtBQUcsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsRUFBSSxDQUFDO29CQUNwRCxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUMsQ0FBQzt3QkFDOUIsSUFBSSxZQUFZLEdBQVcsU0FBUyxHQUFHLFlBQVksQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLENBQUM7d0JBQ3hFLE1BQU0sQ0FBQyxNQUFNLENBQUMsZUFBZSxFQUFFLFlBQVksQ0FBQyxDQUFDO29CQUNqRCxDQUFDO29CQUNELE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsQ0FBQzt5QkFDeEUsR0FBRyxDQUFDLFVBQUEsR0FBRyxJQUFJLE9BQU0sR0FBRyxDQUFDLElBQUksRUFBRSxDQUFDLElBQUksRUFBckIsQ0FBcUIsQ0FBQzt5QkFFakMsS0FBSyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztnQkFDMUIsQ0FBQztnQkFJTyxpQ0FBVyxHQUFuQixVQUFvQixLQUFlO29CQUNqQyxPQUFPLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO29CQUNyQixNQUFNLENBQUMsdUJBQVUsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxDQUFDLEtBQUssSUFBSSxjQUFjLENBQUMsQ0FBQztnQkFDaEUsQ0FBQztnQkFwREg7b0JBQUMsaUJBQVUsRUFBRTs7K0JBQUE7Z0JBcURiLGtCQUFDO1lBQUQsQ0FuREEsQUFtREMsSUFBQTtZQW5ERCxxQ0FtREMsQ0FBQSIsImZpbGUiOiJhcHAvc2VydmljZXMvYWRpZS5zZXJ2aWNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQW5ndWxhciBpbXBvcnRzXG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5pbXBvcnQgeyBIdHRwLCBSZXNwb25zZSwgSGVhZGVycyB9IGZyb20gJ2FuZ3VsYXIyL2h0dHAnO1xuXG4vLyBSeGpzIGltcG9ydHNcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzL09ic2VydmFibGUnO1xuXG4vLyBQcm9qZWN0IGltcG9ydHNcbmltcG9ydCB7IEFkaWUgfSBmcm9tICcuLi9tb2RlbHMvYWRpZSc7XG5pbXBvcnQgeyBBdXRoMFNlcnZpY2UgfSBmcm9tICcuL2F1dGguc2VydmljZSc7XG5cbkBJbmplY3RhYmxlKClcblxuZXhwb3J0IGNsYXNzIEFkaWVTZXJ2aWNlIHtcblx0Y29uc3RydWN0b3IgKHByaXZhdGUgaHR0cDogSHR0cCwgcHJpdmF0ZSBhdXRoU2VydmljZTogQXV0aDBTZXJ2aWNlKSB7fVxuXG5cdHByaXZhdGUgX2FkaWVzVXJsID0gJ2h0dHBzOi8vYWRhLWNhcHN0b25lLWFwaS5oZXJva3VhcHAuY29tL2FkaWVzLyc7XG5cblx0Z2V0QWRpZXMoKSB7XG5cdFx0dmFyIGhlYWRlcjogSGVhZGVycyA9IG5ldyBIZWFkZXJzKCk7XG5cdFx0aWYgKHRoaXMuYXV0aFNlcnZpY2UubG9nZ2VkSW4oKSkge1xuICAgICAgdmFyIGJlYXJlclN0cmluZzogc3RyaW5nID0gXCJCZWFyZXIgXCIgKyBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnaWRfdG9rZW4nKTtcbiAgICAgIGhlYWRlci5hcHBlbmQoJ0F1dGhvcml6YXRpb24nLCBiZWFyZXJTdHJpbmcpO1xuXHRcdH1cblxuXHRcdHJldHVybiB0aGlzLmh0dHAuZ2V0KHRoaXMuX2FkaWVzVXJsLCB7IGhlYWRlcnM6IGhlYWRlciB9KVxuXHRcdFx0Lm1hcChyZXMgPT4gPEFkaWVbXT4gcmVzLmpzb24oKS5kYXRhKVxuXHRcdFx0LmRvKGRhdGEgPT4gY29uc29sZS5sb2coZGF0YSkpXG5cdFx0XHQuY2F0Y2godGhpcy5oYW5kbGVFcnJvcik7XG4gIH1cblxuICBnZXRBZGllKGlkOiBudW1iZXIpIHtcblx0XHR2YXIgaGVhZGVyOiBIZWFkZXJzID0gbmV3IEhlYWRlcnMoKTtcblx0XHR2YXIgYWRpZVVybDogc3RyaW5nID0gYCR7dGhpcy5fYWRpZXNVcmx9JHtpZH1gO1xuXHRcdGlmICh0aGlzLmF1dGhTZXJ2aWNlLmxvZ2dlZEluKCkpIHtcbiAgICAgIHZhciBiZWFyZXJTdHJpbmc6IHN0cmluZyA9IFwiQmVhcmVyIFwiICsgbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2lkX3Rva2VuJyk7XG4gICAgICBoZWFkZXIuYXBwZW5kKCdBdXRob3JpemF0aW9uJywgYmVhcmVyU3RyaW5nKTtcblx0XHR9XG5cdFx0cmV0dXJuIHRoaXMuaHR0cC5nZXQoYWRpZVVybCwgeyBoZWFkZXJzOiBoZWFkZXIgfSlcblx0XHRcdC5tYXAocmVzID0+IDxBZGllPnJlcy5qc29uKCkuZGF0YSlcblx0XHRcdC8vIC5kbyhkYXRhID0+IGNvbnNvbGUubG9nKGRhdGEpKVxuXHRcdFx0LmNhdGNoKHRoaXMuaGFuZGxlRXJyb3IpO1x0XG4gIH1cblxuICB1cGRhdGVBZGllKGFkaWU6IEFkaWUpIHtcblx0XHR2YXIgaGVhZGVyOiBIZWFkZXJzID0gbmV3IEhlYWRlcnMoKTtcblx0XHRoZWFkZXIuYXBwZW5kKCdDb250ZW50LVR5cGUnLCAnYXBwbGljYXRpb24vanNvbicpO1xuXHRcdHZhciBhZGllVXJsOiBzdHJpbmcgPSBgJHt0aGlzLl9hZGllc1VybH0ke2FkaWUuaWR9YDtcblx0XHRpZiAodGhpcy5hdXRoU2VydmljZS5sb2dnZWRJbigpKSB7XG4gICAgICB2YXIgYmVhcmVyU3RyaW5nOiBzdHJpbmcgPSBcIkJlYXJlciBcIiArIGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdpZF90b2tlbicpO1xuICAgICAgaGVhZGVyLmFwcGVuZCgnQXV0aG9yaXphdGlvbicsIGJlYXJlclN0cmluZyk7XG5cdFx0fVxuXHRcdHJldHVybiB0aGlzLmh0dHAucGF0Y2goYWRpZVVybCwgSlNPTi5zdHJpbmdpZnkoYWRpZSksIHsgaGVhZGVyczogaGVhZGVyIH0pXG5cdFx0XHQubWFwKHJlcyA9PiA8QWRpZT5yZXMuanNvbigpLmRhdGEpXG5cdFx0XHQvLyAuZG8oZGF0YSA9PiBjb25zb2xlLmxvZyhkYXRhKSlcblx0XHRcdC5jYXRjaCh0aGlzLmhhbmRsZUVycm9yKTtcdFxuICB9XG5cblxuXG4gIHByaXZhdGUgaGFuZGxlRXJyb3IoZXJyb3I6IFJlc3BvbnNlKSB7XG4gICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgcmV0dXJuIE9ic2VydmFibGUudGhyb3coZXJyb3IuanNvbigpLmVycm9yIHx8ICdTZXJ2ZXIgZXJyb3InKTtcbiAgfVxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
