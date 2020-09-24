import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {NgxIamUiModule} from 'ngx-iam-ui';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxIamUiModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
