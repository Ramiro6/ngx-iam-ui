import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';

export const ROUTES: Routes = [
  { path: 'welcome', loadChildren: () => import('./pages/welcome-pages.module').then(m => m.WelcomePagesModule)}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES)
  ]
})
export class WelcomeModule { }
