import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'ngx-side-nav-panel',
  templateUrl: './ngx-side-nav-panel.component.html',
  styleUrls: ['./ngx-side-nav-panel.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class NgxSideNavPanelComponent {}
