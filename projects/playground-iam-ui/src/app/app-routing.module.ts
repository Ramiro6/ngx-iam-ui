import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
// welcome
const ROUTES: Routes = [
  // documentation
  { path: '', pathMatch: 'full', redirectTo: 'playground' },
  // {
  //   path: 'documentation',
  //   loadChildren: () =>
  //     import('./module/documentation/documentation.module').then(
  //       (m) => m.DocumentationModule
  //     ),
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(ROUTES)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
