import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';

export const ROUTES: Routes = [
  { path: 'documentation', loadChildren: () => import('./pages/documentation-pages.module').then(m => m.DocumentationPagesModule)}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES)
  ]
})
export class DocumentationModule { }
