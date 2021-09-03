import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardApiComponent } from './card-api.component';

export const ROUTES: Routes = [
  {
    path: '',
    component: CardApiComponent,
  },
];
@NgModule({
  imports: [RouterModule.forChild(ROUTES)],
  exports: [RouterModule],
})
export class CardApiRoutingModule {}
