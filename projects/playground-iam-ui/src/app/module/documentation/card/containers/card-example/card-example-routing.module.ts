import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardExampleComponent } from './card-example.component';
export const ROUTES: Routes = [
  {
    path: '',
    component: CardExampleComponent,
  },
];
@NgModule({
  imports: [RouterModule.forChild(ROUTES)],
  exports: [RouterModule],
})
export class CardExampleRoutingModule {}
