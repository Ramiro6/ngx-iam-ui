import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'ngx-tab-router',
  template: `<div class="ngx-tab-router__box">
    <ng-content></ng-content>
  </div>`,
  styleUrls: ['./ngx-tab-router.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class NgxTabRouterComponent {}
