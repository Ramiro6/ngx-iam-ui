import { NgModule } from '@angular/core';
import { NgxIamUiComponent } from './ngx-iam-ui.component';
import { WelcomeComponent } from './module/welcome/pages/welcome/welcome.component';



@NgModule({
  declarations: [NgxIamUiComponent, WelcomeComponent],
  imports: [
  ],
  exports: [NgxIamUiComponent]
})
export class NgxIamUiModule { }
