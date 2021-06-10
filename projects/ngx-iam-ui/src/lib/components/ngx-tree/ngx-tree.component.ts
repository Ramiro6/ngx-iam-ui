import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'ngx-tree',
  template: `<button>{{ title }}</button>`,
  styleUrls: ['./ngx-tree.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NgxTreeComponent {
  @Input() title: string;
  @Input() iconArrow?: boolean = false;
//
// { label: 'string',
//   icon: 'name-icon',
//   children: [{ label: 'name', icon: 'name-icon'}]
// }
}
