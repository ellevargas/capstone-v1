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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb21wb25lbnRzL2NvbXBhbnktZGV0YWlsLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQStCQTtnQkFLQyxnQ0FDUyxlQUErQixFQUMvQixZQUF5QjtvQkFEekIsb0JBQWUsR0FBZixlQUFlLENBQWdCO29CQUMvQixpQkFBWSxHQUFaLFlBQVksQ0FBYTtnQkFBSSxDQUFDO2dCQUV2Qyx5Q0FBUSxHQUFSO29CQUFBLGlCQVNFO29CQVJDLElBQUksRUFBRSxHQUFHLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7b0JBQ3RDLElBQUksQ0FBQyxlQUFlLENBQUMsVUFBVSxDQUFDLEVBQUUsQ0FBQzt5QkFDaEMsU0FBUyxDQUNiLFVBQUEsUUFBUTt3QkFDUCxLQUFJLENBQUMsT0FBTyxHQUFHLFFBQVEsQ0FBQyxPQUFPLENBQUM7d0JBQ2hDLEtBQUksQ0FBQyxTQUFTLEdBQUcsUUFBUSxDQUFDLFNBQVMsQ0FBQztvQkFDckMsQ0FBQyxFQUNELFVBQUEsS0FBSyxJQUFJLE9BQUEsS0FBSSxDQUFDLFlBQVksR0FBUSxLQUFLLEVBQTlCLENBQThCLENBQUMsQ0FBQztnQkFDMUMsQ0FBQztnQkF2Q0g7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDVixRQUFRLEVBQUUsZ0JBQWdCO3dCQUMxQixRQUFRLEVBQUUsNlpBYVQ7d0JBQ0QsTUFBTSxFQUFFLENBQUMsU0FBUyxFQUFFLFdBQVcsQ0FBQzt3QkFDL0IsU0FBUyxFQUFFLENBQUMscUJBQWMsRUFBRSxnQ0FBYyxDQUFDO3dCQUM1QyxVQUFVLEVBQUUsQ0FBQyxtREFBdUIsQ0FBQztxQkFDckMsQ0FBQzs7MENBQUE7Z0JBcUJGLDZCQUFDO1lBQUQsQ0FuQkEsQUFtQkMsSUFBQTtZQW5CRCwyREFtQkMsQ0FBQSIsImZpbGUiOiJhcHAvY29tcG9uZW50cy9jb21wYW55LWRldGFpbC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuaW1wb3J0IHsgSFRUUF9QUk9WSURFUlMgfSAgICBmcm9tICdhbmd1bGFyMi9odHRwJztcbmltcG9ydCB7IFJvdXRlUGFyYW1zIH0gZnJvbSAnYW5ndWxhcjIvcm91dGVyJztcblxuLy8gUHJvamVjdCBpbXBvcnRzXG5pbXBvcnQgeyBDb21wYW55IH0gZnJvbSAnLi4vbW9kZWxzL2NvbXBhbnknO1xuaW1wb3J0IHsgRW1wbG95ZWUgfSBmcm9tICcuLi9tb2RlbHMvZW1wbG95ZWUnO1xuaW1wb3J0IHsgQ29tcGFueVNlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlcy9jb21wYW55LnNlcnZpY2UnO1xuaW1wb3J0IHsgRW1wbG95ZWVEZXRhaWxDb21wb25lbnQgfSBmcm9tICcuL2VtcGxveWVlLWRldGFpbC5jb21wb25lbnQnO1xuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdjb21wYW55LWRldGFpbCcsXG5cdHRlbXBsYXRlOiBgXG5cdFx0PGRpdiAqbmdJZj1cImNvbXBhbnlcIj5cblx0XHRcdDxoMj57e2NvbXBhbnkubmFtZX19IGRldGFpbHM8L2gyPlxuXHQgICAgPGRpdj48bGFiZWw+aWQ6IDwvbGFiZWw+e3tjb21wYW55LmlkfX08L2Rpdj5cblx0ICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwiZXJyb3JcIiAqbmdJZj1cImVycm9yTWVzc2FnZVwiPnt7ZXJyb3JNZXNzYWdlfX08L2Rpdj5cbiAgICA8ZGl2ICpuZ0lmPVwiZW1wbG95ZWVzXCI+XG4gICAgXHQ8dWw+XG4gICAgXHRcdDxsaSAqbmdGb3I9XCIjZW1wbG95ZWUgb2YgZW1wbG95ZWVzXCIgPlxuXHRcdFx0XHRcdE5hbWU6IHt7ZW1wbG95ZWUubmFtZX19IHwgUG9zaXRpb246IHt7ZW1wbG95ZWUucG9zaXRpb259fVxuICAgIFx0XHQ8L2xpPlxuICAgIFx0PC91bD5cbiAgICA8L2Rpdj5cblx0YCxcblx0aW5wdXRzOiBbJ2NvbXBhbnknLCAnZW1wbG95ZWVzJ10sXG4gIHByb3ZpZGVyczogW0hUVFBfUFJPVklERVJTLCBDb21wYW55U2VydmljZV0sXG5cdGRpcmVjdGl2ZXM6IFtFbXBsb3llZURldGFpbENvbXBvbmVudF1cbn0pXG5cbmV4cG9ydCBjbGFzcyBDb21wYW55RGV0YWlsQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblx0Y29tcGFueTogQ29tcGFueTtcblx0ZW1wbG95ZWVzOiBFbXBsb3llZVtdO1xuXHRlcnJvck1lc3NhZ2U6IHN0cmluZztcblxuXHRjb25zdHJ1Y3Rvcihcblx0XHRwcml2YXRlIF9jb21wYW55U2VydmljZTogQ29tcGFueVNlcnZpY2UsXG5cdFx0cHJpdmF0ZSBfcm91dGVQYXJhbXM6IFJvdXRlUGFyYW1zKSB7IH1cblxuXHRuZ09uSW5pdCgpIHtcbiAgICBsZXQgaWQgPSArdGhpcy5fcm91dGVQYXJhbXMuZ2V0KCdpZCcpO1xuICAgIHRoaXMuX2NvbXBhbnlTZXJ2aWNlLmdldENvbXBhbnkoaWQpXG4gICAgICAuc3Vic2NyaWJlKFxuXHRcdFx0cmVzcG9uc2UgPT4ge1xuXHRcdFx0XHR0aGlzLmNvbXBhbnkgPSByZXNwb25zZS5jb21wYW55O1xuXHRcdFx0XHR0aGlzLmVtcGxveWVlcyA9IHJlc3BvbnNlLmVtcGxveWVlcztcblx0XHRcdH0sXG5cdFx0XHRlcnJvciA9PiB0aGlzLmVycm9yTWVzc2FnZSA9IDxhbnk+ZXJyb3IpO1xuICB9XG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
