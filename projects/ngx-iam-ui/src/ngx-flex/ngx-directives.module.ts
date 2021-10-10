import { NgModule } from '@angular/core';
import { NgxFlexDirective } from './ngx-flex.directive';
import { NgxFlexAlignDirective } from './ngx-flex-align.directive';
import { NgxFlexWrapDirective } from './ngx-flex-wrap.directive';
import { NgxFlexGapDirective } from './ngx-flex-gap.directive';

const FLEX_ROUTER = [
  NgxFlexDirective,
  NgxFlexAlignDirective,
  NgxFlexWrapDirective,
  NgxFlexGapDirective,
];

@NgModule({
  exports: [...FLEX_ROUTER],
  declarations: [...FLEX_ROUTER],
})
export class NgxFlexModule {
  constructor() {
    console.log('Module');
  }
}
