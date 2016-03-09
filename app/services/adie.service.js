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
            }],
        execute: function() {
            AdieService = (function () {
                function AdieService(http) {
                    this.http = http;
                    this._adiesUrl = 'https://ada-capstone-api.herokuapp.com/adies/'; // URL to web api
                }
                AdieService.prototype.getAdies = function () {
                    return this.http.get(this._adiesUrl)
                        .map(function (res) { return res.json().data; })
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
                    __metadata('design:paramtypes', [http_1.Http])
                ], AdieService);
                return AdieService;
            }());
            exports_1("AdieService", AdieService);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zZXJ2aWNlcy9hZGllLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFZQTtnQkFDQyxxQkFBcUIsSUFBVTtvQkFBVixTQUFJLEdBQUosSUFBSSxDQUFNO29CQUV2QixjQUFTLEdBQUcsK0NBQStDLENBQUMsQ0FBRSxpQkFBaUI7Z0JBRnJELENBQUM7Z0JBSW5DLDhCQUFRLEdBQVI7b0JBQ0MsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUM7eUJBQ2xDLEdBQUcsQ0FBQyxVQUFBLEdBQUcsSUFBSSxPQUFTLEdBQUcsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxJQUFJLEVBQXhCLENBQXdCLENBQUM7eUJBRXBDLEtBQUssQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7Z0JBQzFCLENBQUM7Z0JBQ08saUNBQVcsR0FBbkIsVUFBb0IsS0FBZTtvQkFDakMsbUZBQW1GO29CQUNuRiw0Q0FBNEM7b0JBQzVDLE9BQU8sQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7b0JBQ3JCLE1BQU0sQ0FBQyx1QkFBVSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLENBQUMsS0FBSyxJQUFJLGNBQWMsQ0FBQyxDQUFDO2dCQUNoRSxDQUFDO2dCQWxCSDtvQkFBQyxpQkFBVSxFQUFFOzsrQkFBQTtnQkFtQmIsa0JBQUM7WUFBRCxDQWpCQSxBQWlCQyxJQUFBO1lBakJELHFDQWlCQyxDQUFBIiwiZmlsZSI6ImFwcC9zZXJ2aWNlcy9hZGllLnNlcnZpY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBBbmd1bGFyIGltcG9ydHNcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdhbmd1bGFyMi9jb3JlJztcbmltcG9ydCB7IEh0dHAsIFJlc3BvbnNlIH0gZnJvbSAnYW5ndWxhcjIvaHR0cCc7XG5cbi8vIFJ4anMgaW1wb3J0c1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMvT2JzZXJ2YWJsZSc7XG5cbi8vIFByb2plY3QgaW1wb3J0c1xuaW1wb3J0IHsgQWRpZSB9IGZyb20gJy4uL21vZGVscy9hZGllJztcblxuQEluamVjdGFibGUoKVxuXG5leHBvcnQgY2xhc3MgQWRpZVNlcnZpY2Uge1xuXHRjb25zdHJ1Y3RvciAocHJpdmF0ZSBodHRwOiBIdHRwKSB7fVxuXG5cdHByaXZhdGUgX2FkaWVzVXJsID0gJ2h0dHBzOi8vYWRhLWNhcHN0b25lLWFwaS5oZXJva3VhcHAuY29tL2FkaWVzLyc7ICAvLyBVUkwgdG8gd2ViIGFwaVxuXG5cdGdldEFkaWVzKCkge1xuXHRcdHJldHVybiB0aGlzLmh0dHAuZ2V0KHRoaXMuX2FkaWVzVXJsKVxuXHRcdFx0Lm1hcChyZXMgPT4gPEFkaWVbXT4gcmVzLmpzb24oKS5kYXRhKVxuXHRcdFx0Ly8gLmRvKGRhdGEgPT4gY29uc29sZS5sb2coZGF0YSkpXG5cdFx0XHQuY2F0Y2godGhpcy5oYW5kbGVFcnJvcik7XG4gIH1cbiAgcHJpdmF0ZSBoYW5kbGVFcnJvcihlcnJvcjogUmVzcG9uc2UpIHtcbiAgICAvLyBpbiBhIHJlYWwgd29ybGQgYXBwLCB3ZSBtYXkgc2VuZCB0aGUgZXJyb3IgdG8gc29tZSByZW1vdGUgbG9nZ2luZyBpbmZyYXN0cnVjdHVyZVxuICAgIC8vIGluc3RlYWQgb2YganVzdCBsb2dnaW5nIGl0IHRvIHRoZSBjb25zb2xlXG4gICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgcmV0dXJuIE9ic2VydmFibGUudGhyb3coZXJyb3IuanNvbigpLmVycm9yIHx8ICdTZXJ2ZXIgZXJyb3InKTtcbiAgfVxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
