import { NgModule } from '@angular/core';
import { NgxColorByTypeDirective } from './ngx-color-by-type.directive';
import { NgxBorderDirective } from './ngx-border.directive';

const DIRECTIVE_ROUTER = [NgxColorByTypeDirective, NgxBorderDirective];

@NgModule({
  exports: [...DIRECTIVE_ROUTER],
  declarations: [...DIRECTIVE_ROUTER],
})
export class NgxDirectiveModule {
  constructor() {
    console.log('Module');
  }
}
