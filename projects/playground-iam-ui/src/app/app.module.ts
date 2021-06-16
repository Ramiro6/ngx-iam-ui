import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeModule } from './module/welcome/welcome.module';
import { PlaygroundModule } from './module/playground/playground.module';
import { DocumentationModule } from './module/documentation/documentation.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserAnimationsModule,
    AppRoutingModule,
    WelcomeModule,
    PlaygroundModule,
    DocumentationModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
