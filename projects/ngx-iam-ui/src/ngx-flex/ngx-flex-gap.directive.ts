import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';
import { NgxDirectiveBase } from './ngx-directive-base';

@Directive({ selector: '[NgxFlexGap]' })
export class NgxFlexGapDirective extends NgxDirectiveBase {
  @Input('NgxFlexGap') set optionPadding(item: number) {
    this.options = `0px ${item}px ${item}px 0px`;
  }
  DIRECTIVE_KEY = 'padding';
  constructor(el: ElementRef, render: Renderer2) {
    super(el, render);
    this.registerKeys.set('display', 'flex');
  }
}
