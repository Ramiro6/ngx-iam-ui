import { Directive, ElementRef, OnInit, Renderer2 } from '@angular/core';
import { NgxDirectiveBase } from '../ngx-directive-base';

@Directive({ selector: '[NgxFlex]', inputs: ['options: NgxFlex'] })
export class NgxFlexDirective extends NgxDirectiveBase {
  protected options: string;
  protected DIRECTIVE_KEY: string = 'flex';

  constructor(el: ElementRef, _render: Renderer2) {
    super(el, _render);
    console.log('NgxFLex', el);
  }
}
