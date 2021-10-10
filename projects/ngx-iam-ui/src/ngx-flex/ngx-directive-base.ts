import { Directive, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Directive({})
export abstract class NgxDirectiveBase implements OnInit {
  protected options: string;
  protected registerKeys: Map<string, string> = new Map<string, string>();
  protected DIRECTIVE_KEY: string = '';

  protected constructor(
    protected elementRef: ElementRef,
    protected _render: Renderer2
  ) {}

  protected get _nativeElement(): HTMLElement {
    return this.elementRef.nativeElement;
  }

  ngOnInit(): void {
    if (this.options && this.DIRECTIVE_KEY) {
      this.registerKeys.set(this.DIRECTIVE_KEY, this.options);
    }
    console.log(this.registerKeys);
    this.setAllValue();
  }

  // ngOnChanges(changes: SimpleChanges): void {
  //   Object.keys(changes).forEach((ch: string) => {
  //     console.log(changes);
  //     if (this.options.includes(ch)) {
  //       console.log('update: value');
  //     }
  //   });
  // }

  setAllValue(): void {
    const getRegisterValue: Map<string, string> = this.registerKeys;
    if (getRegisterValue.size > 0) {
      for (const [key, value] of getRegisterValue) {
        this._setValue(key, value);
      }
    }
  }

  protected _setValue(key: string, value: string): void {
    this._render.setStyle(this._nativeElement, key, value);
  }
}
