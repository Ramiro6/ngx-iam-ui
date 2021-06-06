import {Directive, HostBinding, Input} from '@angular/core';

export type colorType = 'primary' | 'danger' | 'grey' | 'light';

@Directive({selector: '[ngxSetColor]'})
export class NgxColorByTypeDirective {

  @Input() getColor: colorType;

  @HostBinding('class.ngx-color__primary') get setPrimary(): boolean {
    return this.getColor === 'primary';
  }

  @HostBinding('class.ngx-color__danger') get setDanger(): boolean {
    return this.getColor === 'danger';
  }

  @HostBinding('class.ngx-color__grey') get setGrey(): boolean {
    return this.getColor === 'grey';
  }

  @HostBinding('class.ngx-color__light') get setLight(): boolean {
    return this.getColor === 'light';
  }
}
