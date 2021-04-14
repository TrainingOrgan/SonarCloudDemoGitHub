import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { AjaxService } from './services/ajax.service';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { SessionPageComponent } from './session-page/session-page.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    SessionPageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [AjaxService],
  bootstrap: [AppComponent]
})
export class AppModule { }