let __moduleName: any;

import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { FlashBoxComponent } from 'ng2-flashbox';


@Component({
  moduleId: __moduleName,
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

}