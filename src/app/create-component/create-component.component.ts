import {Component, OnInit, Output} from '@angular/core';
import {MarketingCampaign} from "../../entitys/MarketingCampaign";
import {Coupon} from "../../entitys/Coupon";
import {BrandServiceComponent} from "../Service/brand-service/brand-service.component"
import {MarketingCampaignService} from "../Service/marketing-campaign.service";
import {ResetComponent} from "../reset/reset.component";
import {SelectionComponentComponent} from "../selection-component/selection-component.component";
import {CouponService} from "../Service/coupon.service";


@Component({
  selector: 'app-create-component',
  templateUrl: './create-component.component.html',
  providers: [BrandServiceComponent, MarketingCampaignService, ResetComponent],
  styleUrls: ['./create-component.component.css']
})
export class CreateComponentComponent implements OnInit {

  coupons : Coupon[] | undefined;
  campaigns : MarketingCampaign[] | undefined;
  brands : string[] | undefined;

  selectedBrand? : string;
  @Output()selectedCampaign? : MarketingCampaign;
  timeStamp: Date = new Date(Date.now());
  @Output() reset : boolean = false;


  constructor(private brandService : BrandServiceComponent, private marketingCampaignService : MarketingCampaignService,
              private resetButton : ResetComponent, private seletor: SelectionComponentComponent,
              private couponService : CouponService) {}

  ngOnInit(): void {
    this.loadAllBrands();
    this.loadAllCampaigns();
    console.log(this.timeStamp.getFullYear());
  }

  onSelectBrand(selectedBrand : string ){
    this.selectedBrand = selectedBrand;
  }

  onSelectMarketingCampaign(campaign : MarketingCampaign){
    this.selectedCampaign = campaign;
  }

  loadAllCampaigns(){
    this.marketingCampaignService.getCampaigns()
      .subscribe(campai => this.campaigns = campai);
  }

  loadAllCoupons(campaignID : string){


  }

  loadAllBrands() : void{
    this.brandService.getBrands()
      .subscribe(brands => this.brands = brands);
  }

  resetAll() : void {
    this.selectedBrand = undefined;
    this.selectedCampaign = undefined;
    this.reset = true;
    this.seletor.menNumer = 0;
  }




}
