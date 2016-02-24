System.register(['angular2/core', './adie-detail.component', '../services/adie.service'], function(exports_1, context_1) {
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
    var core_1, adie_detail_component_1, adie_service_1;
    var AdieListComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (adie_detail_component_1_1) {
                adie_detail_component_1 = adie_detail_component_1_1;
            },
            function (adie_service_1_1) {
                adie_service_1 = adie_service_1_1;
            }],
        execute: function() {
            AdieListComponent = (function () {
                function AdieListComponent(adieService) {
                    this.adies = adieService.getAdies();
                }
                AdieListComponent.prototype.onSelect = function (adie) {
                    this.selectedAdie = adie;
                };
                AdieListComponent = __decorate([
                    core_1.Component({
                        selector: "adie-list",
                        template: "\n\t<ul>\n\t\t<li *ngFor=\"#adie of adies\" (click)=\"onSelect(adie)\">\n\t\t\tName: {{ adie.name }} | Cohort: {{ adie.cohort }}\n\t\t</li>\n\t</ul>\n  <div *ngIf=\"selectedAdie\">\n      <adie-detail [selectedAdie]=\"selectedAdie\"></adie-detail>\n  </div>\n  ",
                        directives: [adie_detail_component_1.AdieDetailComponent]
                    }), 
                    __metadata('design:paramtypes', [adie_service_1.AdieService])
                ], AdieListComponent);
                return AdieListComponent;
            }());
            exports_1("AdieListComponent", AdieListComponent);
        }
    }
});
//# sourceMappingURL=adie-list.component.js.map