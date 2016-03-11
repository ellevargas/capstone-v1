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
    var CompanyDetailComponent;
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
            CompanyDetailComponent = (function () {
                function CompanyDetailComponent(_companyService, _routeParams) {
                    this._companyService = _companyService;
                    this._routeParams = _routeParams;
                }
                CompanyDetailComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    var id = +this._routeParams.get('id');
                    this._companyService.getCompany(id)
                        .subscribe(function (company) {
                        _this.company = company;
                    }, function (error) { return _this.errorMessage = error; });
                };
                CompanyDetailComponent = __decorate([
                    core_1.Component({
                        selector: 'company-detail',
                        template: "\n\t\t<div *ngIf=\"company\">\n\t\t\t<h2>{{company.name}} details</h2>\n\t    <div><label>id: </label>{{company.id}}</div>\n\t  </div>\n    <div class=\"error\" *ngIf=\"errorMessage\">{{errorMessage}}</div>\n\t",
                        inputs: ['company'],
                        providers: [http_1.HTTP_PROVIDERS, company_service_1.CompanyService]
                    }), 
                    __metadata('design:paramtypes', [company_service_1.CompanyService, router_1.RouteParams])
                ], CompanyDetailComponent);
                return CompanyDetailComponent;
            }());
            exports_1("CompanyDetailComponent", CompanyDetailComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb21wb25lbnRzL2NvbXBhbnktZGV0YWlsLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQXFCQTtnQkFJQyxnQ0FDUyxlQUErQixFQUMvQixZQUF5QjtvQkFEekIsb0JBQWUsR0FBZixlQUFlLENBQWdCO29CQUMvQixpQkFBWSxHQUFaLFlBQVksQ0FBYTtnQkFBSSxDQUFDO2dCQUV2Qyx5Q0FBUSxHQUFSO29CQUFBLGlCQVFFO29CQVBDLElBQUksRUFBRSxHQUFHLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7b0JBQ3RDLElBQUksQ0FBQyxlQUFlLENBQUMsVUFBVSxDQUFDLEVBQUUsQ0FBQzt5QkFDaEMsU0FBUyxDQUNiLFVBQUEsT0FBTzt3QkFDTixLQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztvQkFDeEIsQ0FBQyxFQUNELFVBQUEsS0FBSyxJQUFJLE9BQUEsS0FBSSxDQUFDLFlBQVksR0FBUSxLQUFLLEVBQTlCLENBQThCLENBQUMsQ0FBQztnQkFDMUMsQ0FBQztnQkE3Qkg7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDVixRQUFRLEVBQUUsZ0JBQWdCO3dCQUMxQixRQUFRLEVBQUUsb05BTVQ7d0JBQ0QsTUFBTSxFQUFFLENBQUMsU0FBUyxDQUFDO3dCQUNsQixTQUFTLEVBQUUsQ0FBQyxxQkFBYyxFQUFFLGdDQUFjLENBQUM7cUJBQzVDLENBQUM7OzBDQUFBO2dCQW1CRiw2QkFBQztZQUFELENBakJBLEFBaUJDLElBQUE7WUFqQkQsMkRBaUJDLENBQUEiLCJmaWxlIjoiYXBwL2NvbXBvbmVudHMvY29tcGFueS1kZXRhaWwuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdhbmd1bGFyMi9jb3JlJztcbmltcG9ydCB7IEhUVFBfUFJPVklERVJTIH0gICAgZnJvbSAnYW5ndWxhcjIvaHR0cCc7XG5pbXBvcnQgeyBSb3V0ZVBhcmFtcyB9IGZyb20gJ2FuZ3VsYXIyL3JvdXRlcic7XG5cbi8vIFByb2plY3QgaW1wb3J0c1xuaW1wb3J0IHsgQ29tcGFueSB9IGZyb20gJy4uL21vZGVscy9jb21wYW55JztcbmltcG9ydCB7IENvbXBhbnlTZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZXMvY29tcGFueS5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnY29tcGFueS1kZXRhaWwnLFxuXHR0ZW1wbGF0ZTogYFxuXHRcdDxkaXYgKm5nSWY9XCJjb21wYW55XCI+XG5cdFx0XHQ8aDI+e3tjb21wYW55Lm5hbWV9fSBkZXRhaWxzPC9oMj5cblx0ICAgIDxkaXY+PGxhYmVsPmlkOiA8L2xhYmVsPnt7Y29tcGFueS5pZH19PC9kaXY+XG5cdCAgPC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cImVycm9yXCIgKm5nSWY9XCJlcnJvck1lc3NhZ2VcIj57e2Vycm9yTWVzc2FnZX19PC9kaXY+XG5cdGAsXG5cdGlucHV0czogWydjb21wYW55J10sXG4gIHByb3ZpZGVyczogW0hUVFBfUFJPVklERVJTLCBDb21wYW55U2VydmljZV1cbn0pXG5cbmV4cG9ydCBjbGFzcyBDb21wYW55RGV0YWlsQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblx0Y29tcGFueTogQ29tcGFueTtcblx0ZXJyb3JNZXNzYWdlOiBzdHJpbmc7XG5cblx0Y29uc3RydWN0b3IoXG5cdFx0cHJpdmF0ZSBfY29tcGFueVNlcnZpY2U6IENvbXBhbnlTZXJ2aWNlLFxuXHRcdHByaXZhdGUgX3JvdXRlUGFyYW1zOiBSb3V0ZVBhcmFtcykgeyB9XG5cblx0bmdPbkluaXQoKSB7XG4gICAgbGV0IGlkID0gK3RoaXMuX3JvdXRlUGFyYW1zLmdldCgnaWQnKTtcbiAgICB0aGlzLl9jb21wYW55U2VydmljZS5nZXRDb21wYW55KGlkKVxuICAgICAgLnN1YnNjcmliZShcblx0XHRcdGNvbXBhbnkgPT4ge1xuXHRcdFx0XHR0aGlzLmNvbXBhbnkgPSBjb21wYW55O1xuXHRcdFx0fSxcblx0XHRcdGVycm9yID0+IHRoaXMuZXJyb3JNZXNzYWdlID0gPGFueT5lcnJvcik7XG4gIH1cbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
