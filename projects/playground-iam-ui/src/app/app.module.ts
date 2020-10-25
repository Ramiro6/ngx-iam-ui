import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NgxToggleSwitchModule} from '../../../ngx-iam-ui/src/lib/components/toggle-switch/ngx-toggle-switch.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgxCardPageModule} from '../../../ngx-iam-ui/src/lib/components/card-page/ngx-card-page.module';
import {NgxCardModule} from 'ngx-iam-ui';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxToggleSwitchModule,
    NgxCardPageModule,
    NgxCardModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
