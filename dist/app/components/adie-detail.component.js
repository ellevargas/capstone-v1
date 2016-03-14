System.register(['angular2/core', 'angular2/http', 'angular2/router', '../services/adie.service', '../services/auth.service', './adie-form.component'], function(exports_1, context_1) {
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
    var core_1, http_1, router_1, adie_service_1, auth_service_1, adie_form_component_1;
    var AdieDetailComponent;
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
            },
            function (auth_service_1_1) {
                auth_service_1 = auth_service_1_1;
            },
            function (adie_form_component_1_1) {
                adie_form_component_1 = adie_form_component_1_1;
            }],
        execute: function() {
            AdieDetailComponent = (function () {
                function AdieDetailComponent(_adieService, _routeParams, _authService) {
                    this._adieService = _adieService;
                    this._routeParams = _routeParams;
                    this._authService = _authService;
                }
                AdieDetailComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    var id = +this._routeParams.get('id');
                    this.currentUserId = this._authService.getCurrentUserId();
                    this._adieService.getAdie(id)
                        .subscribe(function (adie) {
                        _this.adie = adie;
                    }, function (error) { return _this.errorMessage = error; });
                };
                AdieDetailComponent = __decorate([
                    core_1.Component({
                        selector: 'adie-detail',
                        template: "\n\t\t<div *ngIf=\"adie\">\n\t\t\t<h2>{{adie.name}} details</h2>\n\t\t\t<p>{{ adie | json }}</p>\n\t    <div><label>id: </label>{{adie.id}}</div>\n\t    <adie-form *ngIf=\"adie.id === currentUserId\" [adie]=\"adie\"></adie-form>\n\t  </div>\n    <div class=\"error\" *ngIf=\"errorMessage\">{{errorMessage}}</div>\n\t",
                        // inputs: ['adie'],
                        providers: [http_1.HTTP_PROVIDERS, adie_service_1.AdieService],
                        directives: [adie_form_component_1.AdieFormComponent]
                    }), 
                    __metadata('design:paramtypes', [adie_service_1.AdieService, router_1.RouteParams, auth_service_1.Auth0Service])
                ], AdieDetailComponent);
                return AdieDetailComponent;
            }());
            exports_1("AdieDetailComponent", AdieDetailComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb21wb25lbnRzL2FkaWUtZGV0YWlsLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQTBCQTtnQkFLQyw2QkFDUyxZQUF5QixFQUN6QixZQUF5QixFQUN6QixZQUEwQjtvQkFGMUIsaUJBQVksR0FBWixZQUFZLENBQWE7b0JBQ3pCLGlCQUFZLEdBQVosWUFBWSxDQUFhO29CQUN6QixpQkFBWSxHQUFaLFlBQVksQ0FBYztnQkFBRyxDQUFDO2dCQUV2QyxzQ0FBUSxHQUFSO29CQUFBLGlCQVNFO29CQVJDLElBQUksRUFBRSxHQUFHLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7b0JBQ3RDLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO29CQUMxRCxJQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUM7eUJBQzFCLFNBQVMsQ0FDWixVQUFBLElBQUk7d0JBQ0gsS0FBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7b0JBQ2xCLENBQUMsRUFDRCxVQUFBLEtBQUssSUFBSSxPQUFBLEtBQUksQ0FBQyxZQUFZLEdBQVEsS0FBSyxFQUE5QixDQUE4QixDQUFDLENBQUM7Z0JBQzNDLENBQUM7Z0JBbkNIO29CQUFDLGdCQUFTLENBQUU7d0JBQ1gsUUFBUSxFQUFFLGFBQWE7d0JBQ3ZCLFFBQVEsRUFBRSw4VEFRVDt3QkFDRCxvQkFBb0I7d0JBQ25CLFNBQVMsRUFBRSxDQUFDLHFCQUFjLEVBQUUsMEJBQVcsQ0FBQzt3QkFDeEMsVUFBVSxFQUFFLENBQUMsdUNBQWlCLENBQUM7cUJBQ2hDLENBQUM7O3VDQUFBO2dCQXNCRiwwQkFBQztZQUFELENBcEJBLEFBb0JDLElBQUE7WUFwQkQscURBb0JDLENBQUEiLCJmaWxlIjoiYXBwL2NvbXBvbmVudHMvYWRpZS1kZXRhaWwuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdhbmd1bGFyMi9jb3JlJztcbmltcG9ydCB7IEhUVFBfUFJPVklERVJTIH0gICAgZnJvbSAnYW5ndWxhcjIvaHR0cCc7XG5pbXBvcnQgeyBSb3V0ZVBhcmFtcyB9IGZyb20gJ2FuZ3VsYXIyL3JvdXRlcic7XG5cbi8vIFByb2plY3QgaW1wb3J0c1xuaW1wb3J0IHsgQWRpZSB9IGZyb20gJy4uL21vZGVscy9hZGllJztcbmltcG9ydCB7IEFkaWVTZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZXMvYWRpZS5zZXJ2aWNlJztcbmltcG9ydCB7IEF1dGgwU2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2VzL2F1dGguc2VydmljZSc7XG5pbXBvcnQgeyBBZGllRm9ybUNvbXBvbmVudCB9IGZyb20gJy4vYWRpZS1mb3JtLmNvbXBvbmVudCc7XG5cbkBDb21wb25lbnQgKHtcblx0c2VsZWN0b3I6ICdhZGllLWRldGFpbCcsXG5cdHRlbXBsYXRlOiBgXG5cdFx0PGRpdiAqbmdJZj1cImFkaWVcIj5cblx0XHRcdDxoMj57e2FkaWUubmFtZX19IGRldGFpbHM8L2gyPlxuXHRcdFx0PHA+e3sgYWRpZSB8IGpzb24gfX08L3A+XG5cdCAgICA8ZGl2PjxsYWJlbD5pZDogPC9sYWJlbD57e2FkaWUuaWR9fTwvZGl2PlxuXHQgICAgPGFkaWUtZm9ybSAqbmdJZj1cImFkaWUuaWQgPT09IGN1cnJlbnRVc2VySWRcIiBbYWRpZV09XCJhZGllXCI+PC9hZGllLWZvcm0+XG5cdCAgPC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cImVycm9yXCIgKm5nSWY9XCJlcnJvck1lc3NhZ2VcIj57e2Vycm9yTWVzc2FnZX19PC9kaXY+XG5cdGAsXG5cdC8vIGlucHV0czogWydhZGllJ10sXG4gIHByb3ZpZGVyczogW0hUVFBfUFJPVklERVJTLCBBZGllU2VydmljZV0sXG4gIGRpcmVjdGl2ZXM6IFtBZGllRm9ybUNvbXBvbmVudF1cbn0pXG5cbmV4cG9ydCBjbGFzcyBBZGllRGV0YWlsQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblx0YWRpZTogQWRpZTtcblx0ZXJyb3JNZXNzYWdlOiBzdHJpbmc7XG5cdGN1cnJlbnRVc2VySWQ6IG51bWJlcjtcblxuXHRjb25zdHJ1Y3Rvcihcblx0XHRwcml2YXRlIF9hZGllU2VydmljZTogQWRpZVNlcnZpY2UsIFxuXHRcdHByaXZhdGUgX3JvdXRlUGFyYW1zOiBSb3V0ZVBhcmFtcyxcblx0XHRwcml2YXRlIF9hdXRoU2VydmljZTogQXV0aDBTZXJ2aWNlICl7fVxuXG5cdG5nT25Jbml0KCkge1xuICAgIGxldCBpZCA9ICt0aGlzLl9yb3V0ZVBhcmFtcy5nZXQoJ2lkJyk7XG4gICAgdGhpcy5jdXJyZW50VXNlcklkID0gdGhpcy5fYXV0aFNlcnZpY2UuZ2V0Q3VycmVudFVzZXJJZCgpO1xuICAgIHRoaXMuX2FkaWVTZXJ2aWNlLmdldEFkaWUoaWQpXG4gICAgICAuc3Vic2NyaWJlKFxuXHRcdFx0XHRhZGllID0+IHsgXG5cdFx0XHRcdFx0dGhpcy5hZGllID0gYWRpZTtcblx0XHRcdFx0fSxcblx0XHRcdFx0ZXJyb3IgPT4gdGhpcy5lcnJvck1lc3NhZ2UgPSA8YW55PmVycm9yKTtcbiAgfVxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
