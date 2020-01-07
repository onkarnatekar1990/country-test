import { Component, OnInit } from "@angular/core";
import { CommonService } from "../../common.service";

@Component({
  selector: "app-country-list",
  templateUrl: "./country-list.component.html",
  styleUrls: ["./country-list.component.css"]
})
export class CountryListComponent implements OnInit {
  constructor(private commonService: CommonService) { }

  countrylistObj: any;
  ngOnInit() {
    this.getAllCountryList();
  }

  getAllCountryList() {
    this.commonService.getCountries().subscribe(data => {
      this.countrylistObj = data;
      localStorage.setItem('countryData', JSON.stringify(this.countrylistObj));
    });
  }
}
