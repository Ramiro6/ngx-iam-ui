import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxSidePanelComponent } from './ngx-side-panel/ngx-side-panel.component';
import { NgxSideAsideComponent } from './ngx-side-aside/ngx-side-aside.component';
import { NgxSideMainComponent } from './ngx-side-main/ngx-side-main.component';
import { NgxSideNavPanelComponent } from './ngx-side-nav/ngx-side-nav-panel.component';

@NgModule({
  declarations: [
    NgxSidePanelComponent,
    NgxSideAsideComponent,
    NgxSideMainComponent,
    NgxSideNavPanelComponent,
  ],
  imports: [CommonModule],
  exports: [
    NgxSidePanelComponent,
    NgxSideAsideComponent,
    NgxSideMainComponent,
    NgxSideNavPanelComponent,
  ],
})
export class NgxSideNavModule {}
