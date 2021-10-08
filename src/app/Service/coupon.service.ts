import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { Observable, throwError} from "rxjs";
import {catchError, retry } from "rxjs/operators";
import {Coupon} from "../../entitys/Coupon";

@Injectable({
  providedIn: 'root'
})
export class CouponService {

  readonly COUPON_SERVICE_URL = "http://localhost:8090/CouponValidationService/"
  constructor(private http: HttpClient) {

  }


  createCoupon (marketingID : string, amount : number, startValue : number ) : Observable<Coupon[]> {


    var backSlash :string = "/";
    //console.log(this.COUPON_SERVICE_URL+marketingID+backSlash+amount.toString()+backSlash+startValue.toString());
    return this.http.post<Coupon[]>(this.COUPON_SERVICE_URL+marketingID+backSlash+amount.toString()+backSlash+startValue.toString(),"")

  }

  getCoupon (couponID : string ){
    if(this.http.get<Coupon>(this.COUPON_SERVICE_URL+couponID) )
    var backSlash :string = "/";
    return this.http.get<Coupon>(this.COUPON_SERVICE_URL+couponID);
  }

  updateCoupon (couponID : string, userId : string) :Observable<any> {
    var backSlash :string = "/";
    console.log(this.COUPON_SERVICE_URL+couponID+backSlash+userId);
    let c: Coupon = new Coupon("3fadf", "3", true, "123");
    return this.http.patch(this.COUPON_SERVICE_URL+couponID+backSlash+userId, c);
  }
}
