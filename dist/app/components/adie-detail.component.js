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
                    this.loading = true;
                }
                AdieDetailComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    var id = +this._routeParams.get('id');
                    this.currentUserId = this._authService.getCurrentUserId();
                    this._adieService.getAdie(id)
                        .subscribe(function (adie) {
                        _this.loading = false;
                        _this.adie = adie;
                    }, function (error) { return _this.errorMessage = error; });
                };
                AdieDetailComponent = __decorate([
                    core_1.Component({
                        selector: 'adie-detail',
                        templateUrl: 'app/components/templates/adie-detail.component.html',
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb21wb25lbnRzL2FkaWUtZGV0YWlsLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQWlCQTtnQkFNQyw2QkFDUyxZQUF5QixFQUN6QixZQUF5QixFQUN6QixZQUEwQjtvQkFGMUIsaUJBQVksR0FBWixZQUFZLENBQWE7b0JBQ3pCLGlCQUFZLEdBQVosWUFBWSxDQUFhO29CQUN6QixpQkFBWSxHQUFaLFlBQVksQ0FBYztvQkFMbkMsWUFBTyxHQUFZLElBQUksQ0FBQztnQkFNeEIsQ0FBQztnQkFFRCxzQ0FBUSxHQUFSO29CQUFBLGlCQVVFO29CQVRDLElBQUksRUFBRSxHQUFHLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7b0JBQ3RDLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO29CQUMxRCxJQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUM7eUJBQzFCLFNBQVMsQ0FDWixVQUFBLElBQUk7d0JBQ0gsS0FBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7d0JBQ3JCLEtBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO29CQUNsQixDQUFDLEVBQ0QsVUFBQSxLQUFLLElBQUksT0FBQSxLQUFJLENBQUMsWUFBWSxHQUFRLEtBQUssRUFBOUIsQ0FBOEIsQ0FBQyxDQUFDO2dCQUMzQyxDQUFDO2dCQTdCSDtvQkFBQyxnQkFBUyxDQUFFO3dCQUNYLFFBQVEsRUFBRSxhQUFhO3dCQUN2QixXQUFXLEVBQUUscURBQXFEO3dCQUNqRSxTQUFTLEVBQUUsQ0FBQyxxQkFBYyxFQUFFLDBCQUFXLENBQUM7d0JBQ3hDLFVBQVUsRUFBRSxDQUFDLHVDQUFpQixDQUFDO3FCQUNoQyxDQUFDOzt1Q0FBQTtnQkF5QkYsMEJBQUM7WUFBRCxDQXZCQSxBQXVCQyxJQUFBO1lBdkJELHFEQXVCQyxDQUFBIiwiZmlsZSI6ImFwcC9jb21wb25lbnRzL2FkaWUtZGV0YWlsLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5pbXBvcnQgeyBIVFRQX1BST1ZJREVSUyB9ICAgIGZyb20gJ2FuZ3VsYXIyL2h0dHAnO1xuaW1wb3J0IHsgUm91dGVQYXJhbXMgfSBmcm9tICdhbmd1bGFyMi9yb3V0ZXInO1xuXG4vLyBQcm9qZWN0IGltcG9ydHNcbmltcG9ydCB7IEFkaWUgfSBmcm9tICcuLi9tb2RlbHMvYWRpZSc7XG5pbXBvcnQgeyBBZGllU2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2VzL2FkaWUuc2VydmljZSc7XG5pbXBvcnQgeyBBdXRoMFNlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlcy9hdXRoLnNlcnZpY2UnO1xuaW1wb3J0IHsgQWRpZUZvcm1Db21wb25lbnQgfSBmcm9tICcuL2FkaWUtZm9ybS5jb21wb25lbnQnO1xuXG5AQ29tcG9uZW50ICh7XG5cdHNlbGVjdG9yOiAnYWRpZS1kZXRhaWwnLFxuXHR0ZW1wbGF0ZVVybDogJ2FwcC9jb21wb25lbnRzL3RlbXBsYXRlcy9hZGllLWRldGFpbC5jb21wb25lbnQuaHRtbCcsXG4gIHByb3ZpZGVyczogW0hUVFBfUFJPVklERVJTLCBBZGllU2VydmljZV0sXG4gIGRpcmVjdGl2ZXM6IFtBZGllRm9ybUNvbXBvbmVudF1cbn0pXG5cbmV4cG9ydCBjbGFzcyBBZGllRGV0YWlsQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblx0YWRpZTogQWRpZTtcblx0ZXJyb3JNZXNzYWdlOiBzdHJpbmc7XG5cdGN1cnJlbnRVc2VySWQ6IG51bWJlcjtcblx0bG9hZGluZzogYm9vbGVhbiA9IHRydWU7XG5cblx0Y29uc3RydWN0b3IoXG5cdFx0cHJpdmF0ZSBfYWRpZVNlcnZpY2U6IEFkaWVTZXJ2aWNlLCBcblx0XHRwcml2YXRlIF9yb3V0ZVBhcmFtczogUm91dGVQYXJhbXMsXG5cdFx0cHJpdmF0ZSBfYXV0aFNlcnZpY2U6IEF1dGgwU2VydmljZSApe1xuXHR9XG5cblx0bmdPbkluaXQoKSB7XG4gICAgbGV0IGlkID0gK3RoaXMuX3JvdXRlUGFyYW1zLmdldCgnaWQnKTtcbiAgICB0aGlzLmN1cnJlbnRVc2VySWQgPSB0aGlzLl9hdXRoU2VydmljZS5nZXRDdXJyZW50VXNlcklkKCk7XG4gICAgdGhpcy5fYWRpZVNlcnZpY2UuZ2V0QWRpZShpZClcbiAgICAgIC5zdWJzY3JpYmUoXG5cdFx0XHRcdGFkaWUgPT4geyBcblx0XHRcdFx0XHR0aGlzLmxvYWRpbmcgPSBmYWxzZTtcblx0XHRcdFx0XHR0aGlzLmFkaWUgPSBhZGllO1xuXHRcdFx0XHR9LFxuXHRcdFx0XHRlcnJvciA9PiB0aGlzLmVycm9yTWVzc2FnZSA9IDxhbnk+ZXJyb3IpO1xuICB9XG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
