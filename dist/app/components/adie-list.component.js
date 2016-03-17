System.register(['angular2/core', 'angular2/http', 'angular2/router', '../services/adie.service'], function(exports_1, context_1) {
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
    var core_1, http_1, router_1, adie_service_1;
    var AdieListComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (adie_service_1_1) {
                adie_service_1 = adie_service_1_1;
            }],
        execute: function() {
            AdieListComponent = (function () {
                function AdieListComponent(_adieService, _router) {
                    this._adieService = _adieService;
                    this._router = _router;
                }
                AdieListComponent.prototype.ngOnInit = function () {
                    this.getAdies();
                };
                AdieListComponent.prototype.getAdies = function () {
                    var _this = this;
                    this._adieService.getAdies()
                        .subscribe(function (adies) { return _this.adies = adies; }, function (error) { return _this.errorMessage = error; });
                };
                AdieListComponent.prototype.gotoDetail = function (adie) {
                    this._router.navigate(['AdieDetail', { id: adie.id }]);
                };
                AdieListComponent = __decorate([
                    core_1.Component({
                        selector: "adie-list",
                        templateUrl: 'app/components/templates/adie-list.component.html',
                        providers: [http_1.HTTP_PROVIDERS, adie_service_1.AdieService]
                    }), 
                    __metadata('design:paramtypes', [adie_service_1.AdieService, router_1.Router])
                ], AdieListComponent);
                return AdieListComponent;
            }());
            exports_1("AdieListComponent", AdieListComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb21wb25lbnRzL2FkaWUtbGlzdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFrQkE7Z0JBSUMsMkJBQW9CLFlBQXlCLEVBQVUsT0FBZTtvQkFBbEQsaUJBQVksR0FBWixZQUFZLENBQWE7b0JBQVUsWUFBTyxHQUFQLE9BQU8sQ0FBUTtnQkFDdEUsQ0FBQztnQkFFRCxvQ0FBUSxHQUFSO29CQUNDLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztnQkFDakIsQ0FBQztnQkFFRCxvQ0FBUSxHQUFSO29CQUFBLGlCQUtDO29CQUpBLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxFQUFFO3lCQUMxQixTQUFTLENBQ1YsVUFBQSxLQUFLLElBQUksT0FBQSxLQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssRUFBbEIsQ0FBa0IsRUFDMUIsVUFBQSxLQUFLLElBQUksT0FBQSxLQUFJLENBQUMsWUFBWSxHQUFRLEtBQUssRUFBOUIsQ0FBOEIsQ0FBQyxDQUFDO2dCQUM1QyxDQUFDO2dCQUVELHNDQUFVLEdBQVYsVUFBVyxJQUFVO29CQUNwQixJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLFlBQVksRUFBRSxFQUFFLEVBQUUsRUFBRSxJQUFJLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDO2dCQUN4RCxDQUFDO2dCQTFCRjtvQkFBQyxnQkFBUyxDQUFDO3dCQUNWLFFBQVEsRUFBRSxXQUFXO3dCQUNyQixXQUFXLEVBQUUsbURBQW1EO3dCQUMvRCxTQUFTLEVBQUUsQ0FBQyxxQkFBYyxFQUFFLDBCQUFXLENBQUM7cUJBQ3pDLENBQUM7O3FDQUFBO2dCQXVCRix3QkFBQztZQUFELENBckJBLEFBcUJDLElBQUE7WUFyQkQsaURBcUJDLENBQUEiLCJmaWxlIjoiYXBwL2NvbXBvbmVudHMvYWRpZS1saXN0LmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEFuZ3VsYXIgaW1wb3J0c1xuaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdhbmd1bGFyMi9jb3JlJztcbmltcG9ydCB7IEhUVFBfUFJPVklERVJTIH0gICAgZnJvbSAnYW5ndWxhcjIvaHR0cCc7XG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdhbmd1bGFyMi9yb3V0ZXInO1xuXG4vLyBSeGpzIGltcG9ydHNcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzL09ic2VydmFibGUnO1xuXG4vLyBQcm9qZWN0IGltcG9ydHNcbmltcG9ydCB7IEFkaWUgfSBmcm9tICcuLi9tb2RlbHMvYWRpZSc7XG5pbXBvcnQgeyBBZGllU2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2VzL2FkaWUuc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogXCJhZGllLWxpc3RcIixcblx0dGVtcGxhdGVVcmw6ICdhcHAvY29tcG9uZW50cy90ZW1wbGF0ZXMvYWRpZS1saXN0LmNvbXBvbmVudC5odG1sJyxcbiAgcHJvdmlkZXJzOiBbSFRUUF9QUk9WSURFUlMsIEFkaWVTZXJ2aWNlXVx0XG59KVxuXG5leHBvcnQgY2xhc3MgQWRpZUxpc3RDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXHRlcnJvck1lc3NhZ2U6IHN0cmluZztcdFxuXHRwdWJsaWMgYWRpZXM6IEFkaWVbXTtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIF9hZGllU2VydmljZTogQWRpZVNlcnZpY2UsIHByaXZhdGUgX3JvdXRlcjogUm91dGVyKSB7XG5cdH1cblxuXHRuZ09uSW5pdCgpIHtcblx0XHR0aGlzLmdldEFkaWVzKCk7XG5cdH1cblxuXHRnZXRBZGllcygpIHtcblx0XHR0aGlzLl9hZGllU2VydmljZS5nZXRBZGllcygpXG5cdFx0XHQuc3Vic2NyaWJlKFxuXHRcdFx0YWRpZXMgPT4gdGhpcy5hZGllcyA9IGFkaWVzLFxuXHRcdCAgZXJyb3IgPT4gdGhpcy5lcnJvck1lc3NhZ2UgPSA8YW55PmVycm9yKTtcblx0fVxuXG5cdGdvdG9EZXRhaWwoYWRpZTogQWRpZSkge1xuXHRcdHRoaXMuX3JvdXRlci5uYXZpZ2F0ZShbJ0FkaWVEZXRhaWwnLCB7IGlkOiBhZGllLmlkIH1dKTtcblx0fVxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
