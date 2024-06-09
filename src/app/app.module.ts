import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookmarkedComponent } from './pages/bookmarked/bookmarked.component';
import { MoviesComponent } from './pages/movies/movies.component';
import { TvSeriesComponent } from './pages/tv-series/tv-series.component';
import { PageMainComponent } from './pages/page-main/page-main.component';
import { LoginComponent } from './login-signUp/login/login.component';
import { SingUpComponent } from './login-signUp/sing-up/sing-up.component';
import { PagesComponent } from './pages/pages.component';
import { HttpClientModule } from '@angular/common/http';
import { PagesRoutingModule } from './pages/pages-routing.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    BookmarkedComponent,
    MoviesComponent,
    TvSeriesComponent,
    PageMainComponent,
    LoginComponent,
    SingUpComponent, 
    PagesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PagesRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
