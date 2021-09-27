import { Directive, HostBinding, Input } from '@angular/core';
// import { DomSanitizer } from '@angular/platform-browser';

export type NgxPaddingSize = 's' | 'm';

@Directive({ selector: '[NgxPadding]' })
export class NgxPaddingDirective {
  @Input() setSize: NgxPaddingSize;
  // private _sanitizer: DomSanitizer

  @HostBinding('class.ngx-insert__s') get setPaddingS(): boolean {
    return this.setSize === 's';
  }

  @HostBinding('class.ngx-insert__m') get setPaddingM(): boolean {
    return this.setSize === 'm';
  }
}
