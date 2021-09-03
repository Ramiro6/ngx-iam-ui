import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardComponent } from './containers/card/card.component';
import { CardOverviewComponent } from './containers/card-overview/card-overview.component';
import { CardApiComponent } from './containers/card-api/card-api.component';
import { CardExampleComponent } from './containers/card-example/card-example.component';

export const ROUTES: Routes = [
  {
    path: '',
    component: CardComponent,
    data: { name: 'Card' },
    children: [
      {
        path: 'overview',
        component: CardOverviewComponent,
      },
      {
        path: 'api',
        component: CardApiComponent,
      },
      {
        path: 'examples',
        component: CardExampleComponent,
      },
      { path: '**', redirectTo: 'overview', pathMatch: 'full' },
    ],
  },
];
@NgModule({
  imports: [RouterModule.forChild(ROUTES)],
  exports: [RouterModule],
})
export class CardRoutingModule {}
