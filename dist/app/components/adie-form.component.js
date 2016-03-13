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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb21wb25lbnRzL2FkaWUtZm9ybS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFZQTtnQkFHQztnQkFBZSxDQUFDO2dCQUdmLHNCQUFJLHlDQUFVO29CQURmLG9DQUFvQzt5QkFDbkMsY0FBbUIsTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQzs7O21CQUFBO2dCQVp4RDtvQkFBQyxnQkFBUyxDQUFDO3dCQUNWLFFBQVEsRUFBRSxXQUFXO3dCQUNyQixXQUFXLEVBQUUsb0NBQW9DO3dCQUNqRCxNQUFNLEVBQUUsQ0FBQyxNQUFNLENBQUM7cUJBQ2hCLENBQUM7O3FDQUFBO2dCQVNGLHdCQUFDO1lBQUQsQ0FQQSxBQU9DLElBQUE7WUFQRCxpREFPQyxDQUFBIiwiZmlsZSI6ImFwcC9jb21wb25lbnRzL2FkaWUtZm9ybS5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdhbmd1bGFyMi9jb3JlJztcbmltcG9ydCB7IE5nRm9ybSB9IGZyb20gJ2FuZ3VsYXIyL2NvbW1vbic7XG5cbi8vIFByb2plY3QgaW1wb3J0c1xuaW1wb3J0IHsgQWRpZSB9IGZyb20gJy4uL21vZGVscy9hZGllJztcblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnYWRpZS1mb3JtJyxcblx0dGVtcGxhdGVVcmw6ICdhcHAvdmlld3MvYWRpZS1mb3JtLmNvbXBvbmVudC5odG1sJyxcblx0aW5wdXRzOiBbJ2FkaWUnXSxcbn0pXG5cbmV4cG9ydCBjbGFzcyBBZGllRm9ybUNvbXBvbmVudCB7XG5cdGFkaWU6IEFkaWU7XG5cblx0Y29uc3RydWN0b3IoKSB7fVxuXG5cdC8vIFRPRE86IFJlbW92ZSB0aGlzIHdoZW4gd2UncmUgZG9uZVxuICBnZXQgZGlhZ25vc3RpYygpIHsgcmV0dXJuIEpTT04uc3RyaW5naWZ5KHRoaXMuYWRpZSk7IH1cbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
