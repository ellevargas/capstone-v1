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
                    this.loading = true;
                }
                AdieListComponent.prototype.ngOnInit = function () {
                    this.getAdies();
                };
                AdieListComponent.prototype.getAdies = function () {
                    var _this = this;
                    this._adieService.getAdies()
                        .subscribe(function (adies) {
                        _this.loading = false;
                        _this.adies = adies;
                    }, function (error) { return _this.errorMessage = error; });
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb21wb25lbnRzL2FkaWUtbGlzdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFrQkE7Z0JBS0MsMkJBQW9CLFlBQXlCLEVBQVUsT0FBZTtvQkFBbEQsaUJBQVksR0FBWixZQUFZLENBQWE7b0JBQVUsWUFBTyxHQUFQLE9BQU8sQ0FBUTtvQkFIdEUsWUFBTyxHQUFZLElBQUksQ0FBQztnQkFJeEIsQ0FBQztnQkFFRCxvQ0FBUSxHQUFSO29CQUNDLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztnQkFDakIsQ0FBQztnQkFFRCxvQ0FBUSxHQUFSO29CQUFBLGlCQVFDO29CQVBBLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxFQUFFO3lCQUMxQixTQUFTLENBQ1YsVUFBQSxLQUFLO3dCQUNKLEtBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO3dCQUNyQixLQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztvQkFDcEIsQ0FBQyxFQUNBLFVBQUEsS0FBSyxJQUFJLE9BQUEsS0FBSSxDQUFDLFlBQVksR0FBUSxLQUFLLEVBQTlCLENBQThCLENBQUMsQ0FBQztnQkFDNUMsQ0FBQztnQkFFRCxzQ0FBVSxHQUFWLFVBQVcsSUFBVTtvQkFDcEIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxZQUFZLEVBQUUsRUFBRSxFQUFFLEVBQUUsSUFBSSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQztnQkFDeEQsQ0FBQztnQkE5QkY7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDVixRQUFRLEVBQUUsV0FBVzt3QkFDckIsV0FBVyxFQUFFLG1EQUFtRDt3QkFDL0QsU0FBUyxFQUFFLENBQUMscUJBQWMsRUFBRSwwQkFBVyxDQUFDO3FCQUN6QyxDQUFDOztxQ0FBQTtnQkEyQkYsd0JBQUM7WUFBRCxDQXpCQSxBQXlCQyxJQUFBO1lBekJELGlEQXlCQyxDQUFBIiwiZmlsZSI6ImFwcC9jb21wb25lbnRzL2FkaWUtbGlzdC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBBbmd1bGFyIGltcG9ydHNcbmltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5pbXBvcnQgeyBIVFRQX1BST1ZJREVSUyB9ICAgIGZyb20gJ2FuZ3VsYXIyL2h0dHAnO1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnYW5ndWxhcjIvcm91dGVyJztcblxuLy8gUnhqcyBpbXBvcnRzXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcy9PYnNlcnZhYmxlJztcblxuLy8gUHJvamVjdCBpbXBvcnRzXG5pbXBvcnQgeyBBZGllIH0gZnJvbSAnLi4vbW9kZWxzL2FkaWUnO1xuaW1wb3J0IHsgQWRpZVNlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlcy9hZGllLnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6IFwiYWRpZS1saXN0XCIsXG5cdHRlbXBsYXRlVXJsOiAnYXBwL2NvbXBvbmVudHMvdGVtcGxhdGVzL2FkaWUtbGlzdC5jb21wb25lbnQuaHRtbCcsXG4gIHByb3ZpZGVyczogW0hUVFBfUFJPVklERVJTLCBBZGllU2VydmljZV1cdFxufSlcblxuZXhwb3J0IGNsYXNzIEFkaWVMaXN0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblx0ZXJyb3JNZXNzYWdlOiBzdHJpbmc7XG5cdGxvYWRpbmc6IGJvb2xlYW4gPSB0cnVlO1x0XG5cdHB1YmxpYyBhZGllczogQWRpZVtdO1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgX2FkaWVTZXJ2aWNlOiBBZGllU2VydmljZSwgcHJpdmF0ZSBfcm91dGVyOiBSb3V0ZXIpIHtcblx0fVxuXG5cdG5nT25Jbml0KCkge1xuXHRcdHRoaXMuZ2V0QWRpZXMoKTtcblx0fVxuXG5cdGdldEFkaWVzKCkge1xuXHRcdHRoaXMuX2FkaWVTZXJ2aWNlLmdldEFkaWVzKClcblx0XHRcdC5zdWJzY3JpYmUoXG5cdFx0XHRhZGllcyA9PiB7IFxuXHRcdFx0XHR0aGlzLmxvYWRpbmcgPSBmYWxzZTtcblx0XHRcdFx0dGhpcy5hZGllcyA9IGFkaWVzOyBcblx0XHRcdH0sXG5cdFx0ICBlcnJvciA9PiB0aGlzLmVycm9yTWVzc2FnZSA9IDxhbnk+ZXJyb3IpO1xuXHR9XG5cblx0Z290b0RldGFpbChhZGllOiBBZGllKSB7XG5cdFx0dGhpcy5fcm91dGVyLm5hdmlnYXRlKFsnQWRpZURldGFpbCcsIHsgaWQ6IGFkaWUuaWQgfV0pO1xuXHR9XG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
