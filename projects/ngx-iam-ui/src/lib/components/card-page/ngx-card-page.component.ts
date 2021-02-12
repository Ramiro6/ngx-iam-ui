import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {colorType} from '../../directives/ngx-color-by-type.directive';

@Component({
  selector: 'ngx-card-page',
  styleUrls: ['./ngx-card-page.component.scss'],
  template: `
    <div class="ngx-card-page__container" ngxSetColor [getColor]="ngxColor">
      <ng-content></ng-content>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class NgxCardPageComponent implements OnInit {
  @Input() ngxColor: colorType;
  constructor() { }

  ngOnInit(): void {
    // this.isRed = true;
  }
}
