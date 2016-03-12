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
    var AdieFormComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            AdieFormComponent = (function () {
                function AdieFormComponent() {
                }
                AdieFormComponent = __decorate([
                    core_1.Component({
                        selector: 'adie-form',
                        template: "\n\t\t<h3>Edit Your Profile</h3>\n    <div *ngIf =\"adie\">\n        <label>name: </label>\n        <input [(ngModel)]=\"adie.name\" placeholder=\"name\"/>\n    </div>\n    <div class=\"error\" *ngIf=\"errorMessage\">{{errorMessage}}</div>\n\t",
                        inputs: ['adie'],
                    }), 
                    __metadata('design:paramtypes', [])
                ], AdieFormComponent);
                return AdieFormComponent;
            }());
            exports_1("AdieFormComponent", AdieFormComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb21wb25lbnRzL2FkaWUtZm9ybS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFrQkE7Z0JBR0M7Z0JBQWUsQ0FBQztnQkFoQmpCO29CQUFDLGdCQUFTLENBQUM7d0JBQ1YsUUFBUSxFQUFFLFdBQVc7d0JBQ3JCLFFBQVEsRUFBRSxxUEFPVDt3QkFDRCxNQUFNLEVBQUUsQ0FBQyxNQUFNLENBQUM7cUJBQ2hCLENBQUM7O3FDQUFBO2dCQU1GLHdCQUFDO1lBQUQsQ0FKQSxBQUlDLElBQUE7WUFKRCxpREFJQyxDQUFBIiwiZmlsZSI6ImFwcC9jb21wb25lbnRzL2FkaWUtZm9ybS5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdhbmd1bGFyMi9jb3JlJztcblxuLy8gUHJvamVjdCBpbXBvcnRzXG5pbXBvcnQgeyBBZGllIH0gZnJvbSAnLi4vbW9kZWxzL2FkaWUnO1xuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdhZGllLWZvcm0nLFxuXHR0ZW1wbGF0ZTogYFxuXHRcdDxoMz5FZGl0IFlvdXIgUHJvZmlsZTwvaDM+XG4gICAgPGRpdiAqbmdJZiA9XCJhZGllXCI+XG4gICAgICAgIDxsYWJlbD5uYW1lOiA8L2xhYmVsPlxuICAgICAgICA8aW5wdXQgWyhuZ01vZGVsKV09XCJhZGllLm5hbWVcIiBwbGFjZWhvbGRlcj1cIm5hbWVcIi8+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cImVycm9yXCIgKm5nSWY9XCJlcnJvck1lc3NhZ2VcIj57e2Vycm9yTWVzc2FnZX19PC9kaXY+XG5cdGAsXG5cdGlucHV0czogWydhZGllJ10sXG59KVxuXG5leHBvcnQgY2xhc3MgQWRpZUZvcm1Db21wb25lbnQge1xuXHRhZGllOiBBZGllO1xuXG5cdGNvbnN0cnVjdG9yKCkge31cbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
