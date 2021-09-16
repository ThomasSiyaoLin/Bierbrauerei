import { Component, OnInit } from '@angular/core';
import {MarketingCampaign} from "../../entitys/MarketingCampaign";
import {Coupon} from "../../entitys/Coupon";


@Component({
  selector: 'app-create-component',
  templateUrl: './create-component.component.html',
  styleUrls: ['./create-component.component.css']
})
export class CreateComponentComponent implements OnInit {

  coupons : Coupon[] | undefined;
  campaigns : MarketingCampaign[] | undefined;

  constructor() {

  }

  ngOnInit(): void {
  }

  loadAllCampaigns(){

  }

  loadAllCoupons(campaignID : string){


  }




}
