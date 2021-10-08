import { Component, OnInit } from '@angular/core';
import {Coupon} from "../../entitys/Coupon";
import {CouponService} from "../Service/coupon.service";
import {SelectionComponentComponent} from "../selection-component/selection-component.component";
import {Observable} from "rxjs";
import {FormControl, FormGroup} from "@angular/forms";
import {Validators} from "@angular/forms";

const emailPattern : string = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
@Component({
  selector: 'app-reedeem',
  templateUrl: './reedeem.component.html',
  styleUrls: ['./reedeem.component.css']
})

export class ReedeemComponent implements OnInit {

  couponToReedeem? : Coupon
  fourOFourError : boolean = false;
  eMail : string = "";
  couponID : string = "";
  userEmail = new FormGroup({
    eMailUser: new FormControl('',
      [Validators.required,Validators.email
        ]
    )});
  httpResponseError? : boolean = undefined;





  constructor(private cupService: CouponService, private selectorComponent : SelectionComponentComponent) { }

  ngOnInit(): void {


  }

  getCoupon (couponID : string) : void{
    this.cupService.getCoupon(couponID).subscribe(
      (coupon: Coupon) => {this.couponToReedeem = coupon, this.fourOFourError = false},
      (coupon : Error) => {this.fourOFourError = true; this.resetCouponToReedeem()}
    );
  }

  setCouponToReedeem (newCoupon : Coupon) {
    this.couponToReedeem = newCoupon;
  }

  setCouponID (couponID : string) :void {
    this.couponID = couponID;
  }

  setEmail(eMail : string ) : void {
    this.eMail = eMail;
  }

  getCouponIDInput() : string {
    //@ts-ignore
    this.couponID = document.getElementById("couponID").value;
    return (<HTMLInputElement>document.getElementById("couponID")).value;
  }




  resetCouponToReedeem() :void {
    this.couponToReedeem = undefined;

  }

  resetAll() : void {
    this.couponToReedeem = undefined;
    this.fourOFourError = false;
    this.selectorComponent.menNumer = 0;
    this.selectorComponent.onClickSelection.emit(false);
  }

  redeemCoupon (email : string) : boolean  {

    if(this.couponToReedeem?.couponID == undefined)
      return false;
    if(this.eMail == "")
      this.setEmail(this.getEmailInput());
    var observableObject :Observable <any> =  this.cupService.updateCoupon(this.couponToReedeem?.couponID, this.eMail);
    observableObject.subscribe((coupon : Coupon ) => {this.httpResponseError = false}, (errorCheck : Error) => {this.httpResponseError =true},
    )


    return true;

  }

  getEmailInput() : string {
    //@ts-ignore
    this.eMail = document.getElementById("emailInput").value;
    this.isUserEmailCorrect();
    return (<HTMLInputElement>document.getElementById("emailInput")).value;
  }

  isUserEmailCorrect () : boolean {

    var test = this.userEmail.get('eMailUser');
    var isInvalid = this.userEmail.get('eMailUser')?.invalid;

    if(isInvalid == undefined)
      return false;
    return isInvalid;
  }

  resetCoupon() : void {
    this.httpResponseError = undefined;
    this.couponID= "";
    this.eMail ="";
    this.couponToReedeem = undefined;
  }




}
