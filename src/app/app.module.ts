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
import {ToolComponent} from './dashboard/tool/tool.component';
import {ToolsService} from './services/tools.service';
import {CutPipe} from './pipes/cut.pipe';
import {ModalModule} from 'ngx-bootstrap';
import {FavoriteComponent} from './favorite/favorite.component';
import { ModalDetailsComponent } from './modal-details/modal-details.component';


@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    NavbarComponent,
    DashboardComponent,
    NotFoundComponent,
    ToolComponent,
    CutPipe,
    FavoriteComponent,
    ModalDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    ModalModule.forRoot()
  ],
  providers: [ToolsService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
