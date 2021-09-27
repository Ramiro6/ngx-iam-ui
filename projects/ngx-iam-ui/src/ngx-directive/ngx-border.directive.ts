import { Directive, HostBinding, Input } from '@angular/core';

export type typeBorder = 'bottom' | 'left' | 'right' | 'top';

@Directive({ selector: '[NgxBorder]' })
export class NgxBorderDirective {
  @Input() typeBorder: typeBorder;

  @HostBinding('class.ngx-border__bottom') get setBottom(): boolean {
    return this.typeBorder === 'bottom';
  }

  @HostBinding('class.ngx-border__left') get setLeft(): boolean {
    return this.typeBorder === 'left';
  }

  @HostBinding('class.ngx-border__right') get setRight(): boolean {
    return this.typeBorder === 'right';
  }

  @HostBinding('class.ngx-border__top') get setTop(): boolean {
    return this.typeBorder === 'top';
  }
}
