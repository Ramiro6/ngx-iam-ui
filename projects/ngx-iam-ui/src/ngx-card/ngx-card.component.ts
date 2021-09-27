import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'ngx-card',
  styleUrls: ['./ngx-card.component.scss'],
  template: `
    <ng-content select="ngx-card-title"></ng-content>
    <ng-content select="ngx-card-content"></ng-content>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { '[style.width]': 'ngxWidth' },
})
export class NgxCardComponent {
  @Input() ngxColor?: any;
  @Input() ngxWidth?: string;
  constructor() {}
}