import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardComponent } from './containers/card/card.component';

export const ROUTES: Routes = [
  {
    path: '',
    component: CardComponent,
    data: { name: 'Card' },
    children: [
      {
        path: 'overview',
        loadChildren: () =>
          import(
            './containers/card-overview/card-overview-routing.module'
          ).then((m) => m.CardOverviewRoutingModule),
      },
      {
        path: 'api',
        loadChildren: () =>
          import('./containers/card-api/card-api-routing.module').then(
            (m) => m.CardApiRoutingModule
          ),
      },
      {
        path: 'examples',
        loadChildren: () =>
          import('./containers/card-example/card-example-routing.module').then(
            (m) => m.CardExampleRoutingModule
          ),
      },
      { path: '**', redirectTo: 'overview', pathMatch: 'full' },
    ],
  },
  // { path: '**', redirectTo: 'overview', pathMatch: 'full' },
];
@NgModule({
  imports: [RouterModule.forChild(ROUTES)],
  exports: [RouterModule],
})
export class CardRoutingModule {}
