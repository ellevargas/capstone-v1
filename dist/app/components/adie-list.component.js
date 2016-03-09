System.register(['angular2/core', 'angular2/http', './adie-detail.component', '../services/adie.service'], function(exports_1, context_1) {
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
    var core_1, http_1, adie_detail_component_1, adie_service_1;
    var AdieListComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (adie_detail_component_1_1) {
                adie_detail_component_1 = adie_detail_component_1_1;
            },
            function (adie_service_1_1) {
                adie_service_1 = adie_service_1_1;
            }],
        execute: function() {
            AdieListComponent = (function () {
                function AdieListComponent(_adieService) {
                    this._adieService = _adieService;
                }
                AdieListComponent.prototype.ngOnInit = function () {
                    this.getAdies();
                };
                AdieListComponent.prototype.getAdies = function () {
                    var _this = this;
                    this._adieService.getAdies()
                        .subscribe(function (adies) { return _this.adies = adies; }, function (error) { return _this.errorMessage = error; });
                };
                AdieListComponent.prototype.onSelect = function (adie) {
                    this.selectedAdie = adie;
                };
                AdieListComponent = __decorate([
                    core_1.Component({
                        selector: "adie-list",
                        template: "\n\t<ul>\n\t\t<li *ngFor=\"#adie of adies\" (click)=\"onSelect(adie)\">\n\t\t\tName: {{ adie.name }} | Cohort: {{ adie.cohort }}\n\t\t</li>\n\t</ul>\n  <div *ngIf=\"selectedAdie\">\n      <adie-detail [selectedAdie]=\"selectedAdie\"></adie-detail>\n  </div>\n  <div class=\"error\" *ngIf=\"errorMessage\">{{errorMessage}}</div>\n  ",
                        directives: [adie_detail_component_1.AdieDetailComponent],
                        providers: [http_1.HTTP_PROVIDERS, adie_service_1.AdieService]
                    }), 
                    __metadata('design:paramtypes', [adie_service_1.AdieService])
                ], AdieListComponent);
                return AdieListComponent;
            }());
            exports_1("AdieListComponent", AdieListComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb21wb25lbnRzL2FkaWUtbGlzdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUE2QkE7Z0JBS0MsMkJBQW9CLFlBQXlCO29CQUF6QixpQkFBWSxHQUFaLFlBQVksQ0FBYTtnQkFDN0MsQ0FBQztnQkFFRCxvQ0FBUSxHQUFSO29CQUNDLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztnQkFDakIsQ0FBQztnQkFFRCxvQ0FBUSxHQUFSO29CQUFBLGlCQUtDO29CQUpBLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxFQUFFO3lCQUMxQixTQUFTLENBQ1YsVUFBQSxLQUFLLElBQUksT0FBQSxLQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssRUFBbEIsQ0FBa0IsRUFDMUIsVUFBQSxLQUFLLElBQUksT0FBQSxLQUFJLENBQUMsWUFBWSxHQUFRLEtBQUssRUFBOUIsQ0FBOEIsQ0FBQyxDQUFDO2dCQUM1QyxDQUFDO2dCQUVELG9DQUFRLEdBQVIsVUFBUyxJQUFVO29CQUNsQixJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQztnQkFDMUIsQ0FBQztnQkF0Q0Y7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDVixRQUFRLEVBQUUsV0FBVzt3QkFDckIsUUFBUSxFQUFFLDZVQVVSO3dCQUNELFVBQVUsRUFBRSxDQUFDLDJDQUFtQixDQUFDO3dCQUNqQyxTQUFTLEVBQUUsQ0FBQyxxQkFBYyxFQUFFLDBCQUFXLENBQUM7cUJBQ3pDLENBQUM7O3FDQUFBO2dCQXdCRix3QkFBQztZQUFELENBdEJBLEFBc0JDLElBQUE7WUF0QkQsaURBc0JDLENBQUEiLCJmaWxlIjoiYXBwL2NvbXBvbmVudHMvYWRpZS1saXN0LmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEFuZ3VsYXIgaW1wb3J0c1xuaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdhbmd1bGFyMi9jb3JlJztcbmltcG9ydCB7IEhUVFBfUFJPVklERVJTIH0gICAgZnJvbSAnYW5ndWxhcjIvaHR0cCc7XG5cbi8vIFJ4anMgaW1wb3J0c1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMvT2JzZXJ2YWJsZSc7XG5cbi8vIFByb2plY3QgaW1wb3J0c1xuaW1wb3J0IHsgQWRpZURldGFpbENvbXBvbmVudCB9IGZyb20gJy4vYWRpZS1kZXRhaWwuY29tcG9uZW50JztcbmltcG9ydCB7IEFkaWUgfSBmcm9tICcuLi9tb2RlbHMvYWRpZSc7XG5pbXBvcnQgeyBBZGllU2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2VzL2FkaWUuc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogXCJhZGllLWxpc3RcIixcblx0dGVtcGxhdGU6IGBcblx0PHVsPlxuXHRcdDxsaSAqbmdGb3I9XCIjYWRpZSBvZiBhZGllc1wiIChjbGljayk9XCJvblNlbGVjdChhZGllKVwiPlxuXHRcdFx0TmFtZToge3sgYWRpZS5uYW1lIH19IHwgQ29ob3J0OiB7eyBhZGllLmNvaG9ydCB9fVxuXHRcdDwvbGk+XG5cdDwvdWw+XG4gIDxkaXYgKm5nSWY9XCJzZWxlY3RlZEFkaWVcIj5cbiAgICAgIDxhZGllLWRldGFpbCBbc2VsZWN0ZWRBZGllXT1cInNlbGVjdGVkQWRpZVwiPjwvYWRpZS1kZXRhaWw+XG4gIDwvZGl2PlxuICA8ZGl2IGNsYXNzPVwiZXJyb3JcIiAqbmdJZj1cImVycm9yTWVzc2FnZVwiPnt7ZXJyb3JNZXNzYWdlfX08L2Rpdj5cbiAgYCxcbiAgZGlyZWN0aXZlczogW0FkaWVEZXRhaWxDb21wb25lbnRdLFxuICBwcm92aWRlcnM6IFtIVFRQX1BST1ZJREVSUywgQWRpZVNlcnZpY2VdXHRcbn0pXG5cbmV4cG9ydCBjbGFzcyBBZGllTGlzdENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cdGVycm9yTWVzc2FnZTogc3RyaW5nO1x0XG5cdHB1YmxpYyBhZGllczogQWRpZVtdO1xuXHRwdWJsaWMgc2VsZWN0ZWRBZGllOiBBZGllO1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgX2FkaWVTZXJ2aWNlOiBBZGllU2VydmljZSkge1xuXHR9XG5cblx0bmdPbkluaXQoKSB7XG5cdFx0dGhpcy5nZXRBZGllcygpO1xuXHR9XG5cblx0Z2V0QWRpZXMoKSB7XG5cdFx0dGhpcy5fYWRpZVNlcnZpY2UuZ2V0QWRpZXMoKVxuXHRcdFx0LnN1YnNjcmliZShcblx0XHRcdGFkaWVzID0+IHRoaXMuYWRpZXMgPSBhZGllcyxcblx0XHQgIGVycm9yID0+IHRoaXMuZXJyb3JNZXNzYWdlID0gPGFueT5lcnJvcik7XG5cdH1cblxuXHRvblNlbGVjdChhZGllOiBBZGllKSB7XG5cdFx0dGhpcy5zZWxlY3RlZEFkaWUgPSBhZGllO1xuXHR9XG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
