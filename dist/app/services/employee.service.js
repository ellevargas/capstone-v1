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
    var EmployeeService;
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
            EmployeeService = (function () {
                function EmployeeService(http) {
                    this.http = http;
                    this._employeesUrl = 'https://ada-capstone-api.herokuapp.com/employees/';
                }
                EmployeeService.prototype.getEmployees = function () {
                    var _this = this;
                    return this.http.get(this._employeesUrl)
                        .map(function (res) { return res.json().data; })
                        .do(function (data) { return console.log(data); })
                        .catch(function (err) { return _this.handleError(err); });
                };
                EmployeeService.prototype.handleError = function (error) {
                    // in a real world app, we may send the error to some remote logging infrastructure
                    // instead of just logging it to the console
                    console.error(error);
                    return Observable_1.Observable.throw(error.json().error || 'Server error');
                };
                EmployeeService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], EmployeeService);
                return EmployeeService;
            }());
            exports_1("EmployeeService", EmployeeService);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zZXJ2aWNlcy9lbXBsb3llZS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBVUE7Z0JBQ0MseUJBQW9CLElBQVU7b0JBQVYsU0FBSSxHQUFKLElBQUksQ0FBTTtvQkFFdEIsa0JBQWEsR0FBRyxtREFBbUQsQ0FBQztnQkFGM0MsQ0FBQztnQkFJbEMsc0NBQVksR0FBWjtvQkFBQSxpQkFLQztvQkFKQSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQzt5QkFDdEMsR0FBRyxDQUFDLFVBQUEsR0FBRyxJQUFJLE9BQWEsR0FBRyxDQUFDLElBQUksRUFBRSxDQUFDLElBQUksRUFBNUIsQ0FBNEIsQ0FBQzt5QkFDeEMsRUFBRSxDQUFDLFVBQUEsSUFBSSxJQUFJLE9BQUEsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBakIsQ0FBaUIsQ0FBQzt5QkFDN0IsS0FBSyxDQUFDLFVBQUEsR0FBRyxJQUFJLE9BQUEsS0FBSSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsRUFBckIsQ0FBcUIsQ0FBQyxDQUFDO2dCQUN2QyxDQUFDO2dCQUVPLHFDQUFXLEdBQW5CLFVBQW9CLEtBQWU7b0JBQ2hDLG1GQUFtRjtvQkFDbkYsNENBQTRDO29CQUM1QyxPQUFPLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO29CQUNyQixNQUFNLENBQUMsdUJBQVUsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxDQUFDLEtBQUssSUFBSSxjQUFjLENBQUMsQ0FBQztnQkFDaEUsQ0FBQztnQkFuQkg7b0JBQUMsaUJBQVUsRUFBRTs7bUNBQUE7Z0JBb0JiLHNCQUFDO1lBQUQsQ0FsQkEsQUFrQkMsSUFBQTtZQWxCRCw2Q0FrQkMsQ0FBQSIsImZpbGUiOiJhcHAvc2VydmljZXMvZW1wbG95ZWUuc2VydmljZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEFuZ3VsYXIgaW1wb3J0c1xuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuaW1wb3J0IHsgSHR0cCwgUmVzcG9uc2UgfSBmcm9tICdhbmd1bGFyMi9odHRwJztcbi8vIFJ4anMgaW1wb3J0c1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMvT2JzZXJ2YWJsZSc7XG4vLyBQcm9qZWN0IGltcG9ydHNcbmltcG9ydCB7IEVtcGxveWVlIH0gZnJvbSAnLi4vbW9kZWxzL2VtcGxveWVlJztcblxuQEluamVjdGFibGUoKVxuXG5leHBvcnQgY2xhc3MgRW1wbG95ZWVTZXJ2aWNlIHtcblx0Y29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwKSB7fVxuXG5cdHByaXZhdGUgX2VtcGxveWVlc1VybCA9ICdodHRwczovL2FkYS1jYXBzdG9uZS1hcGkuaGVyb2t1YXBwLmNvbS9lbXBsb3llZXMvJztcblxuXHRnZXRFbXBsb3llZXMoKSB7XG5cdFx0cmV0dXJuIHRoaXMuaHR0cC5nZXQodGhpcy5fZW1wbG95ZWVzVXJsKVxuXHRcdFx0Lm1hcChyZXMgPT4gPEVtcGxveWVlW10+IHJlcy5qc29uKCkuZGF0YSlcblx0XHRcdC5kbyhkYXRhID0+IGNvbnNvbGUubG9nKGRhdGEpKVxuXHRcdFx0LmNhdGNoKGVyciA9PiB0aGlzLmhhbmRsZUVycm9yKGVycikpO1xuXHR9XG5cblx0cHJpdmF0ZSBoYW5kbGVFcnJvcihlcnJvcjogUmVzcG9uc2UpIHtcbiAgICAvLyBpbiBhIHJlYWwgd29ybGQgYXBwLCB3ZSBtYXkgc2VuZCB0aGUgZXJyb3IgdG8gc29tZSByZW1vdGUgbG9nZ2luZyBpbmZyYXN0cnVjdHVyZVxuICAgIC8vIGluc3RlYWQgb2YganVzdCBsb2dnaW5nIGl0IHRvIHRoZSBjb25zb2xlXG4gICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgcmV0dXJuIE9ic2VydmFibGUudGhyb3coZXJyb3IuanNvbigpLmVycm9yIHx8ICdTZXJ2ZXIgZXJyb3InKTtcbiAgfVxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
