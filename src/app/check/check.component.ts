import { Component, OnInit } from '@angular/core';
import {Coupon} from "../../entitys/Coupon";
import {CouponService} from "../Service/coupon.service";
import {SelectionComponentComponent} from "../selection-component/selection-component.component";

@Component({
  selector: 'app-check',
  templateUrl: './check.component.html',
  styleUrls: ['./check.component.css']
})
export class CheckComponent implements OnInit {

  couponToCheck? : Coupon
  fourOFourError : boolean = false;
  couponID : string ="";

  constructor(private cupService: CouponService, private selectorComponent : SelectionComponentComponent) { }

  ngOnInit(): void {
  }

  checkCoupon (couponID : string) : void{
    this.cupService.getCoupon(couponID).subscribe(
      (coupon: Coupon) => {this.couponToCheck = coupon, this.fourOFourError = false},
      (coupn : Error) => {this.fourOFourError = true; this.resetCoupon()}
    );
  }

  setCouponToReedeem (newCoupon : Coupon) {
    this.couponToCheck = newCoupon;
  }

  getCouponIDInput() : string {
    //@ts-ignore
    this.couponID = document.getElementById("couponID").value;
    return (<HTMLInputElement>document.getElementById("couponID")).value;
  }

  setCouponID(couponID : string) : void {
    this.couponID = couponID;
  }

  resetAll() : void {
    this.couponToCheck = undefined;
    this.couponID = "";
    this.fourOFourError = false;
    this.selectorComponent.menNumer = 0;
  }

  resetCoupon() : void {
    this.couponToCheck = undefined;
    this.couponID = "";

}
}
