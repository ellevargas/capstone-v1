System.register(['angular2/core', 'angular2/http', 'angular2/router', '../services/adie.service', './adie-form.component'], function(exports_1, context_1) {
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
    var core_1, http_1, router_1, adie_service_1, adie_form_component_1;
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
            function (adie_form_component_1_1) {
                adie_form_component_1 = adie_form_component_1_1;
            }],
        execute: function() {
            AdieDetailComponent = (function () {
                function AdieDetailComponent(_adieService, _routeParams) {
                    this._adieService = _adieService;
                    this._routeParams = _routeParams;
                }
                AdieDetailComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    var id = +this._routeParams.get('id');
                    this._adieService.getAdie(id)
                        .subscribe(function (adie) {
                        _this.adie = adie;
                    }, function (error) { return _this.errorMessage = error; });
                };
                AdieDetailComponent = __decorate([
                    core_1.Component({
                        selector: 'adie-detail',
                        template: "\n\t\t<div *ngIf=\"adie\">\n\t\t\t<h2>{{adie.name}} details</h2>\n\t\t\t<p>{{ adie | json }}</p>\n\t    <div><label>id: </label>{{adie.id}}</div>\n\t    <adie-form [adie]=\"adie\"></adie-form>\n\t  </div>\n    <div class=\"error\" *ngIf=\"errorMessage\">{{errorMessage}}</div>\n\t",
                        // inputs: ['adie'],
                        providers: [http_1.HTTP_PROVIDERS, adie_service_1.AdieService],
                        directives: [adie_form_component_1.AdieFormComponent]
                    }), 
                    __metadata('design:paramtypes', [adie_service_1.AdieService, router_1.RouteParams])
                ], AdieDetailComponent);
                return AdieDetailComponent;
            }());
            exports_1("AdieDetailComponent", AdieDetailComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb21wb25lbnRzL2FkaWUtZGV0YWlsLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQXlCQTtnQkFJQyw2QkFDUyxZQUF5QixFQUN6QixZQUF5QjtvQkFEekIsaUJBQVksR0FBWixZQUFZLENBQWE7b0JBQ3pCLGlCQUFZLEdBQVosWUFBWSxDQUFhO2dCQUFHLENBQUM7Z0JBRXRDLHNDQUFRLEdBQVI7b0JBQUEsaUJBUUU7b0JBUEMsSUFBSSxFQUFFLEdBQUcsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztvQkFDdEMsSUFBSSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDO3lCQUMxQixTQUFTLENBQ1osVUFBQSxJQUFJO3dCQUNILEtBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO29CQUNsQixDQUFDLEVBQ0QsVUFBQSxLQUFLLElBQUksT0FBQSxLQUFJLENBQUMsWUFBWSxHQUFRLEtBQUssRUFBOUIsQ0FBOEIsQ0FBQyxDQUFDO2dCQUMzQyxDQUFDO2dCQWhDSDtvQkFBQyxnQkFBUyxDQUFFO3dCQUNYLFFBQVEsRUFBRSxhQUFhO3dCQUN2QixRQUFRLEVBQUUsMFJBUVQ7d0JBQ0Qsb0JBQW9CO3dCQUNuQixTQUFTLEVBQUUsQ0FBQyxxQkFBYyxFQUFFLDBCQUFXLENBQUM7d0JBQ3hDLFVBQVUsRUFBRSxDQUFDLHVDQUFpQixDQUFDO3FCQUNoQyxDQUFDOzt1Q0FBQTtnQkFtQkYsMEJBQUM7WUFBRCxDQWpCQSxBQWlCQyxJQUFBO1lBakJELHFEQWlCQyxDQUFBIiwiZmlsZSI6ImFwcC9jb21wb25lbnRzL2FkaWUtZGV0YWlsLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5pbXBvcnQgeyBIVFRQX1BST1ZJREVSUyB9ICAgIGZyb20gJ2FuZ3VsYXIyL2h0dHAnO1xuaW1wb3J0IHsgUm91dGVQYXJhbXMgfSBmcm9tICdhbmd1bGFyMi9yb3V0ZXInO1xuXG4vLyBQcm9qZWN0IGltcG9ydHNcbmltcG9ydCB7IEFkaWUgfSBmcm9tICcuLi9tb2RlbHMvYWRpZSc7XG5pbXBvcnQgeyBBZGllU2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2VzL2FkaWUuc2VydmljZSc7XG5pbXBvcnQgeyBBZGllRm9ybUNvbXBvbmVudCB9IGZyb20gJy4vYWRpZS1mb3JtLmNvbXBvbmVudCc7XG5cbkBDb21wb25lbnQgKHtcblx0c2VsZWN0b3I6ICdhZGllLWRldGFpbCcsXG5cdHRlbXBsYXRlOiBgXG5cdFx0PGRpdiAqbmdJZj1cImFkaWVcIj5cblx0XHRcdDxoMj57e2FkaWUubmFtZX19IGRldGFpbHM8L2gyPlxuXHRcdFx0PHA+e3sgYWRpZSB8IGpzb24gfX08L3A+XG5cdCAgICA8ZGl2PjxsYWJlbD5pZDogPC9sYWJlbD57e2FkaWUuaWR9fTwvZGl2PlxuXHQgICAgPGFkaWUtZm9ybSBbYWRpZV09XCJhZGllXCI+PC9hZGllLWZvcm0+XG5cdCAgPC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cImVycm9yXCIgKm5nSWY9XCJlcnJvck1lc3NhZ2VcIj57e2Vycm9yTWVzc2FnZX19PC9kaXY+XG5cdGAsXG5cdC8vIGlucHV0czogWydhZGllJ10sXG4gIHByb3ZpZGVyczogW0hUVFBfUFJPVklERVJTLCBBZGllU2VydmljZV0sXG4gIGRpcmVjdGl2ZXM6IFtBZGllRm9ybUNvbXBvbmVudF1cbn0pXG5cbmV4cG9ydCBjbGFzcyBBZGllRGV0YWlsQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblx0YWRpZTogQWRpZTtcblx0ZXJyb3JNZXNzYWdlOiBzdHJpbmc7XG5cblx0Y29uc3RydWN0b3IoXG5cdFx0cHJpdmF0ZSBfYWRpZVNlcnZpY2U6IEFkaWVTZXJ2aWNlLCBcblx0XHRwcml2YXRlIF9yb3V0ZVBhcmFtczogUm91dGVQYXJhbXMgKXt9XG5cblx0bmdPbkluaXQoKSB7XG4gICAgbGV0IGlkID0gK3RoaXMuX3JvdXRlUGFyYW1zLmdldCgnaWQnKTtcbiAgICB0aGlzLl9hZGllU2VydmljZS5nZXRBZGllKGlkKVxuICAgICAgLnN1YnNjcmliZShcblx0XHRcdFx0YWRpZSA9PiB7IFxuXHRcdFx0XHRcdHRoaXMuYWRpZSA9IGFkaWU7XG5cdFx0XHRcdH0sXG5cdFx0XHRcdGVycm9yID0+IHRoaXMuZXJyb3JNZXNzYWdlID0gPGFueT5lcnJvcik7XG4gIH1cbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
