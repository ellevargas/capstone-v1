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
                        template: "\n\t\t<div class=\"text-editor-wrap\">\n\t\t\t<div class=\"title-bar\">\n\t\t\t\t<span class=\"title\">bash</span>\t\n\t\t\t</div>\n\t\t\t<div class=\"text-body\">\n\t\t\t\t$ We are <span class=\"element\"></span>\n\t\t\t</div>\n\t\t</div>\n\t",
                        styles: ["\n\t\t/* text editor styles */\n\t\t.text-editor-wrap {\n\t\t  display: block;\n\t\t  margin: auto;\n\t\t  max-width: 530px;\n\t\t  border-radius: 10px;\n\t\t  box-shadow: rgba(0, 0, 0, 0.8) 0px 20px 70px;\n\t\t  clear: both;\n\t\t  overflow: hidden;\n\t\t  -webkit-transition: all 0.5s ease-out;\n\t\t  -moz-transition: all 0.5s ease-out;\n\t\t  -ms-transition: all 0.5s ease-out;\n\t\t  -o-transition: all 0.5s ease-out;\n\t\t  transition: all 0.5s ease-out; }\n\n\t\t.title-bar {\n\t\t  padding: 5px 0;\n\t\t  font-family: \"Lucida Grande\", sans-serif;\n\t\t  font-size: 0.75em;\n\t\t  text-align: center;\n\t\t  text-shadow: rgba(255, 255, 255, 0.8) 0px 1px 0px;\n\t\t  background-color: #f8f8f8;\n\t\t  background-image: -webkit-linear-gradient(top, #e8e8e8, #bcbbbc);\n\t\t  background-image: -moz-linear-gradient(top, #e8e8e8, #bcbbbc);\n\t\t  background-image: linear-gradient(top, #e8e8e8, #bcbbbc);\n\t\t  box-shadow: inset rgba(255, 255, 255, 0.7) 0px 1px 1px;\n\t\t  border-bottom: #6a6a6a 1px solid; }\n\n\t\t.text-body {\n\t\t  height: 250px;\n\t\t  background-color: rgba(0, 0, 0, 0.85);\n\t\t  padding: 10px;\n\t\t  color: #f0f0f0;\n\t\t  text-shadow: #000 0px 1px 0px;\n\t\t  font-family: \"Consolas\", \"Courier New\", \"Courier\";\n\t\t  font-size: 1.75em;\n\t\t  line-height: 1.40em;\n\t\t  font-weight: 500;\n\t\t  text-align: left;\n\t\t  overflow: hidden;\n\t\t  -webkit-transition: all 0.5s ease-out;\n\t\t  -moz-transition: all 0.5s ease-out;\n\t\t  -ms-transition: all 0.5s ease-out;\n\t\t  -o-transition: all 0.5s ease-out;\n\t\t  transition: all 0.5s ease-out; }\n\t  \n\t\t/*typed cursor*/\n\t\t.typed-cursor{\n\t\t    opacity: 1;\n\t\t    font-weight: 100;\n\t\t    font-size: 30px;\n\t\t    -webkit-animation: blink 0.7s infinite;\n\t\t    -moz-animation: blink 0.7s infinite;\n\t\t    -ms-animation: blink 0.7s infinite;\n\t\t    -o-animation: blink 0.7s infinite;\n\t\t    animation: blink 0.7s infinite;\n\t\t}\n\t\t@keyframes blink{\n\t\t    0% { opacity:1; }\n\t\t    50% { opacity:0; }\n\t\t    100% { opacity:1; }\n\t\t}\n\t\t@-webkit-keyframes blink{\n\t\t    0% { opacity:1; }\n\t\t    50% { opacity:0; }\n\t\t    100% { opacity:1; }\n\t\t}\n\t\t@-moz-keyframes blink{\n\t\t    0% { opacity:1; }\n\t\t    50% { opacity:0; }\n\t\t    100% { opacity:1; }\n\t\t}\n.btn-wrap {\n\t"]
                    }), 
                    __metadata('design:paramtypes', [])
                ], WelcomeComponent);
                return WelcomeComponent;
            }());
            exports_1("WelcomeComponent", WelcomeComponent);
        }
    }
});
//# sourceMappingURL=welcome.component.js.map