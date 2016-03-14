System.register(['angular2/core', 'angular2/http', 'angular2/router', '../services/company.service'], function(exports_1, context_1) {
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
    var core_1, http_1, router_1, company_service_1;
    var CompanyListComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (company_service_1_1) {
                company_service_1 = company_service_1_1;
            }],
        execute: function() {
            CompanyListComponent = (function () {
                function CompanyListComponent(_companyService, _router) {
                    this._companyService = _companyService;
                    this._router = _router;
                }
                CompanyListComponent.prototype.ngOnInit = function () {
                    this.getCompanies();
                };
                CompanyListComponent.prototype.getCompanies = function () {
                    var _this = this;
                    this._companyService.getCompanies()
                        .subscribe(function (companies) { return _this.companies = companies; }, function (error) { return _this.errorMessage = error; });
                };
                CompanyListComponent.prototype.gotoDetail = function (company) {
                    this._router.navigate(['CompanyDetail', { id: company.id }]);
                };
                CompanyListComponent = __decorate([
                    core_1.Component({
                        selector: "company-list",
                        template: "\n\t<ul>\n\t\t<li *ngFor=\"#company of companies\" (click)=\"gotoDetail(company)\">\n\t\t\tName: {{ company.name }} | Website: {{ company.website }}\n\t\t</li>\n\t</ul>\n\t<div class=\"error\" *ngIf=\"errorMessage\">{{errorMessage}}</div>\n  ",
                        providers: [http_1.HTTP_PROVIDERS, company_service_1.CompanyService],
                    }), 
                    __metadata('design:paramtypes', [company_service_1.CompanyService, router_1.Router])
                ], CompanyListComponent);
                return CompanyListComponent;
            }());
            exports_1("CompanyListComponent", CompanyListComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb21wb25lbnRzL2NvbXBhbnktbGlzdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUF1QkE7Z0JBS0MsOEJBQW9CLGVBQStCLEVBQVUsT0FBZTtvQkFBeEQsb0JBQWUsR0FBZixlQUFlLENBQWdCO29CQUFVLFlBQU8sR0FBUCxPQUFPLENBQVE7Z0JBQUcsQ0FBQztnQkFFaEYsdUNBQVEsR0FBUjtvQkFDQyxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7Z0JBQ3JCLENBQUM7Z0JBRUQsMkNBQVksR0FBWjtvQkFBQSxpQkFLQztvQkFKQSxJQUFJLENBQUMsZUFBZSxDQUFDLFlBQVksRUFBRTt5QkFDakMsU0FBUyxDQUNULFVBQUEsU0FBUyxJQUFJLE9BQUEsS0FBSSxDQUFDLFNBQVMsR0FBRyxTQUFTLEVBQTFCLENBQTBCLEVBQ3ZDLFVBQUEsS0FBSyxJQUFJLE9BQUEsS0FBSSxDQUFDLFlBQVksR0FBUSxLQUFLLEVBQTlCLENBQThCLENBQUMsQ0FBQTtnQkFDM0MsQ0FBQztnQkFFRCx5Q0FBVSxHQUFWLFVBQVcsT0FBZ0I7b0JBQzFCLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsZUFBZSxFQUFFLEVBQUUsRUFBRSxFQUFFLE9BQU8sQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUM7Z0JBQzlELENBQUM7Z0JBakNGO29CQUFDLGdCQUFTLENBQUM7d0JBQ1YsUUFBUSxFQUFFLGNBQWM7d0JBQ3hCLFFBQVEsRUFBRSxvUEFPUjt3QkFDRCxTQUFTLEVBQUUsQ0FBRSxxQkFBYyxFQUFFLGdDQUFjLENBQUU7cUJBQzlDLENBQUM7O3dDQUFBO2dCQXVCRiwyQkFBQztZQUFELENBckJBLEFBcUJDLElBQUE7WUFyQkQsdURBcUJDLENBQUEiLCJmaWxlIjoiYXBwL2NvbXBvbmVudHMvY29tcGFueS1saXN0LmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEFuZ3VsYXIgaW1wb3J0c1xuaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdhbmd1bGFyMi9jb3JlJztcbmltcG9ydCB7IEhUVFBfUFJPVklERVJTIH0gICAgZnJvbSAnYW5ndWxhcjIvaHR0cCc7XG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdhbmd1bGFyMi9yb3V0ZXInO1xuLy8gUnhqcyBpbXBvcnRzXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcy9PYnNlcnZhYmxlJztcbi8vIFByb2plY3QgaW1wb3J0c1xuaW1wb3J0IHsgQ29tcGFueSB9IGZyb20gJy4uL21vZGVscy9jb21wYW55JztcbmltcG9ydCB7IENvbXBhbnlTZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZXMvY29tcGFueS5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiBcImNvbXBhbnktbGlzdFwiLFxuXHR0ZW1wbGF0ZTogYFxuXHQ8dWw+XG5cdFx0PGxpICpuZ0Zvcj1cIiNjb21wYW55IG9mIGNvbXBhbmllc1wiIChjbGljayk9XCJnb3RvRGV0YWlsKGNvbXBhbnkpXCI+XG5cdFx0XHROYW1lOiB7eyBjb21wYW55Lm5hbWUgfX0gfCBXZWJzaXRlOiB7eyBjb21wYW55LndlYnNpdGUgfX1cblx0XHQ8L2xpPlxuXHQ8L3VsPlxuXHQ8ZGl2IGNsYXNzPVwiZXJyb3JcIiAqbmdJZj1cImVycm9yTWVzc2FnZVwiPnt7ZXJyb3JNZXNzYWdlfX08L2Rpdj5cbiAgYCxcbiAgcHJvdmlkZXJzOiBbIEhUVFBfUFJPVklERVJTLCBDb21wYW55U2VydmljZSBdLFxufSlcblxuZXhwb3J0IGNsYXNzIENvbXBhbnlMaXN0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblx0ZXJyb3JNZXNzYWdlOiBzdHJpbmc7XG5cdHB1YmxpYyBjb21wYW5pZXM6IENvbXBhbnlbXTtcblx0cHVibGljIHNlbGVjdGVkQ29tcGFueTogQ29tcGFueTtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIF9jb21wYW55U2VydmljZTogQ29tcGFueVNlcnZpY2UsIHByaXZhdGUgX3JvdXRlcjogUm91dGVyKSB7fVxuXG5cdG5nT25Jbml0KCkge1xuXHRcdHRoaXMuZ2V0Q29tcGFuaWVzKCk7XG5cdH1cblxuXHRnZXRDb21wYW5pZXMoKSB7XG5cdFx0dGhpcy5fY29tcGFueVNlcnZpY2UuZ2V0Q29tcGFuaWVzKClcblx0XHRcdC5zdWJzY3JpYmUoXG5cdFx0XHRcdGNvbXBhbmllcyA9PiB0aGlzLmNvbXBhbmllcyA9IGNvbXBhbmllcyxcblx0XHRcdFx0ZXJyb3IgPT4gdGhpcy5lcnJvck1lc3NhZ2UgPSA8YW55PmVycm9yKVxuXHR9XG5cblx0Z290b0RldGFpbChjb21wYW55OiBDb21wYW55KSB7XG5cdFx0dGhpcy5fcm91dGVyLm5hdmlnYXRlKFsnQ29tcGFueURldGFpbCcsIHsgaWQ6IGNvbXBhbnkuaWQgfV0pO1xuXHR9XG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
