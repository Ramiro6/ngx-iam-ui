import { NgModule } from '@angular/core';
import { NgxCardComponent } from './ngx-card.component';
import { CommonModule } from '@angular/common';
import { NgxDirectiveModule } from '@ngx-iam-ui/components/ngx-directive';

@NgModule({
  declarations: [NgxCardComponent],
  imports: [CommonModule, NgxDirectiveModule],
  exports: [NgxCardComponent],
})
export class NgxCardModule {}
