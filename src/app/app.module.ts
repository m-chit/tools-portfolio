import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {AppRoutingModule} from './app-routing.module';

import {AppComponent} from './app.component';
import {LandingPageComponent} from './landing-page/landing-page.component';
import {NavbarComponent} from './navbar/navbar.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {NotFoundComponent} from './not-found/not-found.component';
import { ToolComponent } from './dashboard/tool/tool.component';
import {ToolsService} from "./services/tools.service";


@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    NavbarComponent,
    DashboardComponent,
    NotFoundComponent,
    ToolComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [ ToolsService ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
