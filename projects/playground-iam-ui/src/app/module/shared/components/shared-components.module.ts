import { NgModule } from '@angular/core';
import { PgTitlePanelComponent } from './pg-title-panel/pg-title-panel.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [PgTitlePanelComponent],
  imports: [CommonModule],
  exports: [PgTitlePanelComponent],
})
export class SharedComponentsModule {}
