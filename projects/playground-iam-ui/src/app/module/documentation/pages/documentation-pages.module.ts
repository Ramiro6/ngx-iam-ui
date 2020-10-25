import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DocumentationComponent} from './documentation/documentation.component';
import {RouterModule, Routes} from '@angular/router';

export const ROUTES: Routes = [
  { path: '', component: DocumentationComponent }
];

@NgModule({
  declarations: [DocumentationComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES)
  ]
})
export class DocumentationPagesModule { }
