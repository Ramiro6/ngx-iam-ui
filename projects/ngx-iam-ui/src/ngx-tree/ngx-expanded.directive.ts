import {
  Directive,
  EventEmitter,
  HostBinding,
  HostListener,
  Output,
} from '@angular/core';

@Directive({ selector: '[ngxExpanded]' })
export class ngxExpandedDirective {
  private _state: boolean = false;
  @Output() pushState: EventEmitter<boolean> = new EventEmitter<boolean>();

  @HostBinding('attr.aria-expanded') get setState(): boolean {
    return this._state;
  }

  @HostListener('click') onClick(): void {
    this._state = !this._state;
  }

  get state(): boolean {
    return this._state;
  }
}
