import { NgModule } from '@angular/core';
import { NgxCardComponent } from './ngx-card.component';
import { CommonModule } from '@angular/common';
import { NgxCardTitleComponent } from './ngx-card-title.component';
import { NgxCardContentComponent } from './ngx-card-content.component';

@NgModule({
  declarations: [
    NgxCardComponent,
    NgxCardTitleComponent,
    NgxCardContentComponent,
  ],
  imports: [CommonModule],
  exports: [NgxCardComponent, NgxCardTitleComponent, NgxCardContentComponent],
})
export class NgxCardModule {}
