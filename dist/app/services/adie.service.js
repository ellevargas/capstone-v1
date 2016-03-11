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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zZXJ2aWNlcy9hZGllLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFhQTtnQkFDQyxxQkFBcUIsSUFBVSxFQUFVLFdBQXlCO29CQUE3QyxTQUFJLEdBQUosSUFBSSxDQUFNO29CQUFVLGdCQUFXLEdBQVgsV0FBVyxDQUFjO29CQUUxRCxjQUFTLEdBQUcsK0NBQStDLENBQUMsQ0FBRSxpQkFBaUI7Z0JBRmxCLENBQUM7Z0JBSXRFLDhCQUFRLEdBQVI7b0JBQ0MsSUFBSSxNQUFNLEdBQVksSUFBSSxjQUFPLEVBQUUsQ0FBQztvQkFDcEMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDLENBQUM7d0JBQzlCLElBQUksWUFBWSxHQUFXLFNBQVMsR0FBRyxZQUFZLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxDQUFDO3dCQUN4RSxNQUFNLENBQUMsTUFBTSxDQUFDLGVBQWUsRUFBRSxZQUFZLENBQUMsQ0FBQztvQkFDakQsQ0FBQztvQkFFRCxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsQ0FBQzt5QkFDdkQsR0FBRyxDQUFDLFVBQUEsR0FBRyxJQUFJLE9BQVMsR0FBRyxDQUFDLElBQUksRUFBRSxDQUFDLElBQUksRUFBeEIsQ0FBd0IsQ0FBQzt5QkFFcEMsS0FBSyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztnQkFDMUIsQ0FBQztnQkFFRCw2QkFBTyxHQUFQLFVBQVEsRUFBVTtvQkFDbEIsSUFBSSxNQUFNLEdBQVksSUFBSSxjQUFPLEVBQUUsQ0FBQztvQkFDcEMsSUFBSSxPQUFPLEdBQVcsS0FBRyxJQUFJLENBQUMsU0FBUyxHQUFHLEVBQUksQ0FBQTtvQkFDOUMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDLENBQUM7d0JBQzlCLElBQUksWUFBWSxHQUFXLFNBQVMsR0FBRyxZQUFZLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxDQUFDO3dCQUN4RSxNQUFNLENBQUMsTUFBTSxDQUFDLGVBQWUsRUFBRSxZQUFZLENBQUMsQ0FBQztvQkFDakQsQ0FBQztvQkFDRCxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxDQUFDO3lCQUNoRCxHQUFHLENBQUMsVUFBQSxHQUFHLElBQUksT0FBTSxHQUFHLENBQUMsSUFBSSxFQUFFLENBQUMsSUFBSSxFQUFyQixDQUFxQixDQUFDO3lCQUVqQyxLQUFLLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO2dCQUMxQixDQUFDO2dCQUlPLGlDQUFXLEdBQW5CLFVBQW9CLEtBQWU7b0JBQ2pDLE9BQU8sQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7b0JBQ3JCLE1BQU0sQ0FBQyx1QkFBVSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLENBQUMsS0FBSyxJQUFJLGNBQWMsQ0FBQyxDQUFDO2dCQUNoRSxDQUFDO2dCQXRDSDtvQkFBQyxpQkFBVSxFQUFFOzsrQkFBQTtnQkF1Q2Isa0JBQUM7WUFBRCxDQXJDQSxBQXFDQyxJQUFBO1lBckNELHFDQXFDQyxDQUFBIiwiZmlsZSI6ImFwcC9zZXJ2aWNlcy9hZGllLnNlcnZpY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBBbmd1bGFyIGltcG9ydHNcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdhbmd1bGFyMi9jb3JlJztcbmltcG9ydCB7IEh0dHAsIFJlc3BvbnNlLCBIZWFkZXJzIH0gZnJvbSAnYW5ndWxhcjIvaHR0cCc7XG5cbi8vIFJ4anMgaW1wb3J0c1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMvT2JzZXJ2YWJsZSc7XG5cbi8vIFByb2plY3QgaW1wb3J0c1xuaW1wb3J0IHsgQWRpZSB9IGZyb20gJy4uL21vZGVscy9hZGllJztcbmltcG9ydCB7IEF1dGgwU2VydmljZSB9IGZyb20gJy4vYXV0aC5zZXJ2aWNlJztcblxuQEluamVjdGFibGUoKVxuXG5leHBvcnQgY2xhc3MgQWRpZVNlcnZpY2Uge1xuXHRjb25zdHJ1Y3RvciAocHJpdmF0ZSBodHRwOiBIdHRwLCBwcml2YXRlIGF1dGhTZXJ2aWNlOiBBdXRoMFNlcnZpY2UpIHt9XG5cblx0cHJpdmF0ZSBfYWRpZXNVcmwgPSAnaHR0cHM6Ly9hZGEtY2Fwc3RvbmUtYXBpLmhlcm9rdWFwcC5jb20vYWRpZXMvJzsgIC8vIFVSTCB0byB3ZWIgYXBpXG5cblx0Z2V0QWRpZXMoKSB7XG5cdFx0dmFyIGhlYWRlcjogSGVhZGVycyA9IG5ldyBIZWFkZXJzKCk7XG5cdFx0aWYgKHRoaXMuYXV0aFNlcnZpY2UubG9nZ2VkSW4oKSkge1xuICAgICAgdmFyIGJlYXJlclN0cmluZzogc3RyaW5nID0gXCJCZWFyZXIgXCIgKyBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnaWRfdG9rZW4nKTtcbiAgICAgIGhlYWRlci5hcHBlbmQoJ0F1dGhvcml6YXRpb24nLCBiZWFyZXJTdHJpbmcpO1xuXHRcdH1cblxuXHRcdHJldHVybiB0aGlzLmh0dHAuZ2V0KHRoaXMuX2FkaWVzVXJsLCB7IGhlYWRlcnM6IGhlYWRlciB9KVxuXHRcdFx0Lm1hcChyZXMgPT4gPEFkaWVbXT4gcmVzLmpzb24oKS5kYXRhKVxuXHRcdFx0Ly8gLmRvKGRhdGEgPT4gY29uc29sZS5sb2coZGF0YSkpXG5cdFx0XHQuY2F0Y2godGhpcy5oYW5kbGVFcnJvcik7XG4gIH1cblxuICBnZXRBZGllKGlkOiBudW1iZXIpIHtcblx0XHR2YXIgaGVhZGVyOiBIZWFkZXJzID0gbmV3IEhlYWRlcnMoKTtcblx0XHR2YXIgYWRpZVVybDogc3RyaW5nID0gYCR7dGhpcy5fYWRpZXNVcmx9JHtpZH1gXG5cdFx0aWYgKHRoaXMuYXV0aFNlcnZpY2UubG9nZ2VkSW4oKSkge1xuICAgICAgdmFyIGJlYXJlclN0cmluZzogc3RyaW5nID0gXCJCZWFyZXIgXCIgKyBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnaWRfdG9rZW4nKTtcbiAgICAgIGhlYWRlci5hcHBlbmQoJ0F1dGhvcml6YXRpb24nLCBiZWFyZXJTdHJpbmcpO1xuXHRcdH1cblx0XHRyZXR1cm4gdGhpcy5odHRwLmdldChhZGllVXJsLCB7IGhlYWRlcnM6IGhlYWRlciB9KVxuXHRcdFx0Lm1hcChyZXMgPT4gPEFkaWU+cmVzLmpzb24oKS5kYXRhKVxuXHRcdFx0Ly8gLmRvKGRhdGEgPT4gY29uc29sZS5sb2coZGF0YSkpXG5cdFx0XHQuY2F0Y2godGhpcy5oYW5kbGVFcnJvcik7XHRcbiAgfVxuXG5cblxuICBwcml2YXRlIGhhbmRsZUVycm9yKGVycm9yOiBSZXNwb25zZSkge1xuICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgIHJldHVybiBPYnNlcnZhYmxlLnRocm93KGVycm9yLmpzb24oKS5lcnJvciB8fCAnU2VydmVyIGVycm9yJyk7XG4gIH1cbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
