import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';
import { NgxDirectiveBase } from './ngx-directive-base';

export type KEY_ALIGN =
  | 'flex-start'
  | 'flex-end'
  | 'center'
  | 'space-between'
  | 'space-around'
  | 'space-evenly'
  | 'start'
  | 'end'
  | 'left'
  | 'right';

@Directive({ selector: '[NgxFlexAlign]' })
export class NgxFlexAlignDirective extends NgxDirectiveBase {
  @Input('NgxFlexAlign') options: KEY_ALIGN;
  DIRECTIVE_KEY = 'justify-content';

  constructor(el: ElementRef, render: Renderer2) {
    super(el, render);
  }
}
