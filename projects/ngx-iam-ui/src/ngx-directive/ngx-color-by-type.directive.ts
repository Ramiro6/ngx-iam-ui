import { Directive, HostBinding, Input } from '@angular/core';

export type colorType =
  | 'primary'
  | 'danger'
  | 'grey'
  | 'light'
  | 'border-primary'
  | 'box-shadow'
  | 'hover-primary'
  | 'sidebar-background'
  | 'nav-background';

@Directive({ selector: '[NgxSetColor]' })
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

  @HostBinding('class.ngx-color-border__primary')
  get setBorderPrimary(): boolean {
    return this.getColor === 'border-primary';
  }

  @HostBinding('class.ngx-color-box__shadow') get setBoxShadow(): boolean {
    return this.getColor === 'box-shadow';
  }

  @HostBinding('class.ngx-color-hover__primary')
  get setHoverPrimary(): boolean {
    return this.getColor === 'hover-primary';
  }

  @HostBinding('class.ngx-color-sidebar__background')
  get setSidebarBackground(): boolean {
    return this.getColor === 'sidebar-background';
  }

  @HostBinding('class.ngx-color-nav__background')
  get setNavBackground(): boolean {
    return this.getColor === 'nav-background';
  }
}
