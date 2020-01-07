import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { AppRoutingModule } from "./app.routing.module";

import { AppComponent } from "./app.component";
import { CountryListComponent } from "./country/country-list/country-list.component";
import { CountryDetailComponent } from "./country/country-detail/country-detail.component";
import { CountryFavoriteComponent } from "./country/country-favorite/country-favorite.component";
import { SearchCountryPipe } from "./country/search-country.pipe";

@NgModule({
  declarations: [
    AppComponent,
    CountryListComponent,
    CountryDetailComponent,
    CountryFavoriteComponent,
    SearchCountryPipe
  ],
  imports: [BrowserModule, HttpClientModule, FormsModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
  exports: [SearchCountryPipe]
})
export class AppModule {}
