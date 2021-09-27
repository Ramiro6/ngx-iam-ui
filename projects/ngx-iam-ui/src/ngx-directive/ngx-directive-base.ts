import { Directive, ElementRef, OnChanges, Renderer2, SimpleChanges, } from '@angular/core';

@Directive({})
export abstract class NgxDirectiveBase implements OnChanges {
  constructor(protected elementRef: ElementRef, protected _render: Renderer2) {}

  protected get _nativeElement(): HTMLElement {
    return this.elementRef.nativeElement;
  }

  ngOnChanges(changes: SimpleChanges): void {
    Object.keys(changes).forEach((ch: string) => {
      const val = changes[ch].currentValue;
      this._setValue(val);
    });
  }

  protected _setValue(setValue: any): void {
    this._render.setStyle(this._nativeElement, 'display', ['flex']);
  }
}
