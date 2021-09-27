import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'ngx-card-title',
  styleUrls: ['./ngx-card-title.component.scss'],
  template: `<ng-content></ng-content>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  host: { ['style']: 'border: var(--border-primary-color)' },
})
export class NgxCardTitleComponent {
  // get setBottom(): boolean {
  //   return this.typeBorder === 'bottom';
  // }
  // @HostBinding('style.border') border: string;
  // constructor() {
  //   this.border = '5px solid blue';
  // }
}
// host: {
//   '[@openClose]': 'state ? "open" : "close"',
// },
