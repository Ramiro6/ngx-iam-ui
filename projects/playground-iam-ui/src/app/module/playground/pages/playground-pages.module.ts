import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PlaygroundComponent} from './playground/playground.component';
import {RouterModule, Routes} from '@angular/router';

export const ROUTES: Routes = [
  { path: '', component: PlaygroundComponent}
];

@NgModule({
  declarations: [
    PlaygroundComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES)
  ]
})
export class PlaygroundPagesModule { }
