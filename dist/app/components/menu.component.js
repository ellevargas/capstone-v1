System.register(['angular2/core', 'angular2/router', './login.component'], function(exports_1, context_1) {
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
    var core_1, router_1, login_component_1;
    var MenuBarComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (login_component_1_1) {
                login_component_1 = login_component_1_1;
            }],
        execute: function() {
            MenuBarComponent = (function () {
                function MenuBarComponent() {
                }
                MenuBarComponent = __decorate([
                    core_1.Component({
                        selector: 'menu-bar',
                        template: "\n\t\t<div class=\"ui menu fixed top sticky\">\n      <a href=\"http://adadevelopersacademy.org/\" class=\"header item\">\n        <img class=\"logo\" src=\"app/assets/images/logos/ada_large.png\" alt=\"Logo for Ada Developers Academy\">\n      </a>\n        <a class=\"item\" [routerLink]=\"['Home']\">Home</a>\n        <a class=\"item\" [routerLink]=\"['Adies']\">Adies</a>\n        <a class=\"item\" [routerLink]=\"['Companies']\">Companies</a>\n      <div class=\"right menu\">\n        <login></login>\n      </div>\n        \n    </div>\n\t",
                        directives: [login_component_1.LoginComponent, router_1.ROUTER_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [])
                ], MenuBarComponent);
                return MenuBarComponent;
            }());
            exports_1("MenuBarComponent", MenuBarComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb21wb25lbnRzL21lbnUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBd0JBO2dCQUFBO2dCQUVBLENBQUM7Z0JBckJEO29CQUFDLGdCQUFTLENBQUM7d0JBQ1YsUUFBUSxFQUFFLFVBQVU7d0JBQ3BCLFFBQVEsRUFBRSxvaUJBYVQ7d0JBQ0QsVUFBVSxFQUFFLENBQUUsZ0NBQWMsRUFBRSwwQkFBaUIsQ0FBRTtxQkFDakQsQ0FBQzs7b0NBQUE7Z0JBSUYsdUJBQUM7WUFBRCxDQUZBLEFBRUMsSUFBQTtZQUZELCtDQUVDLENBQUEiLCJmaWxlIjoiYXBwL2NvbXBvbmVudHMvbWVudS5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdhbmd1bGFyMi9jb3JlJztcbmltcG9ydCB7IFJPVVRFUl9ESVJFQ1RJVkVTIH0gZnJvbSAnYW5ndWxhcjIvcm91dGVyJztcblxuaW1wb3J0IHsgTG9naW5Db21wb25lbnQgfSBmcm9tICcuL2xvZ2luLmNvbXBvbmVudCc7XG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ21lbnUtYmFyJyxcblx0dGVtcGxhdGU6IGBcblx0XHQ8ZGl2IGNsYXNzPVwidWkgbWVudSBmaXhlZCB0b3Agc3RpY2t5XCI+XG4gICAgICA8YSBocmVmPVwiaHR0cDovL2FkYWRldmVsb3BlcnNhY2FkZW15Lm9yZy9cIiBjbGFzcz1cImhlYWRlciBpdGVtXCI+XG4gICAgICAgIDxpbWcgY2xhc3M9XCJsb2dvXCIgc3JjPVwiYXBwL2Fzc2V0cy9pbWFnZXMvbG9nb3MvYWRhX2xhcmdlLnBuZ1wiIGFsdD1cIkxvZ28gZm9yIEFkYSBEZXZlbG9wZXJzIEFjYWRlbXlcIj5cbiAgICAgIDwvYT5cbiAgICAgICAgPGEgY2xhc3M9XCJpdGVtXCIgW3JvdXRlckxpbmtdPVwiWydIb21lJ11cIj5Ib21lPC9hPlxuICAgICAgICA8YSBjbGFzcz1cIml0ZW1cIiBbcm91dGVyTGlua109XCJbJ0FkaWVzJ11cIj5BZGllczwvYT5cbiAgICAgICAgPGEgY2xhc3M9XCJpdGVtXCIgW3JvdXRlckxpbmtdPVwiWydDb21wYW5pZXMnXVwiPkNvbXBhbmllczwvYT5cbiAgICAgIDxkaXYgY2xhc3M9XCJyaWdodCBtZW51XCI+XG4gICAgICAgIDxsb2dpbj48L2xvZ2luPlxuICAgICAgPC9kaXY+XG4gICAgICAgIFxuICAgIDwvZGl2PlxuXHRgLFxuXHRkaXJlY3RpdmVzOiBbIExvZ2luQ29tcG9uZW50LCBST1VURVJfRElSRUNUSVZFUyBdXG59KVxuXG5leHBvcnQgY2xhc3MgTWVudUJhckNvbXBvbmVudCB7XG5cbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
