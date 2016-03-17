System.register(['angular2/core'], function(exports_1, context_1) {
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
    var core_1;
    var WelcomeComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            WelcomeComponent = (function () {
                function WelcomeComponent() {
                }
                WelcomeComponent.prototype.ngAfterViewInit = function () {
                    jQuery(".element").typed({
                        strings: ["learners", "builders", "developers", "students", "women", "gender non-binary", "Adies."],
                        typeSpeed: 30
                    });
                };
                WelcomeComponent = __decorate([
                    core_1.Component({
                        selector: 'welcome',
                        template: "\n\t<div class=\"row\">\n\t\t<div class=\"text-editor-wrap\">\n\t\t\t<div class=\"title-bar\">\n\t\t\t\t<span class=\"title\">bash</span>\t\n\t\t\t</div>\n\t\t\t<div class=\"text-body\">\n\t\t\t\t$ We are <span class=\"element\"></span>\n\t\t\t</div>\n\t\t</div>\n\t</div>\t\n\t",
                        styleUrls: ['app/assets/stylesheets/welcome.component.css']
                    }), 
                    __metadata('design:paramtypes', [])
                ], WelcomeComponent);
                return WelcomeComponent;
            }());
            exports_1("WelcomeComponent", WelcomeComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb21wb25lbnRzL3dlbGNvbWUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBcUJBO2dCQUVDO2dCQUFjLENBQUM7Z0JBRWYsMENBQWUsR0FBZjtvQkFDQyxNQUFNLENBQUMsVUFBVSxDQUFDLENBQUMsS0FBSyxDQUFDO3dCQUN4QixPQUFPLEVBQUUsQ0FBQyxVQUFVLEVBQUUsVUFBVSxFQUFFLFlBQVksRUFBRSxVQUFVLEVBQUUsT0FBTyxFQUFFLG1CQUFtQixFQUFFLFFBQVEsQ0FBQzt3QkFDbkcsU0FBUyxFQUFFLEVBQUU7cUJBQ2IsQ0FBQyxDQUFDO2dCQUNKLENBQUM7Z0JBMUJGO29CQUFDLGdCQUFTLENBQUM7d0JBQ1YsUUFBUSxFQUFFLFNBQVM7d0JBQ25CLFFBQVEsRUFBRSx3UkFXVDt3QkFDRCxTQUFTLEVBQUUsQ0FBQyw4Q0FBOEMsQ0FBQztxQkFDM0QsQ0FBQzs7b0NBQUE7Z0JBYUYsdUJBQUM7WUFBRCxDQVhBLEFBV0MsSUFBQTtZQVhELCtDQVdDLENBQUEiLCJmaWxlIjoiYXBwL2NvbXBvbmVudHMvd2VsY29tZS5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEFmdGVyVmlld0luaXQgfSBmcm9tICdhbmd1bGFyMi9jb3JlJztcblxuZGVjbGFyZSB2YXIgalF1ZXJ5OiBKUXVlcnlTdGF0aWM7XG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ3dlbGNvbWUnLFxuXHR0ZW1wbGF0ZTogYFxuXHQ8ZGl2IGNsYXNzPVwicm93XCI+XG5cdFx0PGRpdiBjbGFzcz1cInRleHQtZWRpdG9yLXdyYXBcIj5cblx0XHRcdDxkaXYgY2xhc3M9XCJ0aXRsZS1iYXJcIj5cblx0XHRcdFx0PHNwYW4gY2xhc3M9XCJ0aXRsZVwiPmJhc2g8L3NwYW4+XHRcblx0XHRcdDwvZGl2PlxuXHRcdFx0PGRpdiBjbGFzcz1cInRleHQtYm9keVwiPlxuXHRcdFx0XHQkIFdlIGFyZSA8c3BhbiBjbGFzcz1cImVsZW1lbnRcIj48L3NwYW4+XG5cdFx0XHQ8L2Rpdj5cblx0XHQ8L2Rpdj5cblx0PC9kaXY+XHRcblx0YCxcblx0c3R5bGVVcmxzOiBbJ2FwcC9hc3NldHMvc3R5bGVzaGVldHMvd2VsY29tZS5jb21wb25lbnQuY3NzJ11cbn0pXG5cbmV4cG9ydCBjbGFzcyBXZWxjb21lQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCB7XG5cblx0Y29uc3RydWN0b3IoKXt9XG5cblx0bmdBZnRlclZpZXdJbml0KCkge1xuXHRcdGpRdWVyeShcIi5lbGVtZW50XCIpLnR5cGVkKHtcblx0XHRcdHN0cmluZ3M6IFtcImxlYXJuZXJzXCIsIFwiYnVpbGRlcnNcIiwgXCJkZXZlbG9wZXJzXCIsIFwic3R1ZGVudHNcIiwgXCJ3b21lblwiLCBcImdlbmRlciBub24tYmluYXJ5XCIsIFwiQWRpZXMuXCJdLFxuXHRcdFx0dHlwZVNwZWVkOiAzMFxuXHRcdH0pO1xuXHR9XG5cbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
