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
                    this.loading = true;
                }
                CompanyDetailComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    var id = +this._routeParams.get('id');
                    this._companyService.getCompany(id)
                        .subscribe(function (response) {
                        _this.loading = false;
                        _this.company = response.company;
                        _this.employees = response.employees;
                    }, function (error) { return _this.errorMessage = error; });
                };
                CompanyDetailComponent = __decorate([
                    core_1.Component({
                        selector: 'company-detail',
                        template: "\n\t\t<div *ngIf=\"loading\" class=\"ui active inverted\">\n  \t\t<div class=\"ui text loader\">Loading</div>\n\t\t</div>\n\t\t<div *ngIf=\"company\">\n\t\t\t<h2>{{company.name}} details</h2>\n\t    <div><label>id: </label>{{company.id}}</div>\n\t  </div>\n    <div class=\"error\" *ngIf=\"errorMessage\">{{errorMessage}}</div>\n    <div *ngIf=\"employees\">\n    \t<ul>\n    \t\t<li *ngFor=\"#employee of employees\" >\n\t\t\t\t\tName: {{employee.name}} | Position: {{employee.position}}\n    \t\t</li>\n    \t</ul>\n    </div>\n\t",
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb21wb25lbnRzL2NvbXBhbnktZGV0YWlsLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQWtDQTtnQkFNQyxnQ0FDUyxlQUErQixFQUMvQixZQUF5QjtvQkFEekIsb0JBQWUsR0FBZixlQUFlLENBQWdCO29CQUMvQixpQkFBWSxHQUFaLFlBQVksQ0FBYTtvQkFKbEMsWUFBTyxHQUFZLElBQUksQ0FBQztnQkFJYyxDQUFDO2dCQUV2Qyx5Q0FBUSxHQUFSO29CQUFBLGlCQVVFO29CQVRDLElBQUksRUFBRSxHQUFHLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7b0JBQ3RDLElBQUksQ0FBQyxlQUFlLENBQUMsVUFBVSxDQUFDLEVBQUUsQ0FBQzt5QkFDaEMsU0FBUyxDQUNiLFVBQUEsUUFBUTt3QkFDUCxLQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQzt3QkFDckIsS0FBSSxDQUFDLE9BQU8sR0FBRyxRQUFRLENBQUMsT0FBTyxDQUFDO3dCQUNoQyxLQUFJLENBQUMsU0FBUyxHQUFHLFFBQVEsQ0FBQyxTQUFTLENBQUM7b0JBQ3JDLENBQUMsRUFDRCxVQUFBLEtBQUssSUFBSSxPQUFBLEtBQUksQ0FBQyxZQUFZLEdBQVEsS0FBSyxFQUE5QixDQUE4QixDQUFDLENBQUM7Z0JBQzFDLENBQUM7Z0JBNUNIO29CQUFDLGdCQUFTLENBQUM7d0JBQ1YsUUFBUSxFQUFFLGdCQUFnQjt3QkFDMUIsUUFBUSxFQUFFLHNoQkFnQlQ7d0JBQ0QsTUFBTSxFQUFFLENBQUMsU0FBUyxFQUFFLFdBQVcsQ0FBQzt3QkFDL0IsU0FBUyxFQUFFLENBQUMscUJBQWMsRUFBRSxnQ0FBYyxDQUFDO3dCQUM1QyxVQUFVLEVBQUUsQ0FBQyxtREFBdUIsQ0FBQztxQkFDckMsQ0FBQzs7MENBQUE7Z0JBdUJGLDZCQUFDO1lBQUQsQ0FyQkEsQUFxQkMsSUFBQTtZQXJCRCwyREFxQkMsQ0FBQSIsImZpbGUiOiJhcHAvY29tcG9uZW50cy9jb21wYW55LWRldGFpbC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuaW1wb3J0IHsgSFRUUF9QUk9WSURFUlMgfSAgICBmcm9tICdhbmd1bGFyMi9odHRwJztcbmltcG9ydCB7IFJvdXRlUGFyYW1zIH0gZnJvbSAnYW5ndWxhcjIvcm91dGVyJztcblxuLy8gUHJvamVjdCBpbXBvcnRzXG5pbXBvcnQgeyBDb21wYW55IH0gZnJvbSAnLi4vbW9kZWxzL2NvbXBhbnknO1xuaW1wb3J0IHsgRW1wbG95ZWUgfSBmcm9tICcuLi9tb2RlbHMvZW1wbG95ZWUnO1xuaW1wb3J0IHsgQ29tcGFueVNlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlcy9jb21wYW55LnNlcnZpY2UnO1xuaW1wb3J0IHsgRW1wbG95ZWVEZXRhaWxDb21wb25lbnQgfSBmcm9tICcuL2VtcGxveWVlLWRldGFpbC5jb21wb25lbnQnO1xuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdjb21wYW55LWRldGFpbCcsXG5cdHRlbXBsYXRlOiBgXG5cdFx0PGRpdiAqbmdJZj1cImxvYWRpbmdcIiBjbGFzcz1cInVpIGFjdGl2ZSBpbnZlcnRlZFwiPlxuICBcdFx0PGRpdiBjbGFzcz1cInVpIHRleHQgbG9hZGVyXCI+TG9hZGluZzwvZGl2PlxuXHRcdDwvZGl2PlxuXHRcdDxkaXYgKm5nSWY9XCJjb21wYW55XCI+XG5cdFx0XHQ8aDI+e3tjb21wYW55Lm5hbWV9fSBkZXRhaWxzPC9oMj5cblx0ICAgIDxkaXY+PGxhYmVsPmlkOiA8L2xhYmVsPnt7Y29tcGFueS5pZH19PC9kaXY+XG5cdCAgPC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cImVycm9yXCIgKm5nSWY9XCJlcnJvck1lc3NhZ2VcIj57e2Vycm9yTWVzc2FnZX19PC9kaXY+XG4gICAgPGRpdiAqbmdJZj1cImVtcGxveWVlc1wiPlxuICAgIFx0PHVsPlxuICAgIFx0XHQ8bGkgKm5nRm9yPVwiI2VtcGxveWVlIG9mIGVtcGxveWVlc1wiID5cblx0XHRcdFx0XHROYW1lOiB7e2VtcGxveWVlLm5hbWV9fSB8IFBvc2l0aW9uOiB7e2VtcGxveWVlLnBvc2l0aW9ufX1cbiAgICBcdFx0PC9saT5cbiAgICBcdDwvdWw+XG4gICAgPC9kaXY+XG5cdGAsXG5cdGlucHV0czogWydjb21wYW55JywgJ2VtcGxveWVlcyddLFxuICBwcm92aWRlcnM6IFtIVFRQX1BST1ZJREVSUywgQ29tcGFueVNlcnZpY2VdLFxuXHRkaXJlY3RpdmVzOiBbRW1wbG95ZWVEZXRhaWxDb21wb25lbnRdXG59KVxuXG5leHBvcnQgY2xhc3MgQ29tcGFueURldGFpbENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cdGNvbXBhbnk6IENvbXBhbnk7XG5cdGVtcGxveWVlczogRW1wbG95ZWVbXTtcblx0ZXJyb3JNZXNzYWdlOiBzdHJpbmc7XG5cdGxvYWRpbmc6IGJvb2xlYW4gPSB0cnVlO1xuXG5cdGNvbnN0cnVjdG9yKFxuXHRcdHByaXZhdGUgX2NvbXBhbnlTZXJ2aWNlOiBDb21wYW55U2VydmljZSxcblx0XHRwcml2YXRlIF9yb3V0ZVBhcmFtczogUm91dGVQYXJhbXMpIHsgfVxuXG5cdG5nT25Jbml0KCkge1xuICAgIGxldCBpZCA9ICt0aGlzLl9yb3V0ZVBhcmFtcy5nZXQoJ2lkJyk7XG4gICAgdGhpcy5fY29tcGFueVNlcnZpY2UuZ2V0Q29tcGFueShpZClcbiAgICAgIC5zdWJzY3JpYmUoXG5cdFx0XHRyZXNwb25zZSA9PiB7XG5cdFx0XHRcdHRoaXMubG9hZGluZyA9IGZhbHNlO1xuXHRcdFx0XHR0aGlzLmNvbXBhbnkgPSByZXNwb25zZS5jb21wYW55O1xuXHRcdFx0XHR0aGlzLmVtcGxveWVlcyA9IHJlc3BvbnNlLmVtcGxveWVlcztcblx0XHRcdH0sXG5cdFx0XHRlcnJvciA9PiB0aGlzLmVycm9yTWVzc2FnZSA9IDxhbnk+ZXJyb3IpO1xuICB9XG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
