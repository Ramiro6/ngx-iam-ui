import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'ngx-card-page-content',
  styles: [
    `
      :host {
        display: block;
        padding: 10px;
      }
    `,
  ],
  template: `<ng-content></ng-content>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NgxCardPageContentComponent {}
