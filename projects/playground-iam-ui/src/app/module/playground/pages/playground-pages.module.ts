import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlaygroundComponent } from './playground/playground.component';
import { RouterModule, Routes } from '@angular/router';
import { CardComponent } from '../../documentation/pages/card/card.component';
import { NgxTreeModule } from '../../../../../../ngx-iam-ui/src/ngx-tree/ngx-tree.module';
import { NgxIconDefaultModule } from '../../../../../../ngx-iam-ui/src/ngx-icon-default/ngx-icon-default.module';

export const ROUTES: Routes = [
  { path: '', component: PlaygroundComponent },
  { path: 'card', component: CardComponent },
];

@NgModule({
  declarations: [PlaygroundComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES),
    NgxTreeModule,
    NgxIconDefaultModule,
  ],
})
export class PlaygroundPagesModule {}
