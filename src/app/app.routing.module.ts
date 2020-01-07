import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";

import { CountryListComponent } from "./country/country-list/country-list.component";
import { CountryDetailComponent } from "./country/country-detail/country-detail.component";
import { CountryFavoriteComponent } from "./country/country-favorite/country-favorite.component";

const routes: Routes = [
    { path: "", component: CountryListComponent, pathMatch: "full" },
    { path: "country-list", component: CountryListComponent },
    { path: "country-detail/:ncode", component: CountryDetailComponent },
    { path: "country-fav", component: CountryFavoriteComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
