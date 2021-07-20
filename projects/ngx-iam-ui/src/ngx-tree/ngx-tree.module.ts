import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxTreeComponent } from './ngx-tree.component';
import { NgxTreeNodeComponent } from './ngx-tree-node.component';
import { NgxExpandedDirective } from './ngx-expanded.directive';
import { NgxIconDefaultModule } from '@ngx-iam-ui/components/ngx-icon-default';
import { NgxPaddingDirective } from './ngx-padding.directive';

@NgModule({
  declarations: [
    NgxTreeComponent,
    NgxTreeNodeComponent,
    NgxExpandedDirective,
    NgxPaddingDirective,
  ],
  imports: [CommonModule, NgxIconDefaultModule],
  exports: [
    NgxTreeComponent,
    NgxTreeNodeComponent,
    NgxExpandedDirective,
    // NgxPaddingDirective,
  ],
})
export class NgxTreeModule {}
