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
//# sourceMappingURL=adie-detail.component.js.map