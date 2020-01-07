import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonService } from "../../common.service";



@Component({
  selector: 'app-country-detail',
  templateUrl: './country-detail.component.html',
  styleUrls: ['./country-detail.component.css']
})
export class CountryDetailComponent implements OnInit {

  nnode: any;
  isfav: boolean = false;
  countryDetail = {};

  allCountryData: any;

  favCountries = (JSON.parse(localStorage.getItem('favCountryData')) == null || JSON.parse(localStorage.getItem('favCountryData')) == undefined) ? [] : JSON.parse(localStorage.getItem('favCountryData'));
  constructor(private route: ActivatedRoute, private commonService: CommonService) { }

  ngOnInit() {
    this.allCountryData = JSON.parse(localStorage.getItem('countryData'));
    this.getCountryDetails();
  }

  getCountryDetails(): void {
    this.nnode = +this.route.snapshot.paramMap.get('ncode');
    this.countryDetail = this.allCountryData.filter((items) => items.numericCode == this.nnode);


    if (this.favCountries != undefined) {
      const isFavCountry = this.favCountries.filter((items) => items.numericCode == this.nnode);

      isFavCountry && isFavCountry.length > 0 ? this.isfav = true : this.isfav = false;
    }


  }

  clickEvent() {
    this.isfav = !this.isfav;
    if (this.isfav) {
      this.favCountries.push(this.countryDetail[0]);
      localStorage.setItem('favCountryData', JSON.stringify(this.favCountries));
    } else {
      if (this.favCountries != undefined && this.favCountries.length > 0) {
        this.favCountries = this.favCountries.filter((items) => items.numericCode != this.nnode);
        localStorage.setItem('favCountryData', JSON.stringify(this.favCountries));
      }

    }
  }

}
