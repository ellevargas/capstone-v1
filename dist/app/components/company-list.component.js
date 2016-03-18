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
                    this.loading = true;
                }
                CompanyListComponent.prototype.ngOnInit = function () {
                    this.getCompanies();
                };
                CompanyListComponent.prototype.getCompanies = function () {
                    var _this = this;
                    this._companyService.getCompanies()
                        .subscribe(function (companies) {
                        _this.loading = false;
                        _this.companies = companies;
                    }, function (error) { return _this.errorMessage = error; });
                };
                CompanyListComponent.prototype.gotoDetail = function (company) {
                    this._router.navigate(['CompanyDetail', { id: company.id }]);
                };
                CompanyListComponent = __decorate([
                    core_1.Component({
                        selector: "company-list",
                        templateUrl: 'app/components/templates/company-list.component.html',
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb21wb25lbnRzL2NvbXBhbnktbGlzdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFnQkE7Z0JBTUMsOEJBQW9CLGVBQStCLEVBQVUsT0FBZTtvQkFBeEQsb0JBQWUsR0FBZixlQUFlLENBQWdCO29CQUFVLFlBQU8sR0FBUCxPQUFPLENBQVE7b0JBSjVFLFlBQU8sR0FBWSxJQUFJLENBQUM7Z0JBSXVELENBQUM7Z0JBRWhGLHVDQUFRLEdBQVI7b0JBQ0MsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO2dCQUNyQixDQUFDO2dCQUVELDJDQUFZLEdBQVo7b0JBQUEsaUJBUUM7b0JBUEEsSUFBSSxDQUFDLGVBQWUsQ0FBQyxZQUFZLEVBQUU7eUJBQ2pDLFNBQVMsQ0FDVCxVQUFBLFNBQVM7d0JBQ1IsS0FBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7d0JBQ3JCLEtBQUksQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDO29CQUM1QixDQUFDLEVBQ0QsVUFBQSxLQUFLLElBQUksT0FBQSxLQUFJLENBQUMsWUFBWSxHQUFRLEtBQUssRUFBOUIsQ0FBOEIsQ0FBQyxDQUFBO2dCQUMzQyxDQUFDO2dCQUVELHlDQUFVLEdBQVYsVUFBVyxPQUFnQjtvQkFDMUIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxlQUFlLEVBQUUsRUFBRSxFQUFFLEVBQUUsT0FBTyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQztnQkFDOUQsQ0FBQztnQkE5QkY7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDVixRQUFRLEVBQUUsY0FBYzt3QkFDeEIsV0FBVyxFQUFFLHNEQUFzRDt3QkFDbEUsU0FBUyxFQUFFLENBQUUscUJBQWMsRUFBRSxnQ0FBYyxDQUFFO3FCQUM5QyxDQUFDOzt3Q0FBQTtnQkEyQkYsMkJBQUM7WUFBRCxDQXpCQSxBQXlCQyxJQUFBO1lBekJELHVEQXlCQyxDQUFBIiwiZmlsZSI6ImFwcC9jb21wb25lbnRzL2NvbXBhbnktbGlzdC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBBbmd1bGFyIGltcG9ydHNcbmltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5pbXBvcnQgeyBIVFRQX1BST1ZJREVSUyB9ICAgIGZyb20gJ2FuZ3VsYXIyL2h0dHAnO1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnYW5ndWxhcjIvcm91dGVyJztcbi8vIFJ4anMgaW1wb3J0c1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMvT2JzZXJ2YWJsZSc7XG4vLyBQcm9qZWN0IGltcG9ydHNcbmltcG9ydCB7IENvbXBhbnkgfSBmcm9tICcuLi9tb2RlbHMvY29tcGFueSc7XG5pbXBvcnQgeyBDb21wYW55U2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2VzL2NvbXBhbnkuc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogXCJjb21wYW55LWxpc3RcIixcblx0dGVtcGxhdGVVcmw6ICdhcHAvY29tcG9uZW50cy90ZW1wbGF0ZXMvY29tcGFueS1saXN0LmNvbXBvbmVudC5odG1sJyxcbiAgcHJvdmlkZXJzOiBbIEhUVFBfUFJPVklERVJTLCBDb21wYW55U2VydmljZSBdLFxufSlcblxuZXhwb3J0IGNsYXNzIENvbXBhbnlMaXN0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblx0ZXJyb3JNZXNzYWdlOiBzdHJpbmc7XG5cdGxvYWRpbmc6IGJvb2xlYW4gPSB0cnVlO1xuXHRwdWJsaWMgY29tcGFuaWVzOiBDb21wYW55W107XG5cdHB1YmxpYyBzZWxlY3RlZENvbXBhbnk6IENvbXBhbnk7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSBfY29tcGFueVNlcnZpY2U6IENvbXBhbnlTZXJ2aWNlLCBwcml2YXRlIF9yb3V0ZXI6IFJvdXRlcikge31cblxuXHRuZ09uSW5pdCgpIHtcblx0XHR0aGlzLmdldENvbXBhbmllcygpO1xuXHR9XG5cblx0Z2V0Q29tcGFuaWVzKCkge1xuXHRcdHRoaXMuX2NvbXBhbnlTZXJ2aWNlLmdldENvbXBhbmllcygpXG5cdFx0XHQuc3Vic2NyaWJlKFxuXHRcdFx0XHRjb21wYW5pZXMgPT4geyBcblx0XHRcdFx0XHR0aGlzLmxvYWRpbmcgPSBmYWxzZTtcblx0XHRcdFx0XHR0aGlzLmNvbXBhbmllcyA9IGNvbXBhbmllczsgXG5cdFx0XHRcdH0sXG5cdFx0XHRcdGVycm9yID0+IHRoaXMuZXJyb3JNZXNzYWdlID0gPGFueT5lcnJvcilcblx0fVxuXG5cdGdvdG9EZXRhaWwoY29tcGFueTogQ29tcGFueSkge1xuXHRcdHRoaXMuX3JvdXRlci5uYXZpZ2F0ZShbJ0NvbXBhbnlEZXRhaWwnLCB7IGlkOiBjb21wYW55LmlkIH1dKTtcblx0fVxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
