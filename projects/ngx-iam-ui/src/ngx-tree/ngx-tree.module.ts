import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxTreeComponent } from './ngx-tree.component';
import { NgxTreeNodeComponent } from './ngx-tree-node.component';
import { ngxExpandedDirective } from './ngx-expanded.directive';

@NgModule({
  declarations: [NgxTreeComponent, NgxTreeNodeComponent, ngxExpandedDirective],
  imports: [CommonModule],
  exports: [NgxTreeComponent, NgxTreeNodeComponent, ngxExpandedDirective],
})
export class NgxTreeModule {}
