import { Directive, ElementRef, Renderer2 } from '@angular/core';
import { NgxDirectiveBase } from '../ngx-directive-base';

// const inputs = ['NgxFlex'];

@Directive({ selector: '[NgxFlex]', inputs: ['options: NgxFlex'] })
export class NgxFlexDirective extends NgxDirectiveBase {
  protected options: string;

  constructor(el: ElementRef, _render: Renderer2) {
    super(el, _render);
    console.log('NgxFLex', el);
  }
}
