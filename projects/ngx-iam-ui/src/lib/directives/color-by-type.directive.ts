import {Directive, ElementRef, HostBinding, Input, Renderer2} from '@angular/core';

export type colorType = 'primary' | 'danger' | 'grey' | 'white';

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

  @HostBinding('class.ngx-color__grey') get setGrey(): boolean {
    return this.getColor === 'grey';
  }

  @HostBinding('class.ngx-color__white') get setWhite(): boolean {
    return this.getColor === 'white';
  }
}
