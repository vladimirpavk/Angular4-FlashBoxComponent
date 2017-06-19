import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FlashBoxComponent }   from './components/flashbox/flashbox.component';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ FlashBoxComponent ],
  exports: [ BrowserModule, FlashBoxComponent ]
})
export class CommonComponentsModule { }