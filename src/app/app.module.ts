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
import {ModalDetailsComponent} from './modal-details/modal-details.component';
import {CheckboxComponent} from './checkbox/checkbox.component';
import {CutPipe} from './pipes/cut.pipe';
import { MainComponent } from './main/main.component';
import { AdminComponent } from './admin/admin.component';
import {CategoryComponent} from './category/category.component';
import {DataService} from './services/data.service';


@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    NavbarComponent,
    DashboardComponent,
    NotFoundComponent,
    ToolComponent,
    ModalDetailsComponent,
    CheckboxComponent,
    CutPipe,
    MainComponent,
    AdminComponent,
    CategoryComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [ToolsService, DataService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
