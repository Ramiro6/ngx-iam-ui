import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { ALL_ICONS } from './ngx-all-icons';

export type typeIcon = 'arrow';

@Component({
  selector: 'ngx-icon-default',
  template: `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
      <path d="M7.503 10.28L1.339 4 0 5.364 7.489 13 15 5.364 13.661 4z"></path>
    </svg>
  `,
  styleUrls: ['./ngx-icon-default.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NgxIconDefaultComponent {
  @Input() icon: string;

  constructor() {
    console.log(ALL_ICONS);
    console.log(Object.keys(ALL_ICONS));
  }
}
