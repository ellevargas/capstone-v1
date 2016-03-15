System.register(['angular2/core', 'angular2/http', 'angular2/router', '../services/company.service', './employee-detail.component'], function(exports_1, context_1) {
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
    var core_1, http_1, router_1, company_service_1, employee_detail_component_1;
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
            },
            function (employee_detail_component_1_1) {
                employee_detail_component_1 = employee_detail_component_1_1;
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
                        .subscribe(function (response) {
                        _this.company = response.company;
                        _this.employees = response.employees;
                    }, function (error) { return _this.errorMessage = error; });
                };
                CompanyDetailComponent = __decorate([
                    core_1.Component({
                        selector: 'company-detail',
                        template: "\n\t\t<div *ngIf=\"company\">\n\t\t\t<h2>{{company.name}} details</h2>\n\t    <div><label>id: </label>{{company.id}}</div>\n\t  </div>\n    <div class=\"error\" *ngIf=\"errorMessage\">{{errorMessage}}</div>\n    <div *ngIf=\"employees\">\n    \t<ul>\n    \t\t<li *ngFor=\"#employee of employees\" >\n\t\t\t\t\tName: {{employee.name}} | Position: {{employee.position}}\n    \t\t</li>\n    \t</ul>\n    </div>\n\t",
                        inputs: ['company', 'employees'],
                        providers: [http_1.HTTP_PROVIDERS, company_service_1.CompanyService],
                        directives: [employee_detail_component_1.EmployeeDetailComponent]
                    }), 
                    __metadata('design:paramtypes', [company_service_1.CompanyService, router_1.RouteParams])
                ], CompanyDetailComponent);
                return CompanyDetailComponent;
            }());
            exports_1("CompanyDetailComponent", CompanyDetailComponent);
        }
    }
});
//# sourceMappingURL=company-detail.component.js.map