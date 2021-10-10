import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';
import { NgxDirectiveBase } from './ngx-directive-base';

export type KEY_DIRECTION = 'row' | 'row-reverse' | 'column' | 'column-reverse';

@Directive({ selector: '[NgxFlex]' })
export class NgxFlexDirective extends NgxDirectiveBase {
  @Input('NgxFlex') options: KEY_DIRECTION;
  DIRECTIVE_KEY = 'flex-direction';

  constructor(el: ElementRef, render: Renderer2) {
    super(el, render);
    this.registerKeys.set('display', 'flex');
  }
}
