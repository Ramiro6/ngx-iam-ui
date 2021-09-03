import { NgModule } from '@angular/core';
import { NgxCardPageComponent } from './ngx-card-page.component';
import { CommonModule } from '@angular/common';
import { NgxCardPageTitleComponent } from './ngx-card-page-title.component';
import { NgxCardPageContentComponent } from './ngx-card-page-content.component';

@NgModule({
  declarations: [
    NgxCardPageComponent,
    NgxCardPageTitleComponent,
    NgxCardPageContentComponent,
  ],
  imports: [CommonModule],
  exports: [
    NgxCardPageComponent,
    NgxCardPageTitleComponent,
    NgxCardPageContentComponent,
  ],
})
export class NgxCardPageModule {}
