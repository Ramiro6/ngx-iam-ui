import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardOverviewComponent } from './card-overview.component';
export const ROUTES: Routes = [
  {
    path: '',
    component: CardOverviewComponent,
  },
];
@NgModule({
  imports: [RouterModule.forChild(ROUTES)],
  exports: [RouterModule],
})
export class CardOverviewRoutingModule {}
