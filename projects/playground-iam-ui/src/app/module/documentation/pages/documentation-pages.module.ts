import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DocumentationComponent } from './documentation/documentation.component';
import { RouterModule, Routes } from '@angular/router';
import { CardComponent } from './card/card.component';
import { NgxSideNavModule } from '../../../../../../ngx-iam-ui/src/ngx-side-nav';
import { NgxCardModule } from '../../../../../../ngx-iam-ui/src/card/ngx-card.module';
import { NgxCardPageModule } from '../../../../../../ngx-iam-ui/src/card-page/ngx-card-page.module';
import { NgxTreeModule } from '@ngx-iam-ui/components/ngx-tree';
import { NgxIconDefaultModule } from '@ngx-iam-ui/components/ngx-icon-default';

export const ROUTES: Routes = [
  {
    path: '',
    component: DocumentationComponent,
    children: [
      {
        path: 'card',
        component: CardComponent,
      },
    ],
  },
];

@NgModule({
  declarations: [DocumentationComponent, CardComponent],
  imports: [
    CommonModule,
    NgxSideNavModule,
    NgxCardModule,
    RouterModule.forChild(ROUTES),
    NgxCardPageModule,
    NgxTreeModule,
    NgxIconDefaultModule,
  ],
})
export class DocumentationPagesModule {}
