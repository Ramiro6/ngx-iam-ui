import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
// welcome
const ROUTES: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'documentation' },
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
