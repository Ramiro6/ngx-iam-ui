import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// welcome
const ROUTES: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'playground' },
];

@NgModule({
  imports: [RouterModule.forRoot(ROUTES)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
