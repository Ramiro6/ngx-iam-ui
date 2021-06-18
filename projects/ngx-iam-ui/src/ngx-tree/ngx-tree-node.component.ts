import { ChangeDetectionStrategy, Component, ContentChild, EventEmitter, Output, } from '@angular/core';
import { NgxIconDefaultComponent } from '@ngx-iam-ui/components/ngx-icon-default';

@Component({
  selector: 'ngx-tree-node',
  template: `<ng-content select="['icon']"></ng-content>
    <button class="ngx-tree-node__box" select="['content']">
      <ng-content></ng-content>
    </button>`,
  styles: [
    `
      button {
        padding: 7px;
        font-size: 14px;
        border: none;
        display: flex;
        align-items: center;
      }
    `,
  ],
  // eslint-disable-next-line @angular-eslint/no-host-metadata-property
  host: {
    '[attr.aria-expanded]': 'isExpanded',
    '(click)': 'onCLickEvent()',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NgxTreeNodeComponent {
  isExpanded: boolean = false;
  @ContentChild(NgxIconDefaultComponent) stateIcon: NgxIconDefaultComponent;
  @Output() clickEvent: EventEmitter<any> = new EventEmitter<any>();
  constructor() {}

  onCLickEvent() {
    if (this.stateIcon) {
      this.isExpanded = !this.isExpanded;
      this.stateIcon.state = this.isExpanded;
    }
    this.clickEvent.emit();
  }
}
