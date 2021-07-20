import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ContentChild,
  EventEmitter,
  Input,
  Output,
  ViewEncapsulation,
} from '@angular/core';
import { NgxIconDefaultComponent } from '@ngx-iam-ui/components/ngx-icon-default';

@Component({
  selector: 'ngx-tree-node',
  template: `<div class="ngx-tree-node__box" select="['content']">
    <ng-content select="['icon']"></ng-content>
    <ng-content></ng-content>
  </div>`,
  styles: [
    `
      .ngx-insert__s {
        padding-left: 10px;
        padding-right: 10px;
      }
      .ngx-insert__m {
        padding-left: 26px;
      }

      button {
        padding: 7px;
        border: none;
        display: block;
        width: 100%;
        text-align: start;
        background: transparent;
      }

      .ngx-tree-node__box {
        /*padding-left: 5px;*/
        /*padding-right: 5px;*/
        font-size: 16px;
        display: flex;
        align-items: center;
      }

      .is-select {
        background-color: var(--primary-color);
      }
    `,
  ],
  // eslint-disable-next-line @angular-eslint/no-host-metadata-property
  host: {
    '[attr.aria-expanded]': 'isExpanded',
    '(click)': 'onCLickEvent()',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class NgxTreeNodeComponent implements AfterViewInit {
  isExpanded: boolean = false;
  @Input() setSize: boolean;
  @ContentChild(NgxIconDefaultComponent) stateIcon: NgxIconDefaultComponent;
  @Output() clickEvent: EventEmitter<void> = new EventEmitter<void>();

  onCLickEvent() {
    if (this.stateIcon) {
      this.isExpanded = !this.isExpanded;
      this.stateIcon.state = this.isExpanded;
    }
    this.clickEvent.emit();
  }

  ngAfterViewInit() {
    console.log('Directive');
  }
}
