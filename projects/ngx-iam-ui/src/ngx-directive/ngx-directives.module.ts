import { NgModule } from '@angular/core';
import { NgxColorByTypeDirective } from './ngx-color-by-type.directive';

@NgModule({
  exports: [NgxColorByTypeDirective],
  declarations: [NgxColorByTypeDirective],
})
export class NgxDirectiveModule {
  constructor() {
    console.log('Module');
  }
}
