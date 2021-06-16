import {
  ChangeDetectionStrategy,
  Component,
  ContentChild,
  ElementRef,
  EventEmitter,
  Output,
} from '@angular/core';

// import { NgxIconDefaultComponent } from '../ngx-icon-default/ngx-icon-default.component';
import { ngxExpandedDirective } from './ngx-expanded.directive';

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
    '(click)': 'onCLickEvent()',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NgxTreeNodeComponent {
  @ContentChild(ngxExpandedDirective)
  stateIcon: ngxExpandedDirective;
  @Output() clickEvent: EventEmitter<any> = new EventEmitter<any>();
  constructor(private el: ElementRef) {}

  onCLickEvent() {
    debugger;
    // this.el.nativeElement.getAttribute('aria-expanded')
    // if (this.stateIcon) {
    //   // this.stateIcon.state = this.stateIcon.state === 'open' ? 'close' : 'open';
    //   console.log(this.stateIcon);
    // }
  }
}
