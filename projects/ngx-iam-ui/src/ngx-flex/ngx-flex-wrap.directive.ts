import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';
import { NgxDirectiveBase } from './ngx-directive-base';

export type KEY_WRAP = 'nowrap' | 'wrap' | 'wrap-reverse';

@Directive({ selector: '[NgxFlexWrap]' })
export class NgxFlexWrapDirective extends NgxDirectiveBase {
  @Input('NgxFlexWrap') options: KEY_WRAP;
  DIRECTIVE_KEY = 'flex-wrap';

  constructor(el: ElementRef, render: Renderer2) {
    super(el, render);
  }
}
