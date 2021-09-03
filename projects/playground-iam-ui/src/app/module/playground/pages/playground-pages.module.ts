import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlaygroundComponent } from './playground/playground.component';
import { RouterModule, Routes } from '@angular/router';
// import { CardComponent } from '../../documentation/card/containers/card/card.component';
import { NgxTreeModule } from '@ngx-iam-ui/components/ngx-tree';
import { NgxIconDefaultModule } from '@ngx-iam-ui/components/ngx-icon-default';
import { NgxTabRouterModule } from '@ngx-iam-ui/components/ngx-tab-router';
import { NgxCardModule } from '@ngx-iam-ui/components/ngx-card';

export const ROUTES: Routes = [
  { path: '', component: PlaygroundComponent },
  // { path: 'card', component: CardComponent },
];

@NgModule({
  declarations: [PlaygroundComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES),
    NgxTreeModule,
    NgxIconDefaultModule,
    NgxTabRouterModule,
    NgxCardModule,
  ],
})
export class PlaygroundPagesModule {}
