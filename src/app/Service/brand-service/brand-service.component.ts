import {Component, Injectable, OnInit} from '@angular/core';
import {Observable, of} from "rxjs";
import {MARKEN} from "./Brands"
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class BrandServiceComponent {

  constructor(private http :HttpClient) { }
  readonly httpServer : string = "http://localhost:8090/BrandService";


  createBrand(brandName : string) : Observable<string> {
    return this.http.post<string>(this.httpServer+"/"+brandName,"")

  }

  getBrands() : Observable<string[]> {
    return this.http.get<string[]>(this.httpServer);
  }

  getBrand(brand : string) : Observable<string> {
    return this.http.get<string>(this.httpServer+"/"+brand);
  }

}
