import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-country-favorite',
  templateUrl: './country-favorite.component.html',
  styleUrls: ['./country-favorite.component.css']
})
export class CountryFavoriteComponent implements OnInit {

  favCountries = (JSON.parse(localStorage.getItem('favCountryData')) == null || JSON.parse(localStorage.getItem('favCountryData')) == undefined) ? [] : JSON.parse(localStorage.getItem('favCountryData'));
  constructor() { }

  ngOnInit() {
  }

}
