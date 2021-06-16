import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxSidePanelComponent } from './ngx-side-panel/ngx-side-panel.component';
import { NgxSideAsideComponent } from './ngx-side-aside/ngx-side-aside.component';
import { NgxSideMainComponent } from './ngx-side-main/ngx-side-main.component';

@NgModule({
  declarations: [
    NgxSidePanelComponent,
    NgxSideAsideComponent,
    NgxSideMainComponent,
  ],
  imports: [CommonModule],
  exports: [NgxSidePanelComponent, NgxSideAsideComponent, NgxSideMainComponent],
})
export class NgxSideNavModule {}
