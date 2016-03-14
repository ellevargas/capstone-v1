System.register(['angular2/core', 'angular2/router', '../services/adie.service', '../services/company.service', '../services/employee.service', './adie-list.component', './adie-detail.component', './company-list.component', './company-detail.component', './login.component'], function(exports_1, context_1) {
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
    var core_1, router_1, adie_service_1, company_service_1, employee_service_1, adie_list_component_1, adie_detail_component_1, company_list_component_1, company_detail_component_1, login_component_1;
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
            function (login_component_1_1) {
                login_component_1 = login_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                    this.title = "Adies Info";
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: "\n\t<h1 class=\"ui header\">{{title}}</h1>\n\t<login></login>\n\t<nav>\n    <a [routerLink]=\"['Adies']\">Adies</a>\n    <a [routerLink]=\"['Companies']\">Companies</a>\n  </nav>\n\t<router-outlet></router-outlet>\n\t",
                        providers: [adie_service_1.AdieService, company_service_1.CompanyService, employee_service_1.EmployeeService],
                        directives: [router_1.ROUTER_DIRECTIVES, login_component_1.LoginComponent],
                    }),
                    router_1.RouteConfig([
                        { path: '/adies', name: 'Adies', component: adie_list_component_1.AdieListComponent },
                        { path: '/companies', name: 'Companies', component: company_list_component_1.CompanyListComponent },
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb21wb25lbnRzL2FwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFxQ0E7Z0JBQUE7b0JBQ1EsVUFBSyxHQUFHLFlBQVksQ0FBQztnQkFDN0IsQ0FBQztnQkF4QkQ7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDVixRQUFRLEVBQUUsUUFBUTt3QkFDbEIsUUFBUSxFQUFFLDJOQVFUO3dCQUNELFNBQVMsRUFBRSxDQUFDLDBCQUFXLEVBQUUsZ0NBQWMsRUFBRSxrQ0FBZSxDQUFDO3dCQUN4RCxVQUFVLEVBQUUsQ0FBQywwQkFBaUIsRUFBRSxnQ0FBYyxDQUFDO3FCQUNoRCxDQUFDO29CQUVELG9CQUFXLENBQUM7d0JBQ1osRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsU0FBUyxFQUFFLHVDQUFpQixFQUFFO3dCQUMvRCxFQUFFLElBQUksRUFBRSxZQUFZLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRSxTQUFTLEVBQUUsNkNBQW9CLEVBQUU7d0JBQzFFLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRSxJQUFJLEVBQUUsWUFBWSxFQUFFLFNBQVMsRUFBRSwyQ0FBbUIsRUFBRTt3QkFDekUsRUFBRSxJQUFJLEVBQUUsY0FBYyxFQUFFLElBQUksRUFBRSxlQUFlLEVBQUUsU0FBUyxFQUFFLGlEQUFzQixFQUFFO3FCQUNsRixDQUFDOztnQ0FBQTtnQkFJRixtQkFBQztZQUFELENBRkEsQUFFQyxJQUFBO1lBRkQsdUNBRUMsQ0FBQSIsImZpbGUiOiJhcHAvY29tcG9uZW50cy9hcHAuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZUNvbmZpZywgUk9VVEVSX0RJUkVDVElWRVMgfSBmcm9tICdhbmd1bGFyMi9yb3V0ZXInO1xuXG4vLyBJbXBvcnQgc2VydmljZXNcbmltcG9ydCB7IEFkaWVTZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZXMvYWRpZS5zZXJ2aWNlJztcbmltcG9ydCB7IENvbXBhbnlTZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZXMvY29tcGFueS5zZXJ2aWNlJztcbmltcG9ydCB7IEVtcGxveWVlU2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2VzL2VtcGxveWVlLnNlcnZpY2UnO1xuXG4vLyBJbXBvcnQgY29tcG9uZW50c1xuaW1wb3J0IHsgQWRpZUxpc3RDb21wb25lbnQgfSBmcm9tICcuL2FkaWUtbGlzdC5jb21wb25lbnQnO1xuaW1wb3J0IHsgQWRpZURldGFpbENvbXBvbmVudCB9IGZyb20gJy4vYWRpZS1kZXRhaWwuY29tcG9uZW50JztcbmltcG9ydCB7IENvbXBhbnlMaXN0Q29tcG9uZW50IH0gZnJvbSAnLi9jb21wYW55LWxpc3QuY29tcG9uZW50JztcbmltcG9ydCB7IENvbXBhbnlEZXRhaWxDb21wb25lbnQgfSBmcm9tICcuL2NvbXBhbnktZGV0YWlsLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBMb2dpbkNvbXBvbmVudCB9IGZyb20gJy4vbG9naW4uY29tcG9uZW50JztcblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnbXktYXBwJyxcblx0dGVtcGxhdGU6IGBcblx0PGgxIGNsYXNzPVwidWkgaGVhZGVyXCI+e3t0aXRsZX19PC9oMT5cblx0PGxvZ2luPjwvbG9naW4+XG5cdDxuYXY+XG4gICAgPGEgW3JvdXRlckxpbmtdPVwiWydBZGllcyddXCI+QWRpZXM8L2E+XG4gICAgPGEgW3JvdXRlckxpbmtdPVwiWydDb21wYW5pZXMnXVwiPkNvbXBhbmllczwvYT5cbiAgPC9uYXY+XG5cdDxyb3V0ZXItb3V0bGV0Pjwvcm91dGVyLW91dGxldD5cblx0YCxcblx0cHJvdmlkZXJzOiBbQWRpZVNlcnZpY2UsIENvbXBhbnlTZXJ2aWNlLCBFbXBsb3llZVNlcnZpY2VdLFxuICBkaXJlY3RpdmVzOiBbUk9VVEVSX0RJUkVDVElWRVMsIExvZ2luQ29tcG9uZW50XSxcbn0pXG5cbkBSb3V0ZUNvbmZpZyhbXG5cdHsgcGF0aDogJy9hZGllcycsIG5hbWU6ICdBZGllcycsIGNvbXBvbmVudDogQWRpZUxpc3RDb21wb25lbnQgfSxcblx0eyBwYXRoOiAnL2NvbXBhbmllcycsIG5hbWU6ICdDb21wYW5pZXMnLCBjb21wb25lbnQ6IENvbXBhbnlMaXN0Q29tcG9uZW50IH0sXG5cdHsgcGF0aDogJy9hZGllLzppZCcsIG5hbWU6ICdBZGllRGV0YWlsJywgY29tcG9uZW50OiBBZGllRGV0YWlsQ29tcG9uZW50IH0sXG5cdHsgcGF0aDogJy9jb21wYW55LzppZCcsIG5hbWU6ICdDb21wYW55RGV0YWlsJywgY29tcG9uZW50OiBDb21wYW55RGV0YWlsQ29tcG9uZW50IH1cbl0pXG5cbmV4cG9ydCBjbGFzcyBBcHBDb21wb25lbnQge1xuXHRwdWJsaWMgdGl0bGUgPSBcIkFkaWVzIEluZm9cIjtcbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
