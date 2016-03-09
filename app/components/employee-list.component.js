System.register(['angular2/core', 'angular2/http', '../services/employee.service'], function(exports_1, context_1) {
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
    var core_1, http_1, employee_service_1;
    var EmployeeListComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (employee_service_1_1) {
                employee_service_1 = employee_service_1_1;
            }],
        execute: function() {
            EmployeeListComponent = (function () {
                function EmployeeListComponent(_employeeService) {
                    this._employeeService = _employeeService;
                }
                EmployeeListComponent.prototype.ngOnInit = function () {
                    this.getEmployees();
                };
                EmployeeListComponent.prototype.getEmployees = function () {
                    var _this = this;
                    this._employeeService.getEmployees()
                        .subscribe(function (employees) { return _this.employees = employees; }, function (error) { return _this.errorMessage = error; });
                };
                EmployeeListComponent = __decorate([
                    core_1.Component({
                        selector: "employee-list",
                        template: "\n\t<ul>\n\t\t<li *ngFor=\"#employee of employees\">\n\t\t\tName: {{ employee.name }} | Company id: {{ employee.companyId }}\n\t\t</li>\n\t</ul>\n\t<div class=\"error\" *ngIf=\"errorMessage\">{{errorMessage}}</div>\n\t",
                        providers: [http_1.HTTP_PROVIDERS, employee_service_1.EmployeeService]
                    }), 
                    __metadata('design:paramtypes', [employee_service_1.EmployeeService])
                ], EmployeeListComponent);
                return EmployeeListComponent;
            }());
            exports_1("EmployeeListComponent", EmployeeListComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb21wb25lbnRzL2VtcGxveWVlLWxpc3QuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBc0JBO2dCQUlDLCtCQUFvQixnQkFBaUM7b0JBQWpDLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBaUI7Z0JBQUcsQ0FBQztnQkFFekQsd0NBQVEsR0FBUjtvQkFDQyxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7Z0JBQ3JCLENBQUM7Z0JBRUQsNENBQVksR0FBWjtvQkFBQSxpQkFLQztvQkFKQSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsWUFBWSxFQUFFO3lCQUNsQyxTQUFTLENBQ1YsVUFBQSxTQUFTLElBQUksT0FBQSxLQUFJLENBQUMsU0FBUyxHQUFHLFNBQVMsRUFBMUIsQ0FBMEIsRUFDdkMsVUFBQSxLQUFLLElBQUksT0FBQSxLQUFJLENBQUMsWUFBWSxHQUFRLEtBQUssRUFBOUIsQ0FBOEIsQ0FBQyxDQUFDO2dCQUMzQyxDQUFDO2dCQTVCRjtvQkFBQyxnQkFBUyxDQUFDO3dCQUNWLFFBQVEsRUFBRSxlQUFlO3dCQUN6QixRQUFRLEVBQUUsNE5BT1Q7d0JBQ0QsU0FBUyxFQUFFLENBQUUscUJBQWMsRUFBRSxrQ0FBZSxDQUFFO3FCQUM5QyxDQUFDOzt5Q0FBQTtnQkFtQkYsNEJBQUM7WUFBRCxDQWpCQSxBQWlCQyxJQUFBO1lBakJELHlEQWlCQyxDQUFBIiwiZmlsZSI6ImFwcC9jb21wb25lbnRzL2VtcGxveWVlLWxpc3QuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQW5ndWxhciBpbXBvcnRzXG5pbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuaW1wb3J0IHsgSFRUUF9QUk9WSURFUlMgfSAgICBmcm9tICdhbmd1bGFyMi9odHRwJztcbi8vIFJ4anMgaW1wb3J0c1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMvT2JzZXJ2YWJsZSc7XG4vLyBQcm9qZWN0IGltcG9ydHNcbmltcG9ydCB7IEVtcGxveWVlU2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2VzL2VtcGxveWVlLnNlcnZpY2UnO1xuaW1wb3J0IHsgRW1wbG95ZWUgfSBmcm9tICcuLi9tb2RlbHMvZW1wbG95ZWUnO1xuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6IFwiZW1wbG95ZWUtbGlzdFwiLFxuXHR0ZW1wbGF0ZTogYFxuXHQ8dWw+XG5cdFx0PGxpICpuZ0Zvcj1cIiNlbXBsb3llZSBvZiBlbXBsb3llZXNcIj5cblx0XHRcdE5hbWU6IHt7IGVtcGxveWVlLm5hbWUgfX0gfCBDb21wYW55IGlkOiB7eyBlbXBsb3llZS5jb21wYW55SWQgfX1cblx0XHQ8L2xpPlxuXHQ8L3VsPlxuXHQ8ZGl2IGNsYXNzPVwiZXJyb3JcIiAqbmdJZj1cImVycm9yTWVzc2FnZVwiPnt7ZXJyb3JNZXNzYWdlfX08L2Rpdj5cblx0YCxcblx0cHJvdmlkZXJzOiBbIEhUVFBfUFJPVklERVJTLCBFbXBsb3llZVNlcnZpY2UgXVxufSlcblxuZXhwb3J0IGNsYXNzIEVtcGxveWVlTGlzdENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cdGVycm9yTWVzc2FnZTogc3RyaW5nO1xuXHRwdWJsaWMgZW1wbG95ZWVzOiBFbXBsb3llZVtdO1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgX2VtcGxveWVlU2VydmljZTogRW1wbG95ZWVTZXJ2aWNlKSB7fVxuXG5cdG5nT25Jbml0KCkge1xuXHRcdHRoaXMuZ2V0RW1wbG95ZWVzKCk7XG5cdH1cblxuXHRnZXRFbXBsb3llZXMoKSB7XG5cdFx0dGhpcy5fZW1wbG95ZWVTZXJ2aWNlLmdldEVtcGxveWVlcygpXG5cdFx0XHQuc3Vic2NyaWJlKFxuXHRcdFx0ZW1wbG95ZWVzID0+IHRoaXMuZW1wbG95ZWVzID0gZW1wbG95ZWVzLFxuXHRcdFx0ZXJyb3IgPT4gdGhpcy5lcnJvck1lc3NhZ2UgPSA8YW55PmVycm9yKTtcblx0fVxuXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
