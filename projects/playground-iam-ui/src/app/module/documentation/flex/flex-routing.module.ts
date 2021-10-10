import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FlexComponent } from './containers/flex/flex.component';
import { FlexOverviewComponent } from './containers/flex-overview/flex-overview.component';
import { FlexApiComponent } from './containers/flex-api/flex-api.component';
import { FlexExampleComponent } from './containers/flex-example/flex-example.component';

export const ROUTES: Routes = [
  {
    path: '',
    component: FlexComponent,
    data: { name: 'Ngx-Flex' },
    children: [
      {
        path: 'overview',
        component: FlexOverviewComponent,
      },
      {
        path: 'api',
        component: FlexApiComponent,
      },
      {
        path: 'examples',
        component: FlexExampleComponent,
      },
      { path: '**', redirectTo: 'overview', pathMatch: 'full' },
    ],
  },
];
@NgModule({
  imports: [RouterModule.forChild(ROUTES)],
  exports: [RouterModule],
})
export class FlexRoutingModule {}
