import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlaygroundComponent } from './playground/playground.component';
import { RouterModule, Routes } from '@angular/router';
import { NgxCardModule } from '@ngx-iam-ui/components/ngx-card';
import { NgxDirectiveModule } from '@ngx-iam-ui/components/ngx-directive';

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
    NgxDirectiveModule,
  ],
})
export class PlaygroundPagesModule {}
