import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
  selector: 'ngx-side-panel',
  templateUrl: './ngx-side-panel.component.html',
  styleUrls: ['./ngx-side-panel.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NgxSidePanelComponent {}
