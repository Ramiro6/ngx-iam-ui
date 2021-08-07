import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardComponent } from './containers/card/card.component';

export const ROUTES: Routes = [
  {
    path: '',
    component: CardComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(ROUTES)],
  exports: [RouterModule],
})
export class CardRoutingModule {}
