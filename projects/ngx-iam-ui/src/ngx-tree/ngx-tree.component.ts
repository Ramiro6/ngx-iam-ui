import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'ngx-tree',
  template: `<ng-content></ng-content>`,
  styleUrls: ['./ngx-tree.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NgxTreeComponent {}
