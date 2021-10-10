import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxTreeModule } from '@ngx-iam-ui/components/ngx-tree';
import { NgxIconDefaultModule } from '@ngx-iam-ui/components/ngx-icon-default';
import { RouterModule, Routes } from '@angular/router';
import { DocumentationComponent } from './containers/documentation/documentation.component';
import { NgxSideNavModule } from '@ngx-iam-ui/components/ngx-side-nav';
import { NgxCardModule } from '@ngx-iam-ui/components/ngx-card';

export const ROUTES: Routes = [
  {
    path: '',
    component: DocumentationComponent,
    children: [
      {
        path: 'card',
        data: { treeName: 'card' },
        loadChildren: () =>
          import('../card/card.module').then((m) => m.CardModule),
      },
      {
        path: 'ngx-flex',
        data: { treeName: 'ngx-flex' },
        loadChildren: () =>
          import('../flex/flex.module').then((m) => m.FlexModule),
      },
    ],
  },
];

@NgModule({
  declarations: [DocumentationComponent],
  imports: [
    CommonModule,
    NgxSideNavModule,
    RouterModule.forChild(ROUTES),
    NgxTreeModule,
    NgxCardModule,
    NgxIconDefaultModule,
  ],
})
export class DocumentationPageModule {}
