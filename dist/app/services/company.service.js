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
    var CompanyService;
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
            CompanyService = (function () {
                function CompanyService(http, authService) {
                    this.http = http;
                    this.authService = authService;
                    this._companiesUrl = 'https://ada-capstone-api.herokuapp.com/companies/';
                }
                CompanyService.prototype.getCompanies = function () {
                    var _this = this;
                    return this.http.get(this._companiesUrl)
                        .map(function (res) { return res.json().data; })
                        .catch(function (err) { return _this.handleError(err); });
                };
                CompanyService.prototype.getCompany = function (id) {
                    var header = new http_1.Headers();
                    var companiesUrl = "https://ada-capstone-api.herokuapp.com/companies_complete/" + id;
                    if (this.authService.loggedIn()) {
                        var bearerString = "Bearer " + localStorage.getItem('id_token');
                        header.append('Authorization', bearerString);
                    }
                    return this.http.get(companiesUrl, { headers: header })
                        .map(function (res) { return res.json().data; })
                        .catch(this.handleError);
                };
                CompanyService.prototype.handleError = function (error) {
                    console.error(error);
                    return Observable_1.Observable.throw(error.json().error || 'Server error');
                };
                CompanyService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http, auth_service_1.Auth0Service])
                ], CompanyService);
                return CompanyService;
            }());
            exports_1("CompanyService", CompanyService);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zZXJ2aWNlcy9jb21wYW55LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFXQTtnQkFDQyx3QkFDUyxJQUFVLEVBQ1YsV0FBeUI7b0JBRHpCLFNBQUksR0FBSixJQUFJLENBQU07b0JBQ1YsZ0JBQVcsR0FBWCxXQUFXLENBQWM7b0JBRTFCLGtCQUFhLEdBQUcsbURBQW1ELENBQUM7Z0JBRnZDLENBQUM7Z0JBSXRDLHFDQUFZLEdBQVo7b0JBQUEsaUJBS0M7b0JBSkEsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUM7eUJBQ3RDLEdBQUcsQ0FBQyxVQUFBLEdBQUcsSUFBSSxPQUFZLEdBQUcsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxJQUFJLEVBQTNCLENBQTJCLENBQUM7eUJBRXZDLEtBQUssQ0FBQyxVQUFBLEdBQUcsSUFBSSxPQUFBLEtBQUksQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLEVBQXJCLENBQXFCLENBQUMsQ0FBQztnQkFDdkMsQ0FBQztnQkFFRCxtQ0FBVSxHQUFWLFVBQVcsRUFBVTtvQkFDcEIsSUFBSSxNQUFNLEdBQVksSUFBSSxjQUFPLEVBQUUsQ0FBQztvQkFDcEMsSUFBSSxZQUFZLEdBQVcsK0RBQTZELEVBQUksQ0FBQTtvQkFDNUYsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDLENBQUM7d0JBQzlCLElBQUksWUFBWSxHQUFXLFNBQVMsR0FBRyxZQUFZLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxDQUFDO3dCQUN4RSxNQUFNLENBQUMsTUFBTSxDQUFDLGVBQWUsRUFBRSxZQUFZLENBQUMsQ0FBQztvQkFDakQsQ0FBQztvQkFDRCxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsWUFBWSxFQUFFLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxDQUFDO3lCQUNyRCxHQUFHLENBQUMsVUFBQSxHQUFHLElBQUksT0FBQSxHQUFHLENBQUMsSUFBSSxFQUFFLENBQUMsSUFBSSxFQUFmLENBQWUsQ0FBQzt5QkFFM0IsS0FBSyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztnQkFDM0IsQ0FBQztnQkFFTyxvQ0FBVyxHQUFuQixVQUFvQixLQUFlO29CQUNoQyxPQUFPLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO29CQUNyQixNQUFNLENBQUMsdUJBQVUsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxDQUFDLEtBQUssSUFBSSxjQUFjLENBQUMsQ0FBQztnQkFDaEUsQ0FBQztnQkFoQ0g7b0JBQUMsaUJBQVUsRUFBRTs7a0NBQUE7Z0JBaUNiLHFCQUFDO1lBQUQsQ0EvQkEsQUErQkMsSUFBQTtZQS9CRCwyQ0ErQkMsQ0FBQSIsImZpbGUiOiJhcHAvc2VydmljZXMvY29tcGFueS5zZXJ2aWNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQW5ndWxhciBpbXBvcnRzXG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5pbXBvcnQgeyBIdHRwLCBSZXNwb25zZSwgSGVhZGVycyB9IGZyb20gJ2FuZ3VsYXIyL2h0dHAnO1xuLy8gUnhqcyBpbXBvcnRzXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcy9PYnNlcnZhYmxlJztcbi8vIFByb2plY3QgaW1wb3J0c1xuaW1wb3J0IHsgQ29tcGFueSB9IGZyb20gJy4uL21vZGVscy9jb21wYW55JztcbmltcG9ydCB7IEF1dGgwU2VydmljZSB9IGZyb20gJy4vYXV0aC5zZXJ2aWNlJztcblxuQEluamVjdGFibGUoKVxuXG5leHBvcnQgY2xhc3MgQ29tcGFueVNlcnZpY2Uge1xuXHRjb25zdHJ1Y3Rvcihcblx0XHRwcml2YXRlIGh0dHA6IEh0dHAsXG5cdFx0cHJpdmF0ZSBhdXRoU2VydmljZTogQXV0aDBTZXJ2aWNlKSB7fVxuXG5cdHByaXZhdGUgX2NvbXBhbmllc1VybCA9ICdodHRwczovL2FkYS1jYXBzdG9uZS1hcGkuaGVyb2t1YXBwLmNvbS9jb21wYW5pZXMvJztcblxuXHRnZXRDb21wYW5pZXMoKSB7IFxuXHRcdHJldHVybiB0aGlzLmh0dHAuZ2V0KHRoaXMuX2NvbXBhbmllc1VybClcblx0XHRcdC5tYXAocmVzID0+IDxDb21wYW55W10+IHJlcy5qc29uKCkuZGF0YSlcblx0XHRcdC8vIC5kbyhkYXRhID0+IGNvbnNvbGUubG9nKGRhdGEpKVxuXHRcdFx0LmNhdGNoKGVyciA9PiB0aGlzLmhhbmRsZUVycm9yKGVycikpO1xuXHR9XG5cblx0Z2V0Q29tcGFueShpZDogbnVtYmVyKSB7XG5cdFx0dmFyIGhlYWRlcjogSGVhZGVycyA9IG5ldyBIZWFkZXJzKCk7XG5cdFx0dmFyIGNvbXBhbmllc1VybDogc3RyaW5nID0gYGh0dHBzOi8vYWRhLWNhcHN0b25lLWFwaS5oZXJva3VhcHAuY29tL2NvbXBhbmllc19jb21wbGV0ZS8ke2lkfWBcblx0XHRpZiAodGhpcy5hdXRoU2VydmljZS5sb2dnZWRJbigpKSB7XG4gICAgICB2YXIgYmVhcmVyU3RyaW5nOiBzdHJpbmcgPSBcIkJlYXJlciBcIiArIGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdpZF90b2tlbicpO1xuICAgICAgaGVhZGVyLmFwcGVuZCgnQXV0aG9yaXphdGlvbicsIGJlYXJlclN0cmluZyk7XG5cdFx0fVxuXHRcdHJldHVybiB0aGlzLmh0dHAuZ2V0KGNvbXBhbmllc1VybCwgeyBoZWFkZXJzOiBoZWFkZXIgfSlcblx0XHRcdC5tYXAocmVzID0+IHJlcy5qc29uKCkuZGF0YSlcblx0XHRcdC8vIC5kbyhkYXRhID0+IGNvbnNvbGUubG9nKGRhdGEpKVxuXHRcdFx0LmNhdGNoKHRoaXMuaGFuZGxlRXJyb3IpO1x0XG5cdH1cblxuXHRwcml2YXRlIGhhbmRsZUVycm9yKGVycm9yOiBSZXNwb25zZSkge1xuICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgIHJldHVybiBPYnNlcnZhYmxlLnRocm93KGVycm9yLmpzb24oKS5lcnJvciB8fCAnU2VydmVyIGVycm9yJyk7XG4gIH1cbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
