///<reference path="../../../../../../node_modules/@types/jasmine/index.d.ts" />

/*describe('1st tests', () => {
  it('true is true', () => expect(true).toBe(true));
});*/

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { FlashBoxComponent } from './flashbox.component';

describe('FlashBoxComponent', ()=>{
    let component: FlashBoxComponent;
    let fixture: ComponentFixture<FlashBoxComponent>;

    beforeEach(()=>{
        TestBed.configureTestingModule({
            declarations: [FlashBoxComponent]
        });

        fixture=TestBed.createComponent(FlashBoxComponent);
        component=fixture.componentInstance;        

    });
})