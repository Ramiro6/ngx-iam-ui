import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { NgxCardModule } from '@ngx-iam-ui/components/ngx-card';

export const ROUTES: Routes = [
  {
    path: 'playground',
    loadChildren: () =>
      import('./pages/playground-pages.module').then(
        (m) => m.PlaygroundPagesModule
      ),
  },
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(ROUTES), NgxCardModule],
})
export class PlaygroundModule {}
