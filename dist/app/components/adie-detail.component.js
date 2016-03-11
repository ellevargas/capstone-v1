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
                        template: "\n\t\t<div *ngIf=\"adie\">\n\t\t\t<h2>{{adie.name}} details</h2>\n\t    <div><label>id: </label>{{adie.id}}</div>\n\t    <div>\n\t        <label>name: </label>\n\t        <input [(ngModel)]=\"adie.name\" placeholder=\"name\"/>\n\t    </div>\n\t  </div>\n    <div class=\"error\" *ngIf=\"errorMessage\">{{errorMessage}}</div>\n\t",
                        inputs: ['adie'],
                        providers: [http_1.HTTP_PROVIDERS, adie_service_1.AdieService]
                    }), 
                    __metadata('design:paramtypes', [adie_service_1.AdieService, router_1.RouteParams])
                ], AdieDetailComponent);
                return AdieDetailComponent;
            }());
            exports_1("AdieDetailComponent", AdieDetailComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb21wb25lbnRzL2FkaWUtZGV0YWlsLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQXlCQTtnQkFJQyw2QkFDUyxZQUF5QixFQUN6QixZQUF5QjtvQkFEekIsaUJBQVksR0FBWixZQUFZLENBQWE7b0JBQ3pCLGlCQUFZLEdBQVosWUFBWSxDQUFhO2dCQUFHLENBQUM7Z0JBRXRDLHNDQUFRLEdBQVI7b0JBQUEsaUJBUUU7b0JBUEMsSUFBSSxFQUFFLEdBQUcsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztvQkFDdEMsSUFBSSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDO3lCQUMxQixTQUFTLENBQ1osVUFBQSxJQUFJO3dCQUNILEtBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO29CQUNsQixDQUFDLEVBQ0QsVUFBQSxLQUFLLElBQUksT0FBQSxLQUFJLENBQUMsWUFBWSxHQUFRLEtBQUssRUFBOUIsQ0FBOEIsQ0FBQyxDQUFDO2dCQUMzQyxDQUFDO2dCQWpDSDtvQkFBQyxnQkFBUyxDQUFFO3dCQUNYLFFBQVEsRUFBRSxhQUFhO3dCQUN2QixRQUFRLEVBQUUsMFVBVVQ7d0JBQ0QsTUFBTSxFQUFFLENBQUMsTUFBTSxDQUFDO3dCQUNmLFNBQVMsRUFBRSxDQUFDLHFCQUFjLEVBQUUsMEJBQVcsQ0FBQztxQkFDekMsQ0FBQzs7dUNBQUE7Z0JBbUJGLDBCQUFDO1lBQUQsQ0FqQkEsQUFpQkMsSUFBQTtZQWpCRCxxREFpQkMsQ0FBQSIsImZpbGUiOiJhcHAvY29tcG9uZW50cy9hZGllLWRldGFpbC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuaW1wb3J0IHsgSFRUUF9QUk9WSURFUlMgfSAgICBmcm9tICdhbmd1bGFyMi9odHRwJztcbmltcG9ydCB7IFJvdXRlUGFyYW1zIH0gZnJvbSAnYW5ndWxhcjIvcm91dGVyJztcblxuLy8gUHJvamVjdCBpbXBvcnRzXG5pbXBvcnQgeyBBZGllIH0gZnJvbSAnLi4vbW9kZWxzL2FkaWUnO1xuaW1wb3J0IHsgQWRpZVNlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlcy9hZGllLnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50ICh7XG5cdHNlbGVjdG9yOiAnYWRpZS1kZXRhaWwnLFxuXHR0ZW1wbGF0ZTogYFxuXHRcdDxkaXYgKm5nSWY9XCJhZGllXCI+XG5cdFx0XHQ8aDI+e3thZGllLm5hbWV9fSBkZXRhaWxzPC9oMj5cblx0ICAgIDxkaXY+PGxhYmVsPmlkOiA8L2xhYmVsPnt7YWRpZS5pZH19PC9kaXY+XG5cdCAgICA8ZGl2PlxuXHQgICAgICAgIDxsYWJlbD5uYW1lOiA8L2xhYmVsPlxuXHQgICAgICAgIDxpbnB1dCBbKG5nTW9kZWwpXT1cImFkaWUubmFtZVwiIHBsYWNlaG9sZGVyPVwibmFtZVwiLz5cblx0ICAgIDwvZGl2PlxuXHQgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJlcnJvclwiICpuZ0lmPVwiZXJyb3JNZXNzYWdlXCI+e3tlcnJvck1lc3NhZ2V9fTwvZGl2PlxuXHRgLFxuXHRpbnB1dHM6IFsnYWRpZSddLFxuICBwcm92aWRlcnM6IFtIVFRQX1BST1ZJREVSUywgQWRpZVNlcnZpY2VdXHRcbn0pXG5cbmV4cG9ydCBjbGFzcyBBZGllRGV0YWlsQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblx0YWRpZTogQWRpZTtcblx0ZXJyb3JNZXNzYWdlOiBzdHJpbmc7XG5cblx0Y29uc3RydWN0b3IoXG5cdFx0cHJpdmF0ZSBfYWRpZVNlcnZpY2U6IEFkaWVTZXJ2aWNlLCBcblx0XHRwcml2YXRlIF9yb3V0ZVBhcmFtczogUm91dGVQYXJhbXMgKXt9XG5cblx0bmdPbkluaXQoKSB7XG4gICAgbGV0IGlkID0gK3RoaXMuX3JvdXRlUGFyYW1zLmdldCgnaWQnKTtcbiAgICB0aGlzLl9hZGllU2VydmljZS5nZXRBZGllKGlkKVxuICAgICAgLnN1YnNjcmliZShcblx0XHRcdFx0YWRpZSA9PiB7IFxuXHRcdFx0XHRcdHRoaXMuYWRpZSA9IGFkaWU7XG5cdFx0XHRcdH0sXG5cdFx0XHRcdGVycm9yID0+IHRoaXMuZXJyb3JNZXNzYWdlID0gPGFueT5lcnJvcik7XG4gIH1cbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
