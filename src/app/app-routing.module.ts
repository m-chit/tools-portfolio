import {RouterModule, Routes} from '@angular/router';
import {NgModule, OnInit} from '@angular/core';

import {LandingPageComponent} from './landing-page/landing-page.component';
import {NotFoundComponent} from './not-found/not-found.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {FavoriteComponent} from './favorite/favorite.component';

const appRoutes: Routes = [
  {path: '', redirectTo: 'landing-page', pathMatch: 'full'},
  {path: 'landing-page', component: LandingPageComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'favorite', component: FavoriteComponent},
  {path: 'not-found', component: NotFoundComponent},
  {path: '**', redirectTo: 'not-found'}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})

export class AppRoutingModule implements OnInit {
  constructor() {
  }

  ngOnInit() {
  }
}
