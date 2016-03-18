System.register(['angular2/core', 'angular2/router', './adie-list.component', './adie-detail.component', './company-list.component', './company-detail.component', './menu.component', './welcome.component'], function(exports_1, context_1) {
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
    var core_1, router_1, adie_list_component_1, adie_detail_component_1, company_list_component_1, company_detail_component_1, menu_component_1, welcome_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
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
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: "\n\t<menu-bar></menu-bar>\n\t<div class=\"ui text container pad-top\">\n\t\t<router-outlet></router-outlet>\n\t</div>\n\t",
                        styleUrls: ['app/assets/stylesheets/app.component.css'],
                        directives: [router_1.ROUTER_DIRECTIVES, menu_component_1.MenuBarComponent],
                    }),
                    router_1.RouteConfig([
                        { path: '/', name: 'Home', component: welcome_component_1.WelcomeComponent },
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb21wb25lbnRzL2FwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUErQkE7Z0JBQUE7Z0JBQ0EsQ0FBQztnQkFyQkQ7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDVixRQUFRLEVBQUUsUUFBUTt3QkFDbEIsUUFBUSxFQUFFLDJIQUtUO3dCQUNELFNBQVMsRUFBRSxDQUFDLDBDQUEwQyxDQUFDO3dCQUN0RCxVQUFVLEVBQUUsQ0FBQywwQkFBaUIsRUFBRSxpQ0FBZ0IsQ0FBQztxQkFDbEQsQ0FBQztvQkFFRCxvQkFBVyxDQUFDO3dCQUNaLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxvQ0FBZ0IsRUFBRTt3QkFDeEQsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsU0FBUyxFQUFFLHVDQUFpQixFQUFFO3dCQUMvRCxFQUFFLElBQUksRUFBRSxZQUFZLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRSxTQUFTLEVBQUUsNkNBQW9CLEVBQUU7d0JBQzFFLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRSxJQUFJLEVBQUUsWUFBWSxFQUFFLFNBQVMsRUFBRSwyQ0FBbUIsRUFBRTt3QkFDekUsRUFBRSxJQUFJLEVBQUUsY0FBYyxFQUFFLElBQUksRUFBRSxlQUFlLEVBQUUsU0FBUyxFQUFFLGlEQUFzQixFQUFFO3FCQUNsRixDQUFDOztnQ0FBQTtnQkFHRixtQkFBQztZQUFELENBREEsQUFDQyxJQUFBO1lBREQsdUNBQ0MsQ0FBQSIsImZpbGUiOiJhcHAvY29tcG9uZW50cy9hcHAuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZUNvbmZpZywgUk9VVEVSX0RJUkVDVElWRVMgfSBmcm9tICdhbmd1bGFyMi9yb3V0ZXInO1xuXG4vLyBJbXBvcnQgY29tcG9uZW50c1xuaW1wb3J0IHsgQWRpZUxpc3RDb21wb25lbnQgfSBmcm9tICcuL2FkaWUtbGlzdC5jb21wb25lbnQnO1xuaW1wb3J0IHsgQWRpZURldGFpbENvbXBvbmVudCB9IGZyb20gJy4vYWRpZS1kZXRhaWwuY29tcG9uZW50JztcbmltcG9ydCB7IENvbXBhbnlMaXN0Q29tcG9uZW50IH0gZnJvbSAnLi9jb21wYW55LWxpc3QuY29tcG9uZW50JztcbmltcG9ydCB7IENvbXBhbnlEZXRhaWxDb21wb25lbnQgfSBmcm9tICcuL2NvbXBhbnktZGV0YWlsLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBNZW51QmFyQ29tcG9uZW50IH0gZnJvbSAnLi9tZW51LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBXZWxjb21lQ29tcG9uZW50IH0gZnJvbSAnLi93ZWxjb21lLmNvbXBvbmVudCdcblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnbXktYXBwJyxcblx0dGVtcGxhdGU6IGBcblx0PG1lbnUtYmFyPjwvbWVudS1iYXI+XG5cdDxkaXYgY2xhc3M9XCJ1aSB0ZXh0IGNvbnRhaW5lciBwYWQtdG9wXCI+XG5cdFx0PHJvdXRlci1vdXRsZXQ+PC9yb3V0ZXItb3V0bGV0PlxuXHQ8L2Rpdj5cblx0YCxcblx0c3R5bGVVcmxzOiBbJ2FwcC9hc3NldHMvc3R5bGVzaGVldHMvYXBwLmNvbXBvbmVudC5jc3MnXSxcbiAgZGlyZWN0aXZlczogW1JPVVRFUl9ESVJFQ1RJVkVTLCBNZW51QmFyQ29tcG9uZW50XSxcbn0pXG5cbkBSb3V0ZUNvbmZpZyhbXG5cdHsgcGF0aDogJy8nLCBuYW1lOiAnSG9tZScsIGNvbXBvbmVudDogV2VsY29tZUNvbXBvbmVudCB9LFxuXHR7IHBhdGg6ICcvYWRpZXMnLCBuYW1lOiAnQWRpZXMnLCBjb21wb25lbnQ6IEFkaWVMaXN0Q29tcG9uZW50IH0sXG5cdHsgcGF0aDogJy9jb21wYW5pZXMnLCBuYW1lOiAnQ29tcGFuaWVzJywgY29tcG9uZW50OiBDb21wYW55TGlzdENvbXBvbmVudCB9LFxuXHR7IHBhdGg6ICcvYWRpZS86aWQnLCBuYW1lOiAnQWRpZURldGFpbCcsIGNvbXBvbmVudDogQWRpZURldGFpbENvbXBvbmVudCB9LFxuXHR7IHBhdGg6ICcvY29tcGFueS86aWQnLCBuYW1lOiAnQ29tcGFueURldGFpbCcsIGNvbXBvbmVudDogQ29tcGFueURldGFpbENvbXBvbmVudCB9XG5dKVxuXG5leHBvcnQgY2xhc3MgQXBwQ29tcG9uZW50IHtcbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
