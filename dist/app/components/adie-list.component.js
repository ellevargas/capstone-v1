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
                        .subscribe(function (adies) { _this.adies = adies; console.log(_this.adies); }, function (error) { return _this.errorMessage = error; });
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
//# sourceMappingURL=adie-list.component.js.map