System.register(['angular2/core', 'angular2/router', '../services/adie.service', '../services/company.service', '../services/employee.service', './adie-list.component', './company-list.component', './employee-list.component', './login.component'], function(exports_1, context_1) {
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
    var core_1, router_1, adie_service_1, company_service_1, employee_service_1, adie_list_component_1, company_list_component_1, employee_list_component_1, login_component_1;
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
            function (company_list_component_1_1) {
                company_list_component_1 = company_list_component_1_1;
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
                        { path: '/employees', name: 'Employees', component: employee_list_component_1.EmployeeListComponent }
                    ]), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb21wb25lbnRzL2FwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFzQ0E7Z0JBQUE7b0JBQ1EsVUFBSyxHQUFHLHVCQUF1QixDQUFDO2dCQUN4QyxDQUFDO2dCQXpCRDtvQkFBQyxnQkFBUyxDQUFDO3dCQUNWLFFBQVEsRUFBRSxRQUFRO3dCQUNsQixRQUFRLEVBQUUsNFBBU1Q7d0JBQ0QsU0FBUyxFQUFFLENBQUMsMEJBQVcsRUFBRSxnQ0FBYyxFQUFFLGtDQUFlLENBQUM7d0JBQ3hELFVBQVUsRUFBRSxDQUFDLDBCQUFpQixFQUFFLGdDQUFjLENBQUM7cUJBQ2hELENBQUM7b0JBRUQsb0JBQVcsQ0FBQzt3QkFDWixFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxTQUFTLEVBQUUsdUNBQWlCLEVBQUU7d0JBQy9ELEVBQUUsSUFBSSxFQUFFLFlBQVksRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFLFNBQVMsRUFBRSw2Q0FBb0IsRUFBRTt3QkFDMUUsRUFBRSxJQUFJLEVBQUUsWUFBWSxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUUsU0FBUyxFQUFFLCtDQUFxQixFQUFFO3FCQUUzRSxDQUFDOztnQ0FBQTtnQkFJRixtQkFBQztZQUFELENBRkEsQUFFQyxJQUFBO1lBRkQsdUNBRUMsQ0FBQSIsImZpbGUiOiJhcHAvY29tcG9uZW50cy9hcHAuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZUNvbmZpZywgUk9VVEVSX0RJUkVDVElWRVMgfSBmcm9tICdhbmd1bGFyMi9yb3V0ZXInO1xuXG4vLyBJbXBvcnQgc2VydmljZXNcbmltcG9ydCB7IEFkaWVTZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZXMvYWRpZS5zZXJ2aWNlJztcbmltcG9ydCB7IENvbXBhbnlTZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZXMvY29tcGFueS5zZXJ2aWNlJztcbmltcG9ydCB7IEVtcGxveWVlU2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2VzL2VtcGxveWVlLnNlcnZpY2UnO1xuXG4vLyBJbXBvcnQgY29tcG9uZW50c1xuaW1wb3J0IHsgQWRpZUxpc3RDb21wb25lbnQgfSBmcm9tICcuL2FkaWUtbGlzdC5jb21wb25lbnQnO1xuLy8gaW1wb3J0IHsgQWRpZURldGFpbENvbXBvbmVudCB9IGZyb20gJy4vYWRpZS1kZXRhaWwuY29tcG9uZW50JztcbmltcG9ydCB7IENvbXBhbnlMaXN0Q29tcG9uZW50IH0gZnJvbSAnLi9jb21wYW55LWxpc3QuY29tcG9uZW50JztcbmltcG9ydCB7IEVtcGxveWVlTGlzdENvbXBvbmVudCB9IGZyb20gJy4vZW1wbG95ZWUtbGlzdC5jb21wb25lbnQnO1xuaW1wb3J0IHsgTG9naW5Db21wb25lbnQgfSBmcm9tICcuL2xvZ2luLmNvbXBvbmVudCc7XG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ215LWFwcCcsXG5cdHRlbXBsYXRlOiBgXG5cdDxoMT57e3RpdGxlfX08L2gxPlxuXHQ8bG9naW4+PC9sb2dpbj5cblx0PG5hdj5cbiAgICA8YSBbcm91dGVyTGlua109XCJbJ0FkaWVzJ11cIj5BZGllczwvYT5cbiAgICA8YSBbcm91dGVyTGlua109XCJbJ0NvbXBhbmllcyddXCI+Q29tcGFuaWVzPC9hPlxuICAgIDxhIFtyb3V0ZXJMaW5rXT1cIlsnRW1wbG95ZWVzJ11cIj5FbXBsb3llZXM8L2E+XG4gIDwvbmF2PlxuXHQ8cm91dGVyLW91dGxldD48L3JvdXRlci1vdXRsZXQ+XG5cdGAsXG5cdHByb3ZpZGVyczogW0FkaWVTZXJ2aWNlLCBDb21wYW55U2VydmljZSwgRW1wbG95ZWVTZXJ2aWNlXSxcbiAgZGlyZWN0aXZlczogW1JPVVRFUl9ESVJFQ1RJVkVTLCBMb2dpbkNvbXBvbmVudF0sXG59KVxuXG5AUm91dGVDb25maWcoW1xuXHR7IHBhdGg6ICcvYWRpZXMnLCBuYW1lOiAnQWRpZXMnLCBjb21wb25lbnQ6IEFkaWVMaXN0Q29tcG9uZW50IH0sXG5cdHsgcGF0aDogJy9jb21wYW5pZXMnLCBuYW1lOiAnQ29tcGFuaWVzJywgY29tcG9uZW50OiBDb21wYW55TGlzdENvbXBvbmVudCB9LFxuXHR7IHBhdGg6ICcvZW1wbG95ZWVzJywgbmFtZTogJ0VtcGxveWVlcycsIGNvbXBvbmVudDogRW1wbG95ZWVMaXN0Q29tcG9uZW50IH1cblx0Ly8geyBwYXRoOiAnL2FkaWUvOmlkJywgbmFtZTogJ0FkaWVEZXRhaWwnLCBjb21wb25lbnQ6IEFkaWVEZXRhaWxDb21wb25lbnQgfVxuXSlcblxuZXhwb3J0IGNsYXNzIEFwcENvbXBvbmVudCB7XG5cdHB1YmxpYyB0aXRsZSA9IFwiQ2Fwc3RvbmUgUHJhY3RpY2UgQXBwXCI7XG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
