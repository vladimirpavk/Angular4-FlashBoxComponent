import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { FlashBoxComponent } from './modules/commoncomponents/components/flashbox/flashbox.component';

@Component({
  moduleId: module.id,
  selector: 'my-app',
  templateUrl: 'app.component.html'
})
export class AppComponent implements OnInit{ 

  private vrednost: boolean = true;

  private Button_clicked(): void{
    //Angular 4 feature
    this.vrednost=!this.vrednost;
  }

  ngOnInit(){      
  }

  private fb1: FlashBoxComponent;

}