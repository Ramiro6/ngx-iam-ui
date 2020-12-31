import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PlaygroundComponent} from './playground/playground.component';
import {RouterModule, Routes} from '@angular/router';
import {NgxToggleSwitchModule} from 'ngx-iam-ui';

export const ROUTES: Routes = [
  { path: '', component: PlaygroundComponent}
];

@NgModule({
  declarations: [
    PlaygroundComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES),
    NgxToggleSwitchModule
  ]
})
export class PlaygroundPagesModule { }
