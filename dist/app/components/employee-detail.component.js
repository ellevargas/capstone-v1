System.register(['angular2/core'], function(exports_1, context_1) {
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
    var core_1;
    var EmployeeDetailComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            EmployeeDetailComponent = (function () {
                function EmployeeDetailComponent() {
                }
                EmployeeDetailComponent = __decorate([
                    core_1.Component({
                        selector: 'employee-detail',
                        template: "\n\t\t\t<h2>{{employee.name}}</h2>\n\t    <div>{{employee.position}}</div>\n    <div class=\"error\" *ngIf=\"errorMessage\">{{errorMessage}}</div>\n\t",
                        inputs: ['employee'],
                    }), 
                    __metadata('design:paramtypes', [])
                ], EmployeeDetailComponent);
                return EmployeeDetailComponent;
            }());
            exports_1("EmployeeDetailComponent", EmployeeDetailComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb21wb25lbnRzL2VtcGxveWVlLWRldGFpbC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFlQTtnQkFJQztnQkFBYyxDQUFDO2dCQWRoQjtvQkFBQyxnQkFBUyxDQUFDO3dCQUNWLFFBQVEsRUFBRSxpQkFBaUI7d0JBQzNCLFFBQVEsRUFBRSx3SkFJVDt3QkFDRCxNQUFNLEVBQUUsQ0FBQyxVQUFVLENBQUM7cUJBQ3BCLENBQUM7OzJDQUFBO2dCQVFGLDhCQUFDO1lBQUQsQ0FOQSxBQU1DLElBQUE7WUFORCw2REFNQyxDQUFBIiwiZmlsZSI6ImFwcC9jb21wb25lbnRzL2VtcGxveWVlLWRldGFpbC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdhbmd1bGFyMi9jb3JlJztcblxuLy8gUHJvamVjdCBpbXBvcnRzXG5pbXBvcnQgeyBFbXBsb3llZSB9IGZyb20gJy4uL21vZGVscy9lbXBsb3llZSc7XG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ2VtcGxveWVlLWRldGFpbCcsXG5cdHRlbXBsYXRlOiBgXG5cdFx0XHQ8aDI+e3tlbXBsb3llZS5uYW1lfX08L2gyPlxuXHQgICAgPGRpdj57e2VtcGxveWVlLnBvc2l0aW9ufX08L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwiZXJyb3JcIiAqbmdJZj1cImVycm9yTWVzc2FnZVwiPnt7ZXJyb3JNZXNzYWdlfX08L2Rpdj5cblx0YCxcblx0aW5wdXRzOiBbJ2VtcGxveWVlJ10sXG59KVxuXG5leHBvcnQgY2xhc3MgRW1wbG95ZWVEZXRhaWxDb21wb25lbnQge1xuXHRlbXBsb3llZTogRW1wbG95ZWU7XG5cdGVycm9yTWVzc2FnZTogc3RyaW5nO1xuXG5cdGNvbnN0cnVjdG9yKCl7fVxuXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
