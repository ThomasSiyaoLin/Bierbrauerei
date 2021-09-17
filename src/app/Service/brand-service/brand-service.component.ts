import {Component, Injectable, OnInit} from '@angular/core';
import {Observable, of} from "rxjs";
import {MARKEN} from "./Brands"

@Injectable({
  providedIn: 'root'
})
export class BrandServiceComponent {

  constructor() { }

  getBrands() : Observable<string[]> {
    const brands = of(MARKEN);
    return brands;
  }

}
