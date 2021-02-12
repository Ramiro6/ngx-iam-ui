import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PlaygroundComponent} from './playground/playground.component';
import {RouterModule, Routes} from '@angular/router';
// import {NgxCardModule, NgxToggleSwitchModule} from 'ngx-iam-ui';
import {NgxIamUiModule} from '../../../../../../ngx-iam-ui/src/lib/ngx-iam-ui.module';
import {NgxToggleSwitchModule} from '../../../../../../ngx-iam-ui/src/lib/components/toggle-switch/ngx-toggle-switch.module';
import {NgxCardModule} from '../../../../../../ngx-iam-ui/src/lib/components/card';

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
    NgxToggleSwitchModule,
    NgxIamUiModule,
    NgxCardModule
    // NgxCardPageModule
  ]
})
export class PlaygroundPagesModule { }
