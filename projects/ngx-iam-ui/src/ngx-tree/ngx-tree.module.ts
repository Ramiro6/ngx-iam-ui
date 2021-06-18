import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxTreeComponent } from './ngx-tree.component';
import { NgxTreeNodeComponent } from './ngx-tree-node.component';
import { NgxExpandedDirective } from './ngx-expanded.directive';
import { NgxIconDefaultModule } from '@ngx-iam-ui/components/ngx-icon-default';

@NgModule({
  declarations: [NgxTreeComponent, NgxTreeNodeComponent, NgxExpandedDirective],
  imports: [CommonModule, NgxIconDefaultModule],
  exports: [NgxTreeComponent, NgxTreeNodeComponent, NgxExpandedDirective],
})
export class NgxTreeModule {}
