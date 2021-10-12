import { Component, OnInit } from '@angular/core';
import {BrandServiceComponent} from "../Service/brand-service/brand-service.component";
import {BrandComponent} from "../brand/brand.component";
import {Observable} from "rxjs";
import {HttpErrorResponse} from "@angular/common/http";

@Component({
  selector: 'app-create-brand',
  templateUrl: './create-brand.component.html',
  styleUrls: ['./create-brand.component.css']
})
export class CreateBrandComponent implements OnInit {

  newCreatedBrandName : string = "";
  brands : string [] =[];
  isBrandCreated : boolean = false;
  httpError : number = 0;

  constructor(private brandService : BrandServiceComponent, private brandComponent : BrandComponent) { }

  ngOnInit(): void {
    this.getAllBrands();

  }

  createBrand() : void {
    this.brandService.createBrand(this.newCreatedBrandName).subscribe(
      (brand : string) => {
       },
      (fail: HttpErrorResponse)  =>{this.setHttpStatus(fail)});
    console.log(this.httpError);

  }

  getAllBrands() : void {
    this.brandService.getBrands()
      .subscribe(brands => this.brands = brands);
  }

  getBrand() : void {
    this.brandService.getBrand(this.newCreatedBrandName).
    subscribe((brand : string) => this.isBrandCreated = brand == this.newCreatedBrandName);
  }

  setBrandName() : void {
    this.newCreatedBrandName = (<HTMLInputElement>document.getElementById("newBrand")).value.toString();
  }

  resetAllStayInComponent() : void {
    this.newCreatedBrandName = "";
    this.isBrandCreated = false;
    this.httpError = 0;
    this.getAllBrands();
  }

  resetAll() : void {
    this.newCreatedBrandName = "";
    this.isBrandCreated = false;
    this.httpError = 0;
    this.brandComponent.onClickBrand.emit(false);
    this.brandComponent.menuSelection = 0;
  }

  setHttpStatus(fail: HttpErrorResponse) {
    if(fail.status == 400)
      this.httpError = 1;
    if(fail.status == 200)
      this.httpError = 2;
  }


}
