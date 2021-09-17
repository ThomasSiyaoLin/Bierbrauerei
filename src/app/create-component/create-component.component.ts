import { Component, OnInit } from '@angular/core';
import {MarketingCampaign} from "../../entitys/MarketingCampaign";
import {Coupon} from "../../entitys/Coupon";
import {BrandServiceComponent} from "../Service/brand-service/brand-service.component"
import {MarketingCampaignService} from "../Service/marketing-campaign.service";


@Component({
  selector: 'app-create-component',
  templateUrl: './create-component.component.html',
  providers: [BrandServiceComponent, MarketingCampaignService],
  styleUrls: ['./create-component.component.css']
})
export class CreateComponentComponent implements OnInit {

  coupons : Coupon[] | undefined;
  campaigns : MarketingCampaign[] | undefined;
  brands : string[] | undefined;

  selectedBrand? : string;
  selectedCampaign? : MarketingCampaign;


  constructor(private brandService : BrandServiceComponent, private marketingCampaignService : MarketingCampaignService) {

  }

  ngOnInit(): void {
    this.loadAllBrands();
    this.loadAllCampaigns();
  }

  onSelectBrand(selectedBrand : string ){
    this.selectedBrand = selectedBrand;
  }

  onSelectMarketingCampaign(campaign : MarketingCampaign){
    this.selectedCampaign = campaign;
  }

  loadAllCampaigns(){

  }

  loadAllCoupons(campaignID : string){


  }

  loadAllBrands() : void{
    this.brandService.getBrands()
      .subscribe(brands => this.brands = brands);
  }




}
