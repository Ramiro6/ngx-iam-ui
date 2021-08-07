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
  template: `<div class="ngx-tree-node__box">
    <ng-content></ng-content>
  </div>`,
  styleUrls: ['./ngx-tree-node.component.scss'],
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
