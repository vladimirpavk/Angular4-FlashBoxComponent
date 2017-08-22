///<reference path="../../../../../../node_modules/@types/jasmine/index.d.ts" />
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { FlashBoxComponent } from './flashbox.component.js';

describe('FlashBoxComponent first test', ()=>{
    let component: FlashBoxComponent;
    let fixture: ComponentFixture<FlashBoxComponent>;

    beforeEach(()=>{
        TestBed.configureTestingModule({
            declarations: [FlashBoxComponent]
        });

        fixture=TestBed.createComponent(FlashBoxComponent);
        component=fixture.componentInstance;        

    });
});