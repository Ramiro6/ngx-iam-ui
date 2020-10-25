import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {colorType} from '../../directives/color-by-type.directive';

@Component({
  selector: 'ngx-card',
  styleUrls: ['./ngx-card.component.scss'],
  template: `
    <div class="ngx-card__container" ngxSetColor [getColor]="ngxColor" [ngStyle]="{'width': ngxWidth}">
      <div class="ngx-card__body">
        <ng-content></ng-content>
      </div>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class NgxCardComponent implements OnInit {
  @Input() ngxColor: colorType;
  @Input() ngxWidth: string = '18rem';
  constructor() { }

  ngOnInit(): void {
    // this.isRed = true;
  }
}
