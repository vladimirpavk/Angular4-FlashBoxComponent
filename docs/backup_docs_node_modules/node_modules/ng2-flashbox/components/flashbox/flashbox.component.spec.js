"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
///<reference path="../../../../../../node_modules/@types/jasmine/index.d.ts" />
const testing_1 = require("@angular/core/testing");
const flashbox_component_js_1 = require("./flashbox.component.js");
describe('FlashBoxComponent first test', () => {
    let component;
    let fixture;
    let debugElement;
    beforeEach(testing_1.async(() => {
        testing_1.TestBed.configureTestingModule({
            declarations: [flashbox_component_js_1.FlashBoxComponent]
        }).compileComponents();
    }));
    beforeEach(() => {
        fixture = testing_1.TestBed.createComponent(flashbox_component_js_1.FlashBoxComponent);
        component = fixture.componentInstance;
        debugElement = fixture.debugElement;
        console.log(debugElement);
    });
    it('true is true', () => expect(true).toBe(true));
});

//# sourceMappingURL=flashbox.component.spec.js.map
