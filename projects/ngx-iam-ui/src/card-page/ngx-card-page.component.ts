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
    <div class="ngx-card-page__container">
      <ng-content></ng-content>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NgxCardPageComponent implements OnInit {
  @Input() ngxColor: any;
  constructor() {}

  ngOnInit(): void {
    console.log('eslit...');
    // this.isRed = true;
  }
}
