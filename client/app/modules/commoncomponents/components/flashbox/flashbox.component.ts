import { Component, OnInit, Input, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs/rx';

let __moduleName: any;

@Component({
    moduleId: __moduleName,
    selector: 'flash-box',    
    templateUrl: 'flashbox.component.html',
    styleUrls: ['flashbox.component.css']
})
export class FlashBoxComponent implements OnInit{
   
    private isShown: boolean = false;
    //counter handler
    private intervalCounter: number = 0;
    private _timeOutCounter: number = 0;
    private _intervalCounterHandler: Observable<number>;

    //emit when message start showing up
    private _onStartVisible = new EventEmitter();
    //emit when message is completely visible
    private _onEndVisible = new EventEmitter();
    //emit when message start dissapearing
    private _onStartHidden = new EventEmitter();
    //emit when message is hidden
    private _onEndHidden = new EventEmitter();
    //emit when you try to show message that is already visible
    private _alreadyVisible = new EventEmitter();
    //emit when you try to hide message that is not visible   
    private _alreadyHidden = new EventEmitter();

    private _type: string = "primary";
    /**
     * Set type of flash box.
     * Available values: 
     * default, primary, success, info, warning, danger
     * Default value is primary. 
     */
    @Input("type")
    set type(value: string){
        this._type= value;
        this.setType();
    }
   
    private _position: string = "tr";
     /**
     * Set position of flash box.
     * Available values:
     * tr - top-right,
     * tm - top-middle,
     * tl - top-left,
     * cr - center-right,
     * cm - center-middle,
     * cl - center-left,
     * br - bottom-right,
     * bm - bottom-middle,
     * bl - bottom-left
     * Default value is tr. 
     */
    @Input("position")
    set position(value: string){
        this._position= value;
        this.setPosition();
    }
    
    private _maxwidth: string = "300px";
    /**
     * Specify component's maximum width.
     * Default value is 300 px.
     */
    @Input("maxwidth")
    set maxwidth(value: string){
        this._maxwidth= value;
    }
    
    private _setTimeout: number = 2000;    
    /**
     * Specify the amount of time the component is visible in ms. Default value is 2000ms.
     */
    @Input("setTimeout")
    set setTimeout(value : number){
        this._setTimeout= value;      
    }

    private style_type: boolean[] = [false, false, false, false, false, false];

    private style_position: boolean[] = [false, false, false, false, false, false, false, false, false];

    constructor(){
        //subscribe to events
        this._onStartVisible.subscribe(()=>{
            console.log("_onStartVisible event fired");
        });
        this._onEndVisible.subscribe(()=>{
            console.log("_onEndVisible event fired");
        });
        this._onStartHidden.subscribe(()=>{
            console.log("_onStartHidden event fired");
        });
        this._onEndHidden.subscribe(()=>{
            console.log("_onEndHidden event fired");
        });
        this._alreadyVisible.subscribe(()=>{
            console.log("_alreadyVisible event fired");            
        });
        this._alreadyHidden.subscribe(()=>{
            console.log("_alreadyHidden event fired");
        });
    }

    ngOnInit(){
        this.setType();
        this.setPosition();
    }    

    private setType(): void{
        switch(this._type){
            case "default":
            {            
                this.style_type= [true, false, false, false, false, false];
                break;
            };
            case "primary":
            {
                this.style_type= [false, true, false, false, false, false];                
                break;
            };
            case "success":
            {
                this.style_type= [false, false, true, false, false, false];                
                break;
            };
            case "info":
            {
                this.style_type= [false, false, false, true, false, false];                
                break;
            };
            case "warning":
            {
                this.style_type= [false, false, false, false, true, false];               
                break;                
            };
            case "danger":
            {
                this.style_type= [false, false, false, false, false, true];               
                break;
            }
        }
    }

    private setPosition(): void{
        switch(this._position){
            case "tr":{
                this.style_position= [true, false, false, false, false, false, false, false, false];               
                break;
            };
            case "tm":{
                this.style_position= [false, true, false, false, false, false, false, false, false];                             
                break;
            };
            case "tl":{
                this.style_position= [false, false, true, false, false, false, false, false, false];                
                break;
            };
            case "cr":{
                this.style_position= [false, false, false, true, false, false, false, false, false];                
                break;
            };
            case "cm":{
                 this.style_position= [false, false, false, false, true, false, false, false, false];              
                break;
            };
            case "cl":{
                this.style_position= [false, false, false, false, false, true, false, false, false];                
                break;
            };
            case "br":{
                this.style_position= [false, false, false, false, false, false, true, false, false];                
                break;
            };
            case "bm":{
                this.style_position= [false, false, false, false, false, false, false, true, false];                 
                break;
            };
            case "bl":{
                this.style_position= [false, false, false, false, false, false, false, false, true];                 
                break;
            };
        }
    }
    /**
     * Use this method to show/hide message
     */
    public toggle(): void{
        if(this.isShown) this.hide();
        else this.show();
    }        
    /**
     * Use this method to show message.
     * Message will be visible until hide() method is called.
     */
    public show(): void{
        if(this.isShown || this.intervalCounter!=0)
        {
            //message is already visible or blinking, do nothing
            this._alreadyVisible.emit();
        }
        else{
            this._onStartVisible.emit();
            this.isShown=true;
            setTimeout(()=>{
                this._onEndVisible.emit();
            }, 500);
        }
    }
    /**
     * Use this method to hide message.
     * Message will be hidden until show() method is called.
     */
    public hide(): void{
        if(!this.isShown || this.intervalCounter!=0)
        {
            //message is already hidden or blinking, do nothing 
            this._alreadyHidden.emit();
            return;
        }
       
        this._onStartHidden.emit();
        this.isShown=false;
        setTimeout(()=>{
              this._onEndHidden.emit();
        },500);
           
    }
     /**
     * Use this method to show message only once.
     * Message will appear and then disappear.
     */   
    public flashOnce(): void{
        if(this.isShown)
        {
            //message is already visible, do nothing
            this._alreadyVisible.emit();
            return;
        }
             
        this.show();
        setTimeout(()=>this.hide(), this._setTimeout);
    }
    /**
     * Use this method to start message flashing.
     * Message will be flashing until stopFlashing() method is called.
     */
    public startFlashing(): void{
        //if already blinking or shown do nothing
        //message must be hidden to start flashing
        if(this.intervalCounter!=0 || this.isShown){
            this._alreadyVisible.emit();
            return;
        }
        
        console.log("Start Flashing");
        /*this.show();
        setTimeout(()=>{
            this.intervalCounter=setInterval(()=>this.toggle(), this._setTimeout);
        }, 2600);        */        
        this._intervalCounterHandler=Observable.timer(0, parseInt(this._setTimeout)+1000);
        this._intervalCounterHandler.subscribe((num)=>{
            this.toggle();
        });
    }
    /**
     * Use this method to stop message flashing.
     * Message will be stopped until startFlashing() method is called.
     */
    public stopFlashing(): void{       
         this._intervalCounterHandler.
    }

    /**
     * Use this method to start message flashing for predefined number of times. 
     */
    public flashTimes(numOfTimes: number): void{
        if(this.intervalCounter!=0 || this.isShown){
            this._alreadyVisible.emit();
            return;
        }            

        this._onEndHidden.subscribe(()=>{
            if(counter!=numOfTimes){
                this.flashOnce();
                counter++;
            }                  
        });

        this.flashOnce();
        let counter=1;              
    }


}