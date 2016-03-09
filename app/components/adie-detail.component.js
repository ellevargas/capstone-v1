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
    var AdieDetailComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            AdieDetailComponent = (function () {
                function AdieDetailComponent() {
                }
                AdieDetailComponent = __decorate([
                    core_1.Component({
                        selector: 'adie-detail',
                        template: "\n\t\t<h2>{{selectedAdie.name}} details</h2>\n      <div><label>id: </label>{{selectedAdie.id}}</div>\n      <div>\n          <label>name: </label>\n          <input [(ngModel)]=\"selectedAdie.name\" placeholder=\"name\"/>\n      </div>\n\t",
                        inputs: ['selectedAdie']
                    }), 
                    __metadata('design:paramtypes', [])
                ], AdieDetailComponent);
                return AdieDetailComponent;
            }());
            exports_1("AdieDetailComponent", AdieDetailComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb21wb25lbnRzL2FkaWUtZGV0YWlsLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQWdCQTtnQkFBQTtnQkFFQSxDQUFDO2dCQWZEO29CQUFDLGdCQUFTLENBQUU7d0JBQ1gsUUFBUSxFQUFFLGFBQWE7d0JBQ3ZCLFFBQVEsRUFBRSxrUEFPVDt3QkFDRCxNQUFNLEVBQUUsQ0FBQyxjQUFjLENBQUM7cUJBQ3hCLENBQUM7O3VDQUFBO2dCQUlGLDBCQUFDO1lBQUQsQ0FGQSxBQUVDLElBQUE7WUFGRCxxREFFQyxDQUFBIiwiZmlsZSI6ImFwcC9jb21wb25lbnRzL2FkaWUtZGV0YWlsLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdhbmd1bGFyMi9jb3JlJztcbmltcG9ydCB7QWRpZX0gZnJvbSAnLi4vbW9kZWxzL2FkaWUnO1xuXG5AQ29tcG9uZW50ICh7XG5cdHNlbGVjdG9yOiAnYWRpZS1kZXRhaWwnLFxuXHR0ZW1wbGF0ZTogYFxuXHRcdDxoMj57e3NlbGVjdGVkQWRpZS5uYW1lfX0gZGV0YWlsczwvaDI+XG4gICAgICA8ZGl2PjxsYWJlbD5pZDogPC9sYWJlbD57e3NlbGVjdGVkQWRpZS5pZH19PC9kaXY+XG4gICAgICA8ZGl2PlxuICAgICAgICAgIDxsYWJlbD5uYW1lOiA8L2xhYmVsPlxuICAgICAgICAgIDxpbnB1dCBbKG5nTW9kZWwpXT1cInNlbGVjdGVkQWRpZS5uYW1lXCIgcGxhY2Vob2xkZXI9XCJuYW1lXCIvPlxuICAgICAgPC9kaXY+XG5cdGAsXG5cdGlucHV0czogWydzZWxlY3RlZEFkaWUnXVxufSlcblxuZXhwb3J0IGNsYXNzIEFkaWVEZXRhaWxDb21wb25lbnQge1xuXHRzZWxlY3RlZEFkaWU6IEFkaWU7XG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
