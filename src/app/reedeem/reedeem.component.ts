import { Component, OnInit } from '@angular/core';
import {Coupon} from "../../entitys/Coupon";
import {CouponService} from "../Service/coupon.service";

@Component({
  selector: 'app-reedeem',
  templateUrl: './reedeem.component.html',
  styleUrls: ['./reedeem.component.css']
})
export class ReedeemComponent implements OnInit {

  couponToReedeem? : Coupon


  constructor(private cupService: CouponService) { }

  ngOnInit(): void {
  }

  reedeemCoupon () : boolean{
    return true;
  }

  setCouponToReedeem (newCoupon : Coupon) {
    this.couponToReedeem = newCoupon;
  }

}
