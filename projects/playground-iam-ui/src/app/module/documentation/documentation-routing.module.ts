import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const ROUTES: Routes = [
  {
    path: 'documentation',
    loadChildren: () => {
      return import('./documentation/documentation-page.module').then(
        (m) => m.DocumentationPageModule
      );
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(ROUTES)],
  exports: [RouterModule],
})
export class DocumentationRoutingModule {}
