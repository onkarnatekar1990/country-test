import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class CommonService {
  countUrl = "https://restcountries.eu/rest/v2/";


  constructor(private http: HttpClient) { }

  getCountries() {
    return this.http.get(this.countUrl + "all");
  }


}
