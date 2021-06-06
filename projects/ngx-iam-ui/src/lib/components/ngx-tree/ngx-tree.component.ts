import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'ngx-tree',
  template: `
    <ngx-icon-default [icon]="'arrow'" *ngIf="iconArrow"></ngx-icon-default>
    <button>{{ title }}</button>
  `,
  styleUrls: ['./ngx-tree.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NgxTreeComponent {
  @Input() title: string;
  @Input() iconArrow?: boolean = false;

  constructor() {
    console.log('hi...');
  }
}
