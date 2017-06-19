System.register(["@angular/core", "@angular/platform-browser", "./app.component", "./modules/commoncomponents/commoncomponents.module"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __moduleName = context_1 && context_1.id;
    var core_1, platform_browser_1, app_component_1, commoncomponents_module_1, AppModule;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (platform_browser_1_1) {
                platform_browser_1 = platform_browser_1_1;
            },
            function (app_component_1_1) {
                app_component_1 = app_component_1_1;
            },
            function (commoncomponents_module_1_1) {
                commoncomponents_module_1 = commoncomponents_module_1_1;
            }
        ],
        execute: function () {
            AppModule = class AppModule {
            };
            AppModule = __decorate([
                core_1.NgModule({
                    imports: [
                        commoncomponents_module_1.CommonComponentsModule,
                        platform_browser_1.BrowserModule
                    ],
                    declarations: [app_component_1.AppComponent],
                    bootstrap: [app_component_1.AppComponent]
                })
            ], AppModule);
            exports_1("AppModule", AppModule);
        }
    };
});

//# sourceMappingURL=app.module.js.map
