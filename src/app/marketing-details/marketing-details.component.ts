import {Component, Injectable, Input, OnInit} from '@angular/core';
import {MarketingCampaign} from "../../entitys/MarketingCampaign";
import {MarketingCampaignService} from "../Service/marketing-campaign.service";
import {BrandServiceComponent} from "../Service/brand-service/brand-service.component";
import {CouponService} from "../Service/coupon.service";
import {Coupon} from "../../entitys/Coupon";
import {ViewComponentComponent} from "../view-component/view-component.component";
import {MarketingComponent} from "../marketing/marketing.component";


@Component({
  selector: 'app-marketing-details',
  templateUrl: './marketing-details.component.html',
  styleUrls: ['./marketing-details.component.css']
})
export class MarketingDetailsComponent implements OnInit {

  selectedMarketingCampaign? : MarketingCampaign;
  selectedBrand? : string;
  brands : string [] = [];
  campaigns : MarketingCampaign [] = [];
  couponsFromCampaign : Coupon [] = [];


  constructor
  (private marketingService : MarketingCampaignService, private brandService : BrandServiceComponent,
   private couponService : CouponService, private marketingComponent : MarketingComponent) { }

  ngOnInit(): void {
    this.loadAllBrands();
    this.loadAllCampaigns();
  }

  loadAllBrands() : void  {
    this.brandService.getBrands().subscribe(
      (brandsFromAPI : string[]) => this.brands = brandsFromAPI
    )
  }

  loadAllCampaigns() : void {
    this.marketingService.getCampaigns().subscribe((allCampaigns : MarketingCampaign[]) => this.campaigns = allCampaigns)
  }

  loadCoupons(marketingCampaign : MarketingCampaign) : void {
    this.selectedMarketingCampaign = marketingCampaign;
    if(this.selectedMarketingCampaign?.campaignID == undefined || this.selectedBrand == undefined )
      return
    this.couponService.getCoupons(this.selectedMarketingCampaign?.campaignID, this.selectedBrand)
      .subscribe((coupons : Coupon[]) => this.couponsFromCampaign = coupons);
  }


  resetAll() : void {
    this.selectedBrand = undefined;
    this.selectedMarketingCampaign = undefined;
    this.couponsFromCampaign = [];
    this.marketingComponent.onClickMarketing.emit(false);
    this.marketingComponent.menuSelection = 0;
  }
}
