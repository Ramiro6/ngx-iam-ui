import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
  selector: 'ngx-side-main',
  templateUrl: './ngx-side-main.component.html',
  styleUrls: ['./ngx-side-main.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NgxSideMainComponent {
}
