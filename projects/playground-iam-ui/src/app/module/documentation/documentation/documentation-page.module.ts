import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxTreeModule } from '@ngx-iam-ui/components/ngx-tree';
import { NgxIconDefaultModule } from '@ngx-iam-ui/components/ngx-icon-default';
import { RouterModule, Routes } from '@angular/router';
import { DocumentationComponent } from './containers/documentation/documentation.component';
import { CardComponent } from '../card/containers/card/card.component';
import { NgxSideNavModule } from '../../../../../../ngx-iam-ui/src/ngx-side-nav';

export const ROUTES: Routes = [
  {
    path: '',
    component: DocumentationComponent,
    children: [
      {
        path: 'card',
        loadChildren: () =>
          import('../card/card.module').then((m) => m.CardModule),
      },
    ],
  },
];

@NgModule({
  declarations: [DocumentationComponent, CardComponent],
  imports: [
    CommonModule,
    NgxSideNavModule,
    RouterModule.forChild(ROUTES),
    NgxTreeModule,
    NgxIconDefaultModule,
  ],
})
export class DocumentationPageModule {}
