import { NgModule } from '@angular/core';
import { SharedComponentsModule } from './components/shared-components.module';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [SharedComponentsModule],
  exports: [SharedComponentsModule],
})
export class SharedModule {}
