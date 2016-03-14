System.register(['angular2/core', '../services/adie.service', '../services/auth.service'], function(exports_1, context_1) {
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
    var core_1, adie_service_1, auth_service_1;
    var AdieFormComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (adie_service_1_1) {
                adie_service_1 = adie_service_1_1;
            },
            function (auth_service_1_1) {
                auth_service_1 = auth_service_1_1;
            }],
        execute: function() {
            AdieFormComponent = (function () {
                function AdieFormComponent(_adieService, _authService) {
                    this._adieService = _adieService;
                    this._authService = _authService;
                    this.cohorts = [0, 1, 2, 3, 4];
                }
                AdieFormComponent.prototype.submitForm = function () {
                    var _this = this;
                    this._adieService.updateAdie(this.adie)
                        .subscribe(function (adie) {
                        _this.adie = adie;
                    }, function (error) { return _this.errorMessage = error; });
                    console.log('Form submitted!');
                };
                AdieFormComponent = __decorate([
                    core_1.Component({
                        selector: 'adie-form',
                        templateUrl: 'app/views/adie-form.component.html',
                        inputs: ['adie'],
                    }), 
                    __metadata('design:paramtypes', [adie_service_1.AdieService, auth_service_1.Auth0Service])
                ], AdieFormComponent);
                return AdieFormComponent;
            }());
            exports_1("AdieFormComponent", AdieFormComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb21wb25lbnRzL2FkaWUtZm9ybS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFnQkE7Z0JBS0MsMkJBQ1MsWUFBeUIsRUFDekIsWUFBMEI7b0JBRDFCLGlCQUFZLEdBQVosWUFBWSxDQUFhO29CQUN6QixpQkFBWSxHQUFaLFlBQVksQ0FBYztvQkFKbkMsWUFBTyxHQUFhLENBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUlPLENBQUM7Z0JBRXhDLHNDQUFVLEdBQVY7b0JBQUEsaUJBUUM7b0JBUEEsSUFBSSxDQUFDLFlBQVksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQzt5QkFDckMsU0FBUyxDQUNULFVBQUEsSUFBSTt3QkFDSCxLQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztvQkFDbEIsQ0FBQyxFQUNELFVBQUEsS0FBSyxJQUFJLE9BQUEsS0FBSSxDQUFDLFlBQVksR0FBUSxLQUFLLEVBQTlCLENBQThCLENBQUMsQ0FBQztvQkFDM0MsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO2dCQUNoQyxDQUFDO2dCQXZCRjtvQkFBQyxnQkFBUyxDQUFDO3dCQUNWLFFBQVEsRUFBRSxXQUFXO3dCQUNyQixXQUFXLEVBQUUsb0NBQW9DO3dCQUNqRCxNQUFNLEVBQUUsQ0FBQyxNQUFNLENBQUM7cUJBQ2hCLENBQUM7O3FDQUFBO2dCQW9CRix3QkFBQztZQUFELENBbEJBLEFBa0JDLElBQUE7WUFsQkQsaURBa0JDLENBQUEiLCJmaWxlIjoiYXBwL2NvbXBvbmVudHMvYWRpZS1mb3JtLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuaW1wb3J0IHsgTmdGb3JtIH0gZnJvbSAnYW5ndWxhcjIvY29tbW9uJztcbmltcG9ydCB7IEhUVFBfUFJPVklERVJTIH0gICAgZnJvbSAnYW5ndWxhcjIvaHR0cCc7XG5pbXBvcnQgeyBBZGllU2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2VzL2FkaWUuc2VydmljZSc7XG5pbXBvcnQgeyBBdXRoMFNlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlcy9hdXRoLnNlcnZpY2UnO1xuXG5cbi8vIFByb2plY3QgaW1wb3J0c1xuaW1wb3J0IHsgQWRpZSB9IGZyb20gJy4uL21vZGVscy9hZGllJztcblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnYWRpZS1mb3JtJyxcblx0dGVtcGxhdGVVcmw6ICdhcHAvdmlld3MvYWRpZS1mb3JtLmNvbXBvbmVudC5odG1sJyxcblx0aW5wdXRzOiBbJ2FkaWUnXSxcbn0pXG5cbmV4cG9ydCBjbGFzcyBBZGllRm9ybUNvbXBvbmVudCB7XG5cdGFkaWU6IEFkaWU7XG5cdGVycm9yTWVzc2FnZTogc3RyaW5nO1xuXHRjb2hvcnRzOiBudW1iZXJbXSA9IFswLDEsMiwzLDRdO1xuXG5cdGNvbnN0cnVjdG9yKFxuXHRcdHByaXZhdGUgX2FkaWVTZXJ2aWNlOiBBZGllU2VydmljZSwgXG5cdFx0cHJpdmF0ZSBfYXV0aFNlcnZpY2U6IEF1dGgwU2VydmljZSkgeyB9XG5cblx0c3VibWl0Rm9ybSgpIHtcblx0XHR0aGlzLl9hZGllU2VydmljZS51cGRhdGVBZGllKHRoaXMuYWRpZSlcblx0XHRcdC5zdWJzY3JpYmUoXG5cdFx0XHRcdGFkaWUgPT4ge1xuXHRcdFx0XHRcdHRoaXMuYWRpZSA9IGFkaWU7XG5cdFx0XHRcdH0sXG5cdFx0XHRcdGVycm9yID0+IHRoaXMuZXJyb3JNZXNzYWdlID0gPGFueT5lcnJvcik7IFxuXHRcdGNvbnNvbGUubG9nKCdGb3JtIHN1Ym1pdHRlZCEnKTtcblx0fVxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
