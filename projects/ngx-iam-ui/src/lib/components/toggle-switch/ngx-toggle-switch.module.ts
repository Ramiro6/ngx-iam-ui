import { NgModule } from '@angular/core';
import { NgxToggleSwitchComponent } from './ngx-toggle-switch.component';
import {CommonModule} from '@angular/common';
import {ColorByTypeDirective} from '../../directives/color-by-type.directive';

@NgModule({
  declarations: [NgxToggleSwitchComponent, ColorByTypeDirective],
  imports: [CommonModule],
  exports: [NgxToggleSwitchComponent]
})
export class NgxToggleSwitchModule { }
