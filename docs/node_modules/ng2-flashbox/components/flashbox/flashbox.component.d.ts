import { OnInit, EventEmitter } from '@angular/core';
export declare class FlashBoxComponent implements OnInit {
    private isShown;
    private _intervalCounterHandler;
    private _intervalCounterObserver;
    _onStartVisible: EventEmitter<{}>;
    _onEndVisible: EventEmitter<{}>;
    _onStartHidden: EventEmitter<{}>;
    private _onEndHidden;
    _busy: EventEmitter<{}>;
    _invalidValue: EventEmitter<{}>;
    _typeChanged: EventEmitter<string>;
    _positionChanged: EventEmitter<string>;
    _maxWidthChanged: EventEmitter<number>;
    _timeoutChanged: EventEmitter<number>;
    private _type;
    /**
     * Set type of flashbox.
     * Available values:
     * default, primary, success, info, warning, danger
     * Default value is primary.
     */
    type: string;
    private _position;
    /**
    * Set position of flashbox.
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
    position: string;
    private _maxwidth;
    /**
     * Specify flashbox maximum width.
     * Default value is 300 px.
     */
    maxwidth: number;
    private _setTimeout;
    /**
     * Specify the amount of time flashbox is visible in ms. Default value is 2000ms.
     */
    setTimeout: number;
    private style_type;
    private style_position;
    constructor();
    ngOnInit(): void;
    private setType();
    private setPosition();
    /**
     * Use this method to toggle(show/hide) flashbox.
     */
    toggle(): void;
    /**
     * Use this method to show flashbox.
     * Flashbox will be visible until hide() method is called.
     */
    show(): void;
    /**
     * Use this method to hide flashbox.
     * Flashbox will be hidden until show() method is called.
     */
    hide(): void;
    /**
    * Use this method to show flashbox only once.
    * Flashbox will appear and then disappear.
    */
    flashOnce(): void;
    /**
     * Use this method to start flashbox flashing.
     * FlashBox will be flashing until stopFlashing() method is called.
     */
    startFlashing(): void;
    /**
     * Use this method to stop flashbox flashing.
     * FlashBox will be stopped until startFlashing() method is called.
     */
    stopFlashing(): void;
    /**
     * Use this method to start flashbox flashing for predefined number of times.
     */
    flashTimes(times: number): void;
}
