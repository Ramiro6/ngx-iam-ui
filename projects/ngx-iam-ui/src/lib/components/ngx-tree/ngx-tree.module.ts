import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxTreeComponent } from './ngx-tree.component';
import { NgxIconDefaultModule } from '../ngx-icon-default/ngx-icon-default.module';

@NgModule({
  declarations: [NgxTreeComponent],
  imports: [CommonModule, NgxIconDefaultModule],
  exports: [NgxTreeComponent],
})
export class NgxTreeModule {}
