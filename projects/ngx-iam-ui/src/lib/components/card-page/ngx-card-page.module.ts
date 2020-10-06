import {NgModule} from '@angular/core';
import {NgxCardPageComponent} from './ngx-card-page.component';
import {CommonModule} from '@angular/common';
import {DirectiveModule} from '../../directives/directives.module';

@NgModule({
  declarations: [NgxCardPageComponent],
  imports: [CommonModule, DirectiveModule],
  exports: [NgxCardPageComponent]
})
export class NgxCardPageModule { }
