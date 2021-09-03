import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';

@Component({
  selector: 'ngx-card-page',
  styleUrls: ['./ngx-card-page.component.scss'],
  template: `
    <ng-content select="ngx-card-page-title"></ng-content>
    <ng-content select="ngx-card-page-content"></ng-content>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NgxCardPageComponent {
  @Input() ngxColor?: any;
  constructor() {}
}
