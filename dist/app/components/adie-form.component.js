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
                    this.cohorts = [0, 1, 2, 3, 4];
                }
                Object.defineProperty(AdieFormComponent.prototype, "diagnostic", {
                    // TODO: Remove this when we're done
                    get: function () { return JSON.stringify(this.adie); },
                    enumerable: true,
                    configurable: true
                });
                AdieFormComponent = __decorate([
                    core_1.Component({
                        selector: 'adie-form',
                        templateUrl: 'app/views/adie-form.component.html',
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb21wb25lbnRzL2FkaWUtZm9ybS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFZQTtnQkFJQztvQkFGQSxZQUFPLEdBQWEsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBRWpCLENBQUM7Z0JBR2Ysc0JBQUkseUNBQVU7b0JBRGYsb0NBQW9DO3lCQUNuQyxjQUFtQixNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDOzs7bUJBQUE7Z0JBYnhEO29CQUFDLGdCQUFTLENBQUM7d0JBQ1YsUUFBUSxFQUFFLFdBQVc7d0JBQ3JCLFdBQVcsRUFBRSxvQ0FBb0M7d0JBQ2pELE1BQU0sRUFBRSxDQUFDLE1BQU0sQ0FBQztxQkFDaEIsQ0FBQzs7cUNBQUE7Z0JBVUYsd0JBQUM7WUFBRCxDQVJBLEFBUUMsSUFBQTtZQVJELGlEQVFDLENBQUEiLCJmaWxlIjoiYXBwL2NvbXBvbmVudHMvYWRpZS1mb3JtLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuaW1wb3J0IHsgTmdGb3JtIH0gZnJvbSAnYW5ndWxhcjIvY29tbW9uJztcblxuLy8gUHJvamVjdCBpbXBvcnRzXG5pbXBvcnQgeyBBZGllIH0gZnJvbSAnLi4vbW9kZWxzL2FkaWUnO1xuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdhZGllLWZvcm0nLFxuXHR0ZW1wbGF0ZVVybDogJ2FwcC92aWV3cy9hZGllLWZvcm0uY29tcG9uZW50Lmh0bWwnLFxuXHRpbnB1dHM6IFsnYWRpZSddLFxufSlcblxuZXhwb3J0IGNsYXNzIEFkaWVGb3JtQ29tcG9uZW50IHtcblx0YWRpZTogQWRpZTtcblx0Y29ob3J0czogbnVtYmVyW10gPSBbMCwxLDIsMyw0XTtcblxuXHRjb25zdHJ1Y3RvcigpIHt9XG5cblx0Ly8gVE9ETzogUmVtb3ZlIHRoaXMgd2hlbiB3ZSdyZSBkb25lXG4gIGdldCBkaWFnbm9zdGljKCkgeyByZXR1cm4gSlNPTi5zdHJpbmdpZnkodGhpcy5hZGllKTsgfVxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
