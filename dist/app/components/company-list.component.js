System.register(['angular2/core', 'angular2/http', '../services/company.service'], function(exports_1, context_1) {
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
    var core_1, http_1, company_service_1;
    var CompanyListComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (company_service_1_1) {
                company_service_1 = company_service_1_1;
            }],
        execute: function() {
            CompanyListComponent = (function () {
                function CompanyListComponent(_companyService) {
                    this._companyService = _companyService;
                }
                CompanyListComponent.prototype.ngOnInit = function () {
                    this.getCompanies();
                };
                CompanyListComponent.prototype.getCompanies = function () {
                    var _this = this;
                    this._companyService.getCompanies()
                        .subscribe(function (companies) { return _this.companies = companies; }, function (error) { return _this.errorMessage = error; });
                };
                CompanyListComponent.prototype.onSelect = function (company) {
                    this.selectedCompany = company;
                };
                CompanyListComponent = __decorate([
                    core_1.Component({
                        selector: "company-list",
                        template: "\n\t<ul>\n\t\t<li *ngFor=\"#company of companies\" (click)=\"onSelect(company)\">\n\t\t\tName: {{ company.name }} | Website: {{ company.website }}\n\t\t</li>\n\t</ul>\n\t<div class=\"error\" *ngIf=\"errorMessage\">{{errorMessage}}</div>\n  ",
                        providers: [http_1.HTTP_PROVIDERS, company_service_1.CompanyService]
                    }), 
                    __metadata('design:paramtypes', [company_service_1.CompanyService])
                ], CompanyListComponent);
                return CompanyListComponent;
            }());
            exports_1("CompanyListComponent", CompanyListComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb21wb25lbnRzL2NvbXBhbnktbGlzdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFzQkE7Z0JBS0MsOEJBQW9CLGVBQStCO29CQUEvQixvQkFBZSxHQUFmLGVBQWUsQ0FBZ0I7Z0JBQUcsQ0FBQztnQkFFdkQsdUNBQVEsR0FBUjtvQkFDQyxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7Z0JBQ3JCLENBQUM7Z0JBRUQsMkNBQVksR0FBWjtvQkFBQSxpQkFLQztvQkFKQSxJQUFJLENBQUMsZUFBZSxDQUFDLFlBQVksRUFBRTt5QkFDakMsU0FBUyxDQUNULFVBQUEsU0FBUyxJQUFJLE9BQUEsS0FBSSxDQUFDLFNBQVMsR0FBRyxTQUFTLEVBQTFCLENBQTBCLEVBQ3ZDLFVBQUEsS0FBSyxJQUFJLE9BQUEsS0FBSSxDQUFDLFlBQVksR0FBUSxLQUFLLEVBQTlCLENBQThCLENBQUMsQ0FBQTtnQkFDM0MsQ0FBQztnQkFFRCx1Q0FBUSxHQUFSLFVBQVMsT0FBZ0I7b0JBQ3hCLElBQUksQ0FBQyxlQUFlLEdBQUcsT0FBTyxDQUFDO2dCQUNoQyxDQUFDO2dCQWpDRjtvQkFBQyxnQkFBUyxDQUFDO3dCQUNWLFFBQVEsRUFBRSxjQUFjO3dCQUN4QixRQUFRLEVBQUUsa1BBT1I7d0JBQ0QsU0FBUyxFQUFFLENBQUUscUJBQWMsRUFBRSxnQ0FBYyxDQUFFO3FCQUM5QyxDQUFDOzt3Q0FBQTtnQkF1QkYsMkJBQUM7WUFBRCxDQXJCQSxBQXFCQyxJQUFBO1lBckJELHVEQXFCQyxDQUFBIiwiZmlsZSI6ImFwcC9jb21wb25lbnRzL2NvbXBhbnktbGlzdC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBBbmd1bGFyIGltcG9ydHNcbmltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5pbXBvcnQgeyBIVFRQX1BST1ZJREVSUyB9ICAgIGZyb20gJ2FuZ3VsYXIyL2h0dHAnO1xuLy8gUnhqcyBpbXBvcnRzXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcy9PYnNlcnZhYmxlJztcbi8vIFByb2plY3QgaW1wb3J0c1xuaW1wb3J0IHsgQ29tcGFueSB9IGZyb20gJy4uL21vZGVscy9jb21wYW55JztcbmltcG9ydCB7IENvbXBhbnlTZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZXMvY29tcGFueS5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiBcImNvbXBhbnktbGlzdFwiLFxuXHR0ZW1wbGF0ZTogYFxuXHQ8dWw+XG5cdFx0PGxpICpuZ0Zvcj1cIiNjb21wYW55IG9mIGNvbXBhbmllc1wiIChjbGljayk9XCJvblNlbGVjdChjb21wYW55KVwiPlxuXHRcdFx0TmFtZToge3sgY29tcGFueS5uYW1lIH19IHwgV2Vic2l0ZToge3sgY29tcGFueS53ZWJzaXRlIH19XG5cdFx0PC9saT5cblx0PC91bD5cblx0PGRpdiBjbGFzcz1cImVycm9yXCIgKm5nSWY9XCJlcnJvck1lc3NhZ2VcIj57e2Vycm9yTWVzc2FnZX19PC9kaXY+XG4gIGAsXG4gIHByb3ZpZGVyczogWyBIVFRQX1BST1ZJREVSUywgQ29tcGFueVNlcnZpY2UgXVxufSlcblxuZXhwb3J0IGNsYXNzIENvbXBhbnlMaXN0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblx0ZXJyb3JNZXNzYWdlOiBzdHJpbmc7XG5cdHB1YmxpYyBjb21wYW5pZXM6IENvbXBhbnlbXTtcblx0cHVibGljIHNlbGVjdGVkQ29tcGFueTogQ29tcGFueTtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIF9jb21wYW55U2VydmljZTogQ29tcGFueVNlcnZpY2UpIHt9XG5cblx0bmdPbkluaXQoKSB7XG5cdFx0dGhpcy5nZXRDb21wYW5pZXMoKTtcblx0fVxuXG5cdGdldENvbXBhbmllcygpIHtcblx0XHR0aGlzLl9jb21wYW55U2VydmljZS5nZXRDb21wYW5pZXMoKVxuXHRcdFx0LnN1YnNjcmliZShcblx0XHRcdFx0Y29tcGFuaWVzID0+IHRoaXMuY29tcGFuaWVzID0gY29tcGFuaWVzLFxuXHRcdFx0XHRlcnJvciA9PiB0aGlzLmVycm9yTWVzc2FnZSA9IDxhbnk+ZXJyb3IpXG5cdH1cblxuXHRvblNlbGVjdChjb21wYW55OiBDb21wYW55KSB7XG5cdFx0dGhpcy5zZWxlY3RlZENvbXBhbnkgPSBjb21wYW55O1xuXHR9XG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
