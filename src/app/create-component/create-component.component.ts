import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
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
  providers: [BrandServiceComponent, MarketingCampaignService],
  styleUrls: ['./create-component.component.css']
})
export class CreateComponentComponent implements OnInit {

  coupons : Coupon[] | undefined;
  campaigns : MarketingCampaign[] = [];
  brands : string[] | undefined;

  selectedBrand? : string;
  @Output()selectedCampaign? : MarketingCampaign;
  timeStamp: Date = new Date(Date.now());
  @Output() reset : boolean = false;
  @Output() onResetClick = new EventEmitter<boolean>();
  converted : boolean = false;
  @Input()loading : boolean = false;


  constructor(private brandService : BrandServiceComponent, private marketingCampaignService : MarketingCampaignService,
              private seletor: SelectionComponentComponent,
              private couponService : CouponService) {}

  ngOnInit(): void {
    this.loadAllCampaigns();
    this.loadAllBrands();
    console.log(this.timeStamp.getFullYear());




  }

  onSelectBrand(selectedBrand : string ){
    this.resetCoupons();
    this.selectedBrand = selectedBrand;
    this.convertJavaDateToJsDate();

  }

  onSelectMarketingCampaign(campaign : MarketingCampaign){
    this.resetCoupons();
    this.selectedCampaign = campaign;

  }

  loadAllCampaigns() {


    this.marketingCampaignService.getCampaigns().subscribe(
      (campaingsFromAPI: MarketingCampaign[]) => this.campaigns = campaingsFromAPI
    );



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
    this.seletor.onClickSelection.emit(false);

  }


  convertJavaDateToJsDate () :void {
    if(this.converted == true)
      return;

    let dateArray : string[] = [];
    this.campaigns.forEach( marketing =>
      dateArray.push(marketing.endDate.toString()));


    for( let i: number = 0; i < dateArray.length; i++){
      var toConvert : string= dateArray[i];
      var counter : number = 0;
      var charCount : number = 0;
      var year : number = 0;
      var month : number = 0;
      var day : number = 0;
      var char : string = toConvert.charAt(charCount);
      var toFill : string ="";
      while(counter < 3){
        while(char != '-' && char != 'T'){
          charCount++;
          toFill += char;
          char = toConvert.charAt(charCount);
        }
        if(counter == 0 )
          year = parseInt(toFill);
        else if (counter == 1)
          month = parseInt(toFill);
        else if (counter == 2)
          day = parseInt(toFill);
        counter++;
        charCount++;
        toFill = "";
        char = toConvert.charAt(charCount);
      }
      this.campaigns[i].endDate = new Date(year, month, day, 0,0,0,0)
    }
    this.convertStartDate();
    this.converted = true;
  }



  private convertStartDate() {
    let dateArray : string[] = [];
    this.campaigns.forEach( marketing =>
      dateArray.push(marketing.startDate.toString()));


    for( let i: number = 0; i < dateArray.length; i++){
      var toConvert : string= dateArray[i];
      var counter : number = 0;
      var charCount : number = 0;
      var year : number = 0;
      var month : number = 0;
      var day : number = 0;
      var char : string = toConvert.charAt(charCount);
      var toFill : string ="";
      while(counter < 3){
        while(char != '-' && char != 'T'){
          charCount++;
          toFill += char;
          char = toConvert.charAt(charCount);
        }
        if(counter == 0 )
          year = parseInt(toFill);
        else if (counter == 1)
          month = parseInt(toFill);
        else if (counter == 2)
          day = parseInt(toFill);
        counter++;
        charCount++;
        toFill = "";
        char = toConvert.charAt(charCount);
      }
      this.campaigns[i].startDate = new Date(year, month, day, 0,0,0,0)
    }

  }

  createNewCoupons(amount : number, startValue : number) : void {
    this.resetCoupons();
    var marketingID = this.selectedCampaign?.campaignID;
    if(marketingID == undefined)
      return;
    this.setLoading(true);

    this.couponService.createCoupon(marketingID, amount, startValue).subscribe(
      (allCouponsFromAPI : Coupon[]) => this.coupons = allCouponsFromAPI);



  }

  checkAreBoxesFilled() : boolean {
    var couponsNumber : number | typeof NaN = (<HTMLInputElement>document.getElementById("numberOfCoupons")).valueAsNumber;
    var startNumber : number | typeof NaN = (<HTMLInputElement>document.getElementById("couponStartValue")).valueAsNumber;
    return (!isNaN(couponsNumber) && !isNaN(startNumber) && !this.isNegativeValues());

  }

  getNumberOfCoupons() : number {
    return (<HTMLInputElement>document.getElementById("numberOfCoupons")).valueAsNumber;
  }

  getStartValue() : number {
    return (<HTMLInputElement>document.getElementById("couponStartValue")).valueAsNumber;
  }

  isNegativeValues() : boolean {
    var couponsNumber : number | typeof NaN = (<HTMLInputElement>document.getElementById("numberOfCoupons")).valueAsNumber;
    var startNumber : number | typeof NaN = (<HTMLInputElement>document.getElementById("couponStartValue")).valueAsNumber;
    return ((couponsNumber < 0) || (startNumber<0));
  }

  setLoading (bool : boolean) : void {
    this.loading = bool;
  }

  resetCoupons() : void {
    this.coupons = undefined;
  }

  areCouponsAndCampaignSame() : boolean {
    if(this.coupons == undefined)
      return false
    return this.coupons[0].campaignID === this.selectedCampaign?.campaignID
  }


}
