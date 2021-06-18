import {
  Directive,
  EventEmitter,
  HostBinding,
  HostListener,
  Output, ViewContainerRef,
} from '@angular/core';

@Directive({ selector: '[NgxExpanded]' })
export class NgxExpandedDirective {
  private _state: boolean = false;

  constructor(public ctw: ViewContainerRef) {
  }

  @HostBinding('attr.aria-expanded') get setState(): boolean {
    return this._state;
  }

  @HostListener('click') onClick(): void {
    this._state = !this._state;
  }
}
