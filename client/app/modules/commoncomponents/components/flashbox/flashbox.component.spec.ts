///<reference path="../../../../../../node_modules/@types/jasmine/index.d.ts" />
import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { FlashBoxComponent } from './flashbox.component.js';

describe('FlashBoxComponent first test', ()=>{
    let component: FlashBoxComponent;
    let fixture: ComponentFixture<FlashBoxComponent>;
    let debugElement: DebugElement;

    beforeEach(async(()=>{
        TestBed.configureTestingModule({
            declarations: [FlashBoxComponent]
        }).compileComponents();
     }));   

    beforeEach(()=>{
        fixture=TestBed.createComponent(FlashBoxComponent);
        component=fixture.componentInstance;   
        debugElement=fixture.debugElement;

        console.log(debugElement);     
    });
    
    it('true is true', () => expect(true).toBe(true));
});