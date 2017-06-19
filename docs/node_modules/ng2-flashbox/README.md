# ng2 - flashbox
[![npm version](https://img.shields.io/npm/v/ng2-flashbox.svg)](https://www.npmjs.com/package/ng2-flashbox) [![npm downloads-monthly](https://img.shields.io/npm/dm/ng2-flashbox.svg)](https://www.npmjs.com/package/ng2-flashbox) [![npm downloads-total](https://img.shields.io/npm/dt/ng2-flashbox.svg)](https://www.npmjs.com/package/ng2-flashbox)

FlashBox component is angular2 component provided to display simple user information messages.

GitHub repository for component module can be found here [ng2-flashbox](https://github.com/vladimirpavk/ng2-flashbox/).

GitHub repository for sample application(Angular4, SystemJS) can be found here [Angular4-FlashBoxComponent](https://github.com/vladimirpavk/Angular4-FlashBoxComponent).

Online sample application can be found at github pages [online-demo](https://vladimirpavk.github.io/Angular4-FlashBoxComponent/).

### Dependencies
FlashBox is angular2 component dependent on only **@angular/core** and **@angular/platform-browser** modules.

### Installation
```
npm install ng2-flashbox --save
```

### How to use FlashBox component
FlashBox component is (for now only) part of the CommonComponents module.

In order to use the module you must configure your module loader. In case you use **systemjs** module loader add the following mapings:
```
System.config({
    ...
    paths: {
      ...
      'npm:': 'node_modules/'
      ...
    },
    map: {
        ...
        'ng2-flashbox': 'npm:ng2-flashbox'
        ...
    },
     packages: {
      ...
      'ng2-flashbox': {
        main: 'index',
        defaultExtension: 'js'
      }
      ...
    }
    ...
})
```

In your application module definition file import CommonComponents module.
```
... 
Import { CommonComponentsModule } from 'ng2-flashbox';
...
@NgModule({
    ...
     imports: [ ...
         CommonComponentsModule 
         ...
         ],
    ...
})
```

Now we can use FlashBox component in our module declared components templates with ```<flash-box>``` element.
Place your  HTML based user information message inside element.

```
<flash-box>
        <!-- HTML Message -->
        <div style="border-type: solid; border-width:2px">
            <label style="color: rgb(0,0,0); text-decoration: underline;">Information message</label>
           <label>
            Any message
            </label>
        </div>
</flash-box> 

```

### Attributes

```
<flash-box type="type_value" position="position_value" max-width="maxwidth_value" setTimeout="setTimeout_value">
        <!-- HTML message -->
</flash-box>    
```

1. **type_value**: *string*, default: **primary**
Specify FlashBox type. 

Available types: **default**, **primary**, **success**, **info**, **warning**, **danger** 
based on default bootstrap label types

2. **position_value**: *string*, default: **tr**. 
Specify FlashBox position.

Available values:
  * **tr** - top-right,
  * **tm** - top-middle,
  * **tl** - top-left,
  * **cr** - center-right,
  * **cm** - center-middle,
  * **cl** - center-left,
  * **br** - bottom-right,
  * **bm** - bottom-middle,
  * **bl** - bottom-left

3. **max-width_value**: *string*, default: **300px**
Specify FlashBox component maximum width.

4. **setTimeout_value**: *number*, default: **2000**
Specify the amount of time the component is visible in *ms*. Default is **2 sec**.


### Actions

In order to cause an flashbox control action use angular2 template local variable system or controler method invokation.

#### **Template local variable example**
```
    <flash-box .... #tlv_name>
        ....
    </flash-box>
    
    <button (click)="tlv_name.available_action()">Cause flashbox action</button>
```

#### **Controller method invokation example**

reference component source
```
    import { FlashBoxComponent } from 'ng2-flashbox';
```

reference component from template local variable using 
```
    @ViewChild("tlv_name") tlv:FlashBoxComponent;
    tlv.available_action();
```

##### **Available actions(available_action())**:
1. **flashOnce():void** - Show flashbox only once for **setTimeout** amount of time
2. **show():void** - Make control visible for unlimited amount of time (or untill some other action happens)
3. **hide():void** - Make control hidden for unlimited amount of time (or untill some other action happens)
4. **startFlashing():void** - Start flashing for unlimited amount of time (or untill some other action happens).
Transition period from unvisible to visible is set to **0,5 sec** and is currently unconfigurable. The flashbox control us shown for **setTimeout** amount of time.
5. **stopFlashing():void** - Stop flashing
6. **toogle():void** - Toggle show/hide control
7. **flashTimes(number numOfTimes):void** -Show flashBox **numOfTimes** times

###Events
1. **busyEvent** - fires when flashbox is busy. 
    When show() on flashbox that is already shown.
    When hide() on flashbox that is already hidden.
    When flashOnce() on flashbox that is already shown or blinking.
    When startFlashing() on flashbox that is already shown or blinking.
    When flashTimes(number numOfTImes) on flashbox that is alread shown or blinking.
2. **onStartVisibleEvent** - fires when flashbox is starting to show.
3. **onEndVisibleEvent** - fires when flashbox is completely shown.
4. **onStartHiddenEvent** - fires when flashbox is starting to become unvisible.
5. **onEndHiddenEvent** - fires when flashbox is completely invisible.
6. **invalidValueEvent** - fires when **setTimeout** to number that is less or equal 0.
