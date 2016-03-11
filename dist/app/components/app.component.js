System.register(['angular2/core', 'angular2/router', '../services/adie.service', '../services/company.service', '../services/employee.service', './adie-list.component', './adie-detail.component', './company-list.component', './company-detail.component', './employee-list.component', './login.component'], function(exports_1, context_1) {
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
    var core_1, router_1, adie_service_1, company_service_1, employee_service_1, adie_list_component_1, adie_detail_component_1, company_list_component_1, company_detail_component_1, employee_list_component_1, login_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (adie_service_1_1) {
                adie_service_1 = adie_service_1_1;
            },
            function (company_service_1_1) {
                company_service_1 = company_service_1_1;
            },
            function (employee_service_1_1) {
                employee_service_1 = employee_service_1_1;
            },
            function (adie_list_component_1_1) {
                adie_list_component_1 = adie_list_component_1_1;
            },
            function (adie_detail_component_1_1) {
                adie_detail_component_1 = adie_detail_component_1_1;
            },
            function (company_list_component_1_1) {
                company_list_component_1 = company_list_component_1_1;
            },
            function (company_detail_component_1_1) {
                company_detail_component_1 = company_detail_component_1_1;
            },
            function (employee_list_component_1_1) {
                employee_list_component_1 = employee_list_component_1_1;
            },
            function (login_component_1_1) {
                login_component_1 = login_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                    this.title = "Capstone Practice App";
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: "\n\t<h1>{{title}}</h1>\n\t<login></login>\n\t<nav>\n    <a [routerLink]=\"['Adies']\">Adies</a>\n    <a [routerLink]=\"['Companies']\">Companies</a>\n    <a [routerLink]=\"['Employees']\">Employees</a>\n  </nav>\n\t<router-outlet></router-outlet>\n\t",
                        providers: [adie_service_1.AdieService, company_service_1.CompanyService, employee_service_1.EmployeeService],
                        directives: [router_1.ROUTER_DIRECTIVES, login_component_1.LoginComponent],
                    }),
                    router_1.RouteConfig([
                        { path: '/adies', name: 'Adies', component: adie_list_component_1.AdieListComponent },
                        { path: '/companies', name: 'Companies', component: company_list_component_1.CompanyListComponent },
                        { path: '/employees', name: 'Employees', component: employee_list_component_1.EmployeeListComponent },
                        { path: '/adie/:id', name: 'AdieDetail', component: adie_detail_component_1.AdieDetailComponent },
                        { path: '/company/:id', name: 'CompanyDetail', component: company_detail_component_1.CompanyDetailComponent }
                    ]), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb21wb25lbnRzL2FwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUF3Q0E7Z0JBQUE7b0JBQ1EsVUFBSyxHQUFHLHVCQUF1QixDQUFDO2dCQUN4QyxDQUFDO2dCQTFCRDtvQkFBQyxnQkFBUyxDQUFDO3dCQUNWLFFBQVEsRUFBRSxRQUFRO3dCQUNsQixRQUFRLEVBQUUsNFBBU1Q7d0JBQ0QsU0FBUyxFQUFFLENBQUMsMEJBQVcsRUFBRSxnQ0FBYyxFQUFFLGtDQUFlLENBQUM7d0JBQ3hELFVBQVUsRUFBRSxDQUFDLDBCQUFpQixFQUFFLGdDQUFjLENBQUM7cUJBQ2hELENBQUM7b0JBRUQsb0JBQVcsQ0FBQzt3QkFDWixFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxTQUFTLEVBQUUsdUNBQWlCLEVBQUU7d0JBQy9ELEVBQUUsSUFBSSxFQUFFLFlBQVksRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFLFNBQVMsRUFBRSw2Q0FBb0IsRUFBRTt3QkFDMUUsRUFBRSxJQUFJLEVBQUUsWUFBWSxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUUsU0FBUyxFQUFFLCtDQUFxQixFQUFFO3dCQUMzRSxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUUsSUFBSSxFQUFFLFlBQVksRUFBRSxTQUFTLEVBQUUsMkNBQW1CLEVBQUU7d0JBQ3pFLEVBQUUsSUFBSSxFQUFFLGNBQWMsRUFBRSxJQUFJLEVBQUUsZUFBZSxFQUFFLFNBQVMsRUFBRSxpREFBc0IsRUFBRTtxQkFDbEYsQ0FBQzs7Z0NBQUE7Z0JBSUYsbUJBQUM7WUFBRCxDQUZBLEFBRUMsSUFBQTtZQUZELHVDQUVDLENBQUEiLCJmaWxlIjoiYXBwL2NvbXBvbmVudHMvYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVDb25maWcsIFJPVVRFUl9ESVJFQ1RJVkVTIH0gZnJvbSAnYW5ndWxhcjIvcm91dGVyJztcblxuLy8gSW1wb3J0IHNlcnZpY2VzXG5pbXBvcnQgeyBBZGllU2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2VzL2FkaWUuc2VydmljZSc7XG5pbXBvcnQgeyBDb21wYW55U2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2VzL2NvbXBhbnkuc2VydmljZSc7XG5pbXBvcnQgeyBFbXBsb3llZVNlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlcy9lbXBsb3llZS5zZXJ2aWNlJztcblxuLy8gSW1wb3J0IGNvbXBvbmVudHNcbmltcG9ydCB7IEFkaWVMaXN0Q29tcG9uZW50IH0gZnJvbSAnLi9hZGllLWxpc3QuY29tcG9uZW50JztcbmltcG9ydCB7IEFkaWVEZXRhaWxDb21wb25lbnQgfSBmcm9tICcuL2FkaWUtZGV0YWlsLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBDb21wYW55TGlzdENvbXBvbmVudCB9IGZyb20gJy4vY29tcGFueS1saXN0LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBDb21wYW55RGV0YWlsQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wYW55LWRldGFpbC5jb21wb25lbnQnO1xuaW1wb3J0IHsgRW1wbG95ZWVMaXN0Q29tcG9uZW50IH0gZnJvbSAnLi9lbXBsb3llZS1saXN0LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBMb2dpbkNvbXBvbmVudCB9IGZyb20gJy4vbG9naW4uY29tcG9uZW50JztcblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnbXktYXBwJyxcblx0dGVtcGxhdGU6IGBcblx0PGgxPnt7dGl0bGV9fTwvaDE+XG5cdDxsb2dpbj48L2xvZ2luPlxuXHQ8bmF2PlxuICAgIDxhIFtyb3V0ZXJMaW5rXT1cIlsnQWRpZXMnXVwiPkFkaWVzPC9hPlxuICAgIDxhIFtyb3V0ZXJMaW5rXT1cIlsnQ29tcGFuaWVzJ11cIj5Db21wYW5pZXM8L2E+XG4gICAgPGEgW3JvdXRlckxpbmtdPVwiWydFbXBsb3llZXMnXVwiPkVtcGxveWVlczwvYT5cbiAgPC9uYXY+XG5cdDxyb3V0ZXItb3V0bGV0Pjwvcm91dGVyLW91dGxldD5cblx0YCxcblx0cHJvdmlkZXJzOiBbQWRpZVNlcnZpY2UsIENvbXBhbnlTZXJ2aWNlLCBFbXBsb3llZVNlcnZpY2VdLFxuICBkaXJlY3RpdmVzOiBbUk9VVEVSX0RJUkVDVElWRVMsIExvZ2luQ29tcG9uZW50XSxcbn0pXG5cbkBSb3V0ZUNvbmZpZyhbXG5cdHsgcGF0aDogJy9hZGllcycsIG5hbWU6ICdBZGllcycsIGNvbXBvbmVudDogQWRpZUxpc3RDb21wb25lbnQgfSxcblx0eyBwYXRoOiAnL2NvbXBhbmllcycsIG5hbWU6ICdDb21wYW5pZXMnLCBjb21wb25lbnQ6IENvbXBhbnlMaXN0Q29tcG9uZW50IH0sXG5cdHsgcGF0aDogJy9lbXBsb3llZXMnLCBuYW1lOiAnRW1wbG95ZWVzJywgY29tcG9uZW50OiBFbXBsb3llZUxpc3RDb21wb25lbnQgfSxcblx0eyBwYXRoOiAnL2FkaWUvOmlkJywgbmFtZTogJ0FkaWVEZXRhaWwnLCBjb21wb25lbnQ6IEFkaWVEZXRhaWxDb21wb25lbnQgfSxcblx0eyBwYXRoOiAnL2NvbXBhbnkvOmlkJywgbmFtZTogJ0NvbXBhbnlEZXRhaWwnLCBjb21wb25lbnQ6IENvbXBhbnlEZXRhaWxDb21wb25lbnQgfVxuXSlcblxuZXhwb3J0IGNsYXNzIEFwcENvbXBvbmVudCB7XG5cdHB1YmxpYyB0aXRsZSA9IFwiQ2Fwc3RvbmUgUHJhY3RpY2UgQXBwXCI7XG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
