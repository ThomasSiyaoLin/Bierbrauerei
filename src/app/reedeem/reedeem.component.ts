import { Component, OnInit } from '@angular/core';
import {Coupon} from "../../entitys/Coupon";
import {CouponService} from "../Service/coupon.service";
import {HttpErrorResponse} from "@angular/common/http";
import {SelectionComponentComponent} from "../selection-component/selection-component.component";

@Component({
  selector: 'app-reedeem',
  templateUrl: './reedeem.component.html',
  styleUrls: ['./reedeem.component.css']
})
export class ReedeemComponent implements OnInit {

  couponToReedeem? : Coupon
  fourOFourError : boolean = false;
  couponID : string ="";


  constructor(private cupService: CouponService, private selectorComponent : SelectionComponentComponent) { }

  ngOnInit(): void {
  }

  reedeemCoupon (couponID : string) : void{
    this.cupService.getCoupon(couponID).subscribe(
      (coupon: Coupon) => {this.couponToReedeem = coupon, this.fourOFourError = false},
      (coupn : Error) => {this.fourOFourError = true}
    );
  }

  setCouponToReedeem (newCoupon : Coupon) {
    this.couponToReedeem = newCoupon;
  }


  getCouponIDInput() : string {
    //@ts-ignore
    this.couponID = document.getElementById("couponID").value;
    return (<HTMLInputElement>document.getElementById("couponID")).value;
  }



  setCouponID(couponID : string) : void {
    this.couponID = couponID;


  }

  resetCouponToReedeem() :void {
    this.couponToReedeem = undefined;
  }

  resetAll() : void {
    this.couponToReedeem = undefined;
    this.couponID = "";
    this.fourOFourError = false;
    this.selectorComponent.menNumer = 0;
  }

}
