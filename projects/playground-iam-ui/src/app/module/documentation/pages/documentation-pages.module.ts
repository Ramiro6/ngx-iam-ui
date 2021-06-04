import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DocumentationComponent} from './documentation/documentation.component';
import {RouterModule, Routes} from '@angular/router';
import {NgxSideNavModule} from '../../../../../../ngx-iam-ui/src/lib/components/ngx-side-nav';
import {NgxCardModule, NgxCardPageModule} from 'ngx-iam-ui';
import { CardComponent } from './card/card.component';

export const ROUTES: Routes = [
  { path: '', component: DocumentationComponent, children: [{
    path: 'card', component: CardComponent }] },
];

@NgModule({
  declarations: [DocumentationComponent, CardComponent],
  imports: [
    CommonModule,
    NgxSideNavModule,
    NgxCardModule,
    RouterModule.forChild(ROUTES),
    NgxCardPageModule
  ]
})
export class DocumentationPagesModule { }
