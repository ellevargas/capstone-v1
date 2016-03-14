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
                };
                AdieFormComponent = __decorate([
                    core_1.Component({
                        selector: 'adie-form',
                        templateUrl: 'app/components/templates/adie-form.component.html',
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb21wb25lbnRzL2FkaWUtZm9ybS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFnQkE7Z0JBS0MsMkJBQ1MsWUFBeUIsRUFDekIsWUFBMEI7b0JBRDFCLGlCQUFZLEdBQVosWUFBWSxDQUFhO29CQUN6QixpQkFBWSxHQUFaLFlBQVksQ0FBYztvQkFKbkMsWUFBTyxHQUFhLENBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUlPLENBQUM7Z0JBRXhDLHNDQUFVLEdBQVY7b0JBQUEsaUJBT0M7b0JBTkEsSUFBSSxDQUFDLFlBQVksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQzt5QkFDckMsU0FBUyxDQUNULFVBQUEsSUFBSTt3QkFDSCxLQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztvQkFDbEIsQ0FBQyxFQUNELFVBQUEsS0FBSyxJQUFJLE9BQUEsS0FBSSxDQUFDLFlBQVksR0FBUSxLQUFLLEVBQTlCLENBQThCLENBQUMsQ0FBQztnQkFDNUMsQ0FBQztnQkF0QkY7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDVixRQUFRLEVBQUUsV0FBVzt3QkFDckIsV0FBVyxFQUFFLG1EQUFtRDt3QkFDaEUsTUFBTSxFQUFFLENBQUMsTUFBTSxDQUFDO3FCQUNoQixDQUFDOztxQ0FBQTtnQkFtQkYsd0JBQUM7WUFBRCxDQWpCQSxBQWlCQyxJQUFBO1lBakJELGlEQWlCQyxDQUFBIiwiZmlsZSI6ImFwcC9jb21wb25lbnRzL2FkaWUtZm9ybS5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdhbmd1bGFyMi9jb3JlJztcbmltcG9ydCB7IE5nRm9ybSB9IGZyb20gJ2FuZ3VsYXIyL2NvbW1vbic7XG5pbXBvcnQgeyBIVFRQX1BST1ZJREVSUyB9ICAgIGZyb20gJ2FuZ3VsYXIyL2h0dHAnO1xuaW1wb3J0IHsgQWRpZVNlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlcy9hZGllLnNlcnZpY2UnO1xuaW1wb3J0IHsgQXV0aDBTZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZXMvYXV0aC5zZXJ2aWNlJztcblxuXG4vLyBQcm9qZWN0IGltcG9ydHNcbmltcG9ydCB7IEFkaWUgfSBmcm9tICcuLi9tb2RlbHMvYWRpZSc7XG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ2FkaWUtZm9ybScsXG5cdHRlbXBsYXRlVXJsOiAnYXBwL2NvbXBvbmVudHMvdGVtcGxhdGVzL2FkaWUtZm9ybS5jb21wb25lbnQuaHRtbCcsXG5cdGlucHV0czogWydhZGllJ10sXG59KVxuXG5leHBvcnQgY2xhc3MgQWRpZUZvcm1Db21wb25lbnQge1xuXHRhZGllOiBBZGllO1xuXHRlcnJvck1lc3NhZ2U6IHN0cmluZztcblx0Y29ob3J0czogbnVtYmVyW10gPSBbMCwxLDIsMyw0XTtcblxuXHRjb25zdHJ1Y3Rvcihcblx0XHRwcml2YXRlIF9hZGllU2VydmljZTogQWRpZVNlcnZpY2UsIFxuXHRcdHByaXZhdGUgX2F1dGhTZXJ2aWNlOiBBdXRoMFNlcnZpY2UpIHsgfVxuXG5cdHN1Ym1pdEZvcm0oKSB7XG5cdFx0dGhpcy5fYWRpZVNlcnZpY2UudXBkYXRlQWRpZSh0aGlzLmFkaWUpXG5cdFx0XHQuc3Vic2NyaWJlKFxuXHRcdFx0XHRhZGllID0+IHtcblx0XHRcdFx0XHR0aGlzLmFkaWUgPSBhZGllO1xuXHRcdFx0XHR9LFxuXHRcdFx0XHRlcnJvciA9PiB0aGlzLmVycm9yTWVzc2FnZSA9IDxhbnk+ZXJyb3IpOyBcblx0fVxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
