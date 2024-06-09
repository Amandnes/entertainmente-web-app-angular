import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { MoviesComponent } from "./movies/movies.component";
import { TvSeriesComponent } from "./tv-series/tv-series.component";
import { BookmarkedComponent } from "./bookmarked/bookmarked.component";
import { PageMainComponent } from "./page-main/page-main.component";
import { PagesComponent } from "./pages.component";

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: '', component: PagesComponent, children: [
    { path: 'movies', component: MoviesComponent},
    { path: 'tv-series', component: TvSeriesComponent},
    { path: 'bookmarked', component: BookmarkedComponent},
    { path: 'home', component: PageMainComponent}
  ]}
]
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
export class PagesRoutingModule {}