import {Directive, ElementRef, HostBinding, Input, Renderer2} from '@angular/core';

export type colorType = 'primary' | 'danger';

@Directive({selector: '[ngxSetColor]'})
export class ColorByTypeDirective {

  @Input() getColor: colorType;

  constructor(private el: ElementRef, private render2: Renderer2) {
  }

  @HostBinding('class.ngx-color__primary') get setPrimary(): boolean {
    return this.getColor === 'primary';
  }

  @HostBinding('class.ngx-color__danger') get setDanger(): boolean {
    return this.getColor === 'danger';
  }
}
