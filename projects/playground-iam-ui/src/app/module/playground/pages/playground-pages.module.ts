import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlaygroundComponent } from './playground/playground.component';
import { RouterModule, Routes } from '@angular/router';
import { NgxIamUiModule } from '../../../../../../ngx-iam-ui/src/lib/ngx-iam-ui.module';
import { NgxToggleSwitchModule } from '../../../../../../ngx-iam-ui/src/lib/components/toggle-switch/ngx-toggle-switch.module';
import { NgxCardModule } from '../../../../../../ngx-iam-ui/src/lib/components/card';
import { NgxSideNavModule } from '../../../../../../ngx-iam-ui/src/lib/components/ngx-side-nav/ngx-side-nav.module';
import { CardComponent } from '../../documentation/pages/card/card.component';
import { NgxTreeModule } from '../../../../../../ngx-iam-ui/src/lib/components/ngx-tree/ngx-tree.module';
import { NgxIconDefaultModule } from '../../../../../../ngx-iam-ui/src/lib/components/ngx-icon-default/ngx-icon-default.module';

export const ROUTES: Routes = [
  { path: '', component: PlaygroundComponent },
  { path: 'card', component: CardComponent },
];

@NgModule({
  declarations: [PlaygroundComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES),
    NgxToggleSwitchModule,
    NgxIamUiModule,
    NgxCardModule,
    NgxSideNavModule,
    NgxTreeModule,
    NgxIconDefaultModule,
    // NgxCardPageModule
  ],
})
export class PlaygroundPagesModule {}
