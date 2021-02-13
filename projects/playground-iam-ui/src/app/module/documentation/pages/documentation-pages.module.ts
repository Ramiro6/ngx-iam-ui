import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DocumentationComponent} from './documentation/documentation.component';
import {RouterModule, Routes} from '@angular/router';
import {NgxSideNavModule} from '../../../../../../ngx-iam-ui/src/lib/components/ngx-side-nav';
import {NgxCardModule, NgxCardPageModule} from 'ngx-iam-ui';

export const ROUTES: Routes = [
  { path: '', component: DocumentationComponent }
];

@NgModule({
  declarations: [DocumentationComponent],
  imports: [
    CommonModule,
    NgxSideNavModule,
    NgxCardModule,
    RouterModule.forChild(ROUTES),
    NgxCardPageModule
  ]
})
export class DocumentationPagesModule { }
