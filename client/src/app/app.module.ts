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
import {ToolComponent} from './dashboard/tools/tool/tool.component';
import {ToolsService} from './services/tools.service';
import {ModalDetailsComponent} from './modal-details/modal-details.component';
import {CheckboxComponent} from './checkbox/checkbox.component';
import {CutPipe} from './pipes/cut.pipe';
import {MainComponent} from './main/main.component';
import {AdminComponent} from './admin/admin.component';
import {FilterComponent} from './dashboard/filters/filter/filter.component';
import {FiltersComponent} from './dashboard/filters/filters.component';
import {ToolsComponent} from './dashboard/tools/tools.component';
import {ModalEditComponent} from './modal-edit/modal-edit.component';
import {ModalAlertComponent} from './modal-alert/modal-alert.component';
import {AlertService} from './services/alert.service';
import { SignUpComponent } from './landing-page/sign-up/sign-up.component';
import { SignInComponent } from './landing-page/sign-in/sign-in.component';


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
        FiltersComponent,
        ToolsComponent,
        FilterComponent,
        ModalEditComponent,
        ModalAlertComponent,
        SignUpComponent,
        SignInComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        AppRoutingModule
    ],
    providers: [ToolsService, AlertService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
