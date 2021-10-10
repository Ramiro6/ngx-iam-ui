import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlaygroundComponent } from './playground/playground.component';
import { RouterModule, Routes } from '@angular/router';
import { NgxCardModule } from '@ngx-iam-ui/components/ngx-card';
import { NgxDirectiveModule } from '@ngx-iam-ui/components/ngx-directive';
import { NgxFlexModule } from '@ngx-iam-ui/components/ngx-flex';

export const ROUTES: Routes = [
  { path: '', component: PlaygroundComponent },
  // { path: 'card', component: CardComponent },
];

@NgModule({
  declarations: [PlaygroundComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES),
    NgxCardModule,
    NgxFlexModule,
    NgxDirectiveModule,
  ],
})
export class PlaygroundPagesModule {}
