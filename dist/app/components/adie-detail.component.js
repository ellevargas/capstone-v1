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
                    this.currentUserId = this._authService.getAdieId();
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb21wb25lbnRzL2FkaWUtZGV0YWlsLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQTBCQTtnQkFLQyw2QkFDUyxZQUF5QixFQUN6QixZQUF5QixFQUN6QixZQUEwQjtvQkFGMUIsaUJBQVksR0FBWixZQUFZLENBQWE7b0JBQ3pCLGlCQUFZLEdBQVosWUFBWSxDQUFhO29CQUN6QixpQkFBWSxHQUFaLFlBQVksQ0FBYztnQkFBRyxDQUFDO2dCQUV2QyxzQ0FBUSxHQUFSO29CQUFBLGlCQVNFO29CQVJDLElBQUksRUFBRSxHQUFHLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7b0JBQ3RDLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxTQUFTLEVBQUUsQ0FBQztvQkFDbkQsSUFBSSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDO3lCQUMxQixTQUFTLENBQ1osVUFBQSxJQUFJO3dCQUNILEtBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO29CQUNsQixDQUFDLEVBQ0QsVUFBQSxLQUFLLElBQUksT0FBQSxLQUFJLENBQUMsWUFBWSxHQUFRLEtBQUssRUFBOUIsQ0FBOEIsQ0FBQyxDQUFDO2dCQUMzQyxDQUFDO2dCQW5DSDtvQkFBQyxnQkFBUyxDQUFFO3dCQUNYLFFBQVEsRUFBRSxhQUFhO3dCQUN2QixRQUFRLEVBQUUsOFRBUVQ7d0JBQ0Qsb0JBQW9CO3dCQUNuQixTQUFTLEVBQUUsQ0FBQyxxQkFBYyxFQUFFLDBCQUFXLENBQUM7d0JBQ3hDLFVBQVUsRUFBRSxDQUFDLHVDQUFpQixDQUFDO3FCQUNoQyxDQUFDOzt1Q0FBQTtnQkFzQkYsMEJBQUM7WUFBRCxDQXBCQSxBQW9CQyxJQUFBO1lBcEJELHFEQW9CQyxDQUFBIiwiZmlsZSI6ImFwcC9jb21wb25lbnRzL2FkaWUtZGV0YWlsLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5pbXBvcnQgeyBIVFRQX1BST1ZJREVSUyB9ICAgIGZyb20gJ2FuZ3VsYXIyL2h0dHAnO1xuaW1wb3J0IHsgUm91dGVQYXJhbXMgfSBmcm9tICdhbmd1bGFyMi9yb3V0ZXInO1xuXG4vLyBQcm9qZWN0IGltcG9ydHNcbmltcG9ydCB7IEFkaWUgfSBmcm9tICcuLi9tb2RlbHMvYWRpZSc7XG5pbXBvcnQgeyBBZGllU2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2VzL2FkaWUuc2VydmljZSc7XG5pbXBvcnQgeyBBdXRoMFNlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlcy9hdXRoLnNlcnZpY2UnO1xuaW1wb3J0IHsgQWRpZUZvcm1Db21wb25lbnQgfSBmcm9tICcuL2FkaWUtZm9ybS5jb21wb25lbnQnO1xuXG5AQ29tcG9uZW50ICh7XG5cdHNlbGVjdG9yOiAnYWRpZS1kZXRhaWwnLFxuXHR0ZW1wbGF0ZTogYFxuXHRcdDxkaXYgKm5nSWY9XCJhZGllXCI+XG5cdFx0XHQ8aDI+e3thZGllLm5hbWV9fSBkZXRhaWxzPC9oMj5cblx0XHRcdDxwPnt7IGFkaWUgfCBqc29uIH19PC9wPlxuXHQgICAgPGRpdj48bGFiZWw+aWQ6IDwvbGFiZWw+e3thZGllLmlkfX08L2Rpdj5cblx0ICAgIDxhZGllLWZvcm0gKm5nSWY9XCJhZGllLmlkID09PSBjdXJyZW50VXNlcklkXCIgW2FkaWVdPVwiYWRpZVwiPjwvYWRpZS1mb3JtPlxuXHQgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJlcnJvclwiICpuZ0lmPVwiZXJyb3JNZXNzYWdlXCI+e3tlcnJvck1lc3NhZ2V9fTwvZGl2PlxuXHRgLFxuXHQvLyBpbnB1dHM6IFsnYWRpZSddLFxuICBwcm92aWRlcnM6IFtIVFRQX1BST1ZJREVSUywgQWRpZVNlcnZpY2VdLFxuICBkaXJlY3RpdmVzOiBbQWRpZUZvcm1Db21wb25lbnRdXG59KVxuXG5leHBvcnQgY2xhc3MgQWRpZURldGFpbENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cdGFkaWU6IEFkaWU7XG5cdGVycm9yTWVzc2FnZTogc3RyaW5nO1xuXHRjdXJyZW50VXNlcklkOiBudW1iZXI7XG5cblx0Y29uc3RydWN0b3IoXG5cdFx0cHJpdmF0ZSBfYWRpZVNlcnZpY2U6IEFkaWVTZXJ2aWNlLCBcblx0XHRwcml2YXRlIF9yb3V0ZVBhcmFtczogUm91dGVQYXJhbXMsXG5cdFx0cHJpdmF0ZSBfYXV0aFNlcnZpY2U6IEF1dGgwU2VydmljZSApe31cblxuXHRuZ09uSW5pdCgpIHtcbiAgICBsZXQgaWQgPSArdGhpcy5fcm91dGVQYXJhbXMuZ2V0KCdpZCcpO1xuICAgIHRoaXMuY3VycmVudFVzZXJJZCA9IHRoaXMuX2F1dGhTZXJ2aWNlLmdldEFkaWVJZCgpO1xuICAgIHRoaXMuX2FkaWVTZXJ2aWNlLmdldEFkaWUoaWQpXG4gICAgICAuc3Vic2NyaWJlKFxuXHRcdFx0XHRhZGllID0+IHsgXG5cdFx0XHRcdFx0dGhpcy5hZGllID0gYWRpZTtcblx0XHRcdFx0fSxcblx0XHRcdFx0ZXJyb3IgPT4gdGhpcy5lcnJvck1lc3NhZ2UgPSA8YW55PmVycm9yKTtcbiAgfVxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
