import { NgModule } from '@angular/core';
import { NgxToggleSwitchComponent } from './ngx-toggle-switch.component';
import { CommonModule } from '@angular/common';
import { DirectiveModule } from '../../directives/directives.module';

@NgModule({
  declarations: [NgxToggleSwitchComponent],
  imports: [CommonModule, DirectiveModule],
  exports: [NgxToggleSwitchComponent],
})
export class NgxToggleSwitchModule {}
