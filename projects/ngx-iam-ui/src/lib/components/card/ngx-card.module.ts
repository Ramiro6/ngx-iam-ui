import {NgModule} from '@angular/core';
import {NgxCardComponent} from './ngx-card.component';
import {CommonModule} from '@angular/common';
import {DirectiveModule} from '../../directives/directives.module';

@NgModule({
  declarations: [NgxCardComponent],
  imports: [CommonModule, DirectiveModule],
  exports: [NgxCardComponent]
})
export class NgxCardModule { }
