System.register(['angular2/core', 'angular2/router', '../services/adie.service', '../services/company.service', '../services/employee.service', './adie-list.component', './adie-detail.component', './company-list.component', './company-detail.component', './menu.component', './welcome.component'], function(exports_1, context_1) {
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
    var core_1, router_1, adie_service_1, company_service_1, employee_service_1, adie_list_component_1, adie_detail_component_1, company_list_component_1, company_detail_component_1, menu_component_1, welcome_component_1;
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
            function (menu_component_1_1) {
                menu_component_1 = menu_component_1_1;
            },
            function (welcome_component_1_1) {
                welcome_component_1 = welcome_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                    this.title = "Adies Info";
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: "\n\t<menu-bar></menu-bar>\n\t<div class=\"ui main text container\">\n\t\t<nav>\n\t\t\t<a [routerLink]=\"['Welcome']\">Welcome</a>\n\t    <a [routerLink]=\"['Adies']\">Adies</a>\n\t    <a [routerLink]=\"['Companies']\">Companies</a>\n\t  </nav>\n\t\t<router-outlet></router-outlet>\n\t</div>\n\t",
                        providers: [adie_service_1.AdieService, company_service_1.CompanyService, employee_service_1.EmployeeService],
                        directives: [router_1.ROUTER_DIRECTIVES, menu_component_1.MenuBarComponent],
                    }),
                    router_1.RouteConfig([
                        { path: '/', name: 'Welcome', component: welcome_component_1.WelcomeComponent },
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
//# sourceMappingURL=app.component.js.map