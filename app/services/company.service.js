System.register(['angular2/core', 'angular2/http', 'rxjs/Observable'], function(exports_1, context_1) {
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
    var core_1, http_1, Observable_1;
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
            }],
        execute: function() {
            CompanyService = (function () {
                function CompanyService(http) {
                    this.http = http;
                    this._companiesUrl = 'https://ada-capstone-api.herokuapp.com/companies/';
                }
                CompanyService.prototype.getCompanies = function () {
                    var _this = this;
                    return this.http.get(this._companiesUrl)
                        .map(function (res) { return res.json().data; })
                        .catch(function (err) { return _this.handleError(err); });
                };
                CompanyService.prototype.handleError = function (error) {
                    // in a real world app, we may send the error to some remote logging infrastructure
                    // instead of just logging it to the console
                    console.error(error);
                    return Observable_1.Observable.throw(error.json().error || 'Server error');
                };
                CompanyService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], CompanyService);
                return CompanyService;
            }());
            exports_1("CompanyService", CompanyService);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zZXJ2aWNlcy9jb21wYW55LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFVQTtnQkFDQyx3QkFBb0IsSUFBVTtvQkFBVixTQUFJLEdBQUosSUFBSSxDQUFNO29CQUV0QixrQkFBYSxHQUFHLG1EQUFtRCxDQUFDO2dCQUYzQyxDQUFDO2dCQUlsQyxxQ0FBWSxHQUFaO29CQUFBLGlCQUtDO29CQUpBLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDO3lCQUN0QyxHQUFHLENBQUMsVUFBQSxHQUFHLElBQUksT0FBWSxHQUFHLENBQUMsSUFBSSxFQUFFLENBQUMsSUFBSSxFQUEzQixDQUEyQixDQUFDO3lCQUV2QyxLQUFLLENBQUMsVUFBQSxHQUFHLElBQUksT0FBQSxLQUFJLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxFQUFyQixDQUFxQixDQUFDLENBQUM7Z0JBQ3ZDLENBQUM7Z0JBRU8sb0NBQVcsR0FBbkIsVUFBb0IsS0FBZTtvQkFDaEMsbUZBQW1GO29CQUNuRiw0Q0FBNEM7b0JBQzVDLE9BQU8sQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7b0JBQ3JCLE1BQU0sQ0FBQyx1QkFBVSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLENBQUMsS0FBSyxJQUFJLGNBQWMsQ0FBQyxDQUFDO2dCQUNoRSxDQUFDO2dCQW5CSDtvQkFBQyxpQkFBVSxFQUFFOztrQ0FBQTtnQkFvQmIscUJBQUM7WUFBRCxDQWxCQSxBQWtCQyxJQUFBO1lBbEJELDJDQWtCQyxDQUFBIiwiZmlsZSI6ImFwcC9zZXJ2aWNlcy9jb21wYW55LnNlcnZpY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBBbmd1bGFyIGltcG9ydHNcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdhbmd1bGFyMi9jb3JlJztcbmltcG9ydCB7IEh0dHAsIFJlc3BvbnNlIH0gZnJvbSAnYW5ndWxhcjIvaHR0cCc7XG4vLyBSeGpzIGltcG9ydHNcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzL09ic2VydmFibGUnO1xuLy8gUHJvamVjdCBpbXBvcnRzXG5pbXBvcnQgeyBDb21wYW55IH0gZnJvbSAnLi4vbW9kZWxzL2NvbXBhbnknO1xuXG5ASW5qZWN0YWJsZSgpXG5cbmV4cG9ydCBjbGFzcyBDb21wYW55U2VydmljZSB7XG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cCkge31cblxuXHRwcml2YXRlIF9jb21wYW5pZXNVcmwgPSAnaHR0cHM6Ly9hZGEtY2Fwc3RvbmUtYXBpLmhlcm9rdWFwcC5jb20vY29tcGFuaWVzLyc7XG5cblx0Z2V0Q29tcGFuaWVzKCkgeyBcblx0XHRyZXR1cm4gdGhpcy5odHRwLmdldCh0aGlzLl9jb21wYW5pZXNVcmwpXG5cdFx0XHQubWFwKHJlcyA9PiA8Q29tcGFueVtdPiByZXMuanNvbigpLmRhdGEpXG5cdFx0XHQvLyAuZG8oZGF0YSA9PiBjb25zb2xlLmxvZyhkYXRhKSlcblx0XHRcdC5jYXRjaChlcnIgPT4gdGhpcy5oYW5kbGVFcnJvcihlcnIpKTtcblx0fVxuXG5cdHByaXZhdGUgaGFuZGxlRXJyb3IoZXJyb3I6IFJlc3BvbnNlKSB7XG4gICAgLy8gaW4gYSByZWFsIHdvcmxkIGFwcCwgd2UgbWF5IHNlbmQgdGhlIGVycm9yIHRvIHNvbWUgcmVtb3RlIGxvZ2dpbmcgaW5mcmFzdHJ1Y3R1cmVcbiAgICAvLyBpbnN0ZWFkIG9mIGp1c3QgbG9nZ2luZyBpdCB0byB0aGUgY29uc29sZVxuICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgIHJldHVybiBPYnNlcnZhYmxlLnRocm93KGVycm9yLmpzb24oKS5lcnJvciB8fCAnU2VydmVyIGVycm9yJyk7XG4gIH1cbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
