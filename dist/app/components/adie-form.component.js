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
                AdieFormComponent.prototype.submitForm = function () {
                    console.log('Form submitted!');
                };
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb21wb25lbnRzL2FkaWUtZm9ybS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFZQTtnQkFLQztvQkFGQSxZQUFPLEdBQWEsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBRWpCLENBQUM7Z0JBRWhCLHNDQUFVLEdBQVY7b0JBQ0MsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO2dCQUNoQyxDQUFDO2dCQWZGO29CQUFDLGdCQUFTLENBQUM7d0JBQ1YsUUFBUSxFQUFFLFdBQVc7d0JBQ3JCLFdBQVcsRUFBRSxvQ0FBb0M7d0JBQ2pELE1BQU0sRUFBRSxDQUFDLE1BQU0sQ0FBQztxQkFDaEIsQ0FBQzs7cUNBQUE7Z0JBWUYsd0JBQUM7WUFBRCxDQVZBLEFBVUMsSUFBQTtZQVZELGlEQVVDLENBQUEiLCJmaWxlIjoiYXBwL2NvbXBvbmVudHMvYWRpZS1mb3JtLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuaW1wb3J0IHsgTmdGb3JtIH0gZnJvbSAnYW5ndWxhcjIvY29tbW9uJztcblxuLy8gUHJvamVjdCBpbXBvcnRzXG5pbXBvcnQgeyBBZGllIH0gZnJvbSAnLi4vbW9kZWxzL2FkaWUnO1xuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdhZGllLWZvcm0nLFxuXHR0ZW1wbGF0ZVVybDogJ2FwcC92aWV3cy9hZGllLWZvcm0uY29tcG9uZW50Lmh0bWwnLFxuXHRpbnB1dHM6IFsnYWRpZSddLFxufSlcblxuZXhwb3J0IGNsYXNzIEFkaWVGb3JtQ29tcG9uZW50IHtcblx0YWRpZTogQWRpZTtcblx0ZXJyb3JNZXNzYWdlOiBzdHJpbmc7XG5cdGNvaG9ydHM6IG51bWJlcltdID0gWzAsMSwyLDMsNF07XG5cblx0Y29uc3RydWN0b3IoKSB7fVxuXG5cdHN1Ym1pdEZvcm0oKSB7XG5cdFx0Y29uc29sZS5sb2coJ0Zvcm0gc3VibWl0dGVkIScpO1xuXHR9XG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
