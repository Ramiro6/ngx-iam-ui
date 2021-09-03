import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { colorType } from '@ngx-iam-ui/components/ngx-directive';

@Component({
  selector: 'ngx-card',
  styleUrls: ['./ngx-card.component.scss'],
  template: `
    <div class="ngx-card__body">
      <ng-content></ng-content>
    </div>
  `,
  // eslint-disable-next-line @angular-eslint/no-host-metadata-property
  host: { '[style.width]': 'ngxWidth' },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NgxCardComponent implements OnInit {
  // @Input() ngxColor: colorType;

  @Input() ngxWidth: string = '18rem';
  constructor() {}

  ngOnInit(): void {
    console.log('ramiro');
    // this.isRed = true;
  }
}
