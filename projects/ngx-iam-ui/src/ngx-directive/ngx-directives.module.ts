import { NgModule } from '@angular/core';
import { NgxColorByTypeDirective } from './ngx-color-by-type.directive';
import { NgxBorderDirective } from './ngx-border.directive';
import { NgxFlexDirective } from './ngx-flex/ngx-flex.directive';

@NgModule({
  exports: [NgxColorByTypeDirective, NgxBorderDirective, NgxFlexDirective],
  declarations: [NgxColorByTypeDirective, NgxBorderDirective, NgxFlexDirective],
})
export class NgxDirectiveModule {
  constructor() {
    console.log('Module');
  }
}
