import {Component, Injectable, Input, OnInit} from '@angular/core';
import {MarketingCampaignService} from "../Service/marketing-campaign.service";
import {BrandServiceComponent} from "../Service/brand-service/brand-service.component";
import {MarketingCampaign} from "../../entitys/MarketingCampaign";
import {MarketingComponent} from "../marketing/marketing.component";


@Component({
  selector: 'app-create-marketing',
  templateUrl: './create-marketing.component.html',
  providers: [MarketingCampaignService, BrandServiceComponent], //Wenn ich hier Marketing Component reintune, funtkioniert es wieder nicht, warum?
  styleUrls: ['./create-marketing.component.css']
})

@Injectable()
export class CreateMarketingComponent implements OnInit {

  newCampaignName : string = "";
  newCampaignStartDate? : Date;
  newCampaignEndDate? : Date;
  newCampaignBrand? : string = undefined;
  newCreatedCampaign? : MarketingCampaign;




  brands? : string[];

  constructor(private marketingService : MarketingCampaignService,
              private brandService : BrandServiceComponent,
              private marketingSelection : MarketingComponent) { }

  ngOnInit(): void {

    this.loadAllBrands();


  }

  creatCampaign(){
    if(this.newCampaignStartDate == undefined||this.newCampaignEndDate == undefined || this.newCampaignBrand == undefined)
      return;
    var starDate = this.parseDate(this.newCampaignStartDate);
    var endDate = this.parseDate(this.newCampaignEndDate);
      this.marketingService.createCampaign(starDate, endDate, this.newCampaignBrand, this.newCampaignName)
        .subscribe(
          (campaignFromAPI : MarketingCampaign) => {this.marketingService.setCampaignName(campaignFromAPI.campaignID, this.newCampaignName);
            this.newCreatedCampaign = campaignFromAPI;} );



  }

  loadAllBrands(){
    this.brandService.getBrands()
      .subscribe(brands => this.brands = brands);
  }

  setTimeStampDate()  {
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth() + 1; //January is 0!
    var yyyy = today.getFullYear();
    var todayString = yyyy + '-' + mm + '-' + dd;

    var element = document.getElementById("startDate");
    //@ts-ignore
    element.value = "1899-01-01";
    //@ts-ignore
      element.setAttribute("min", todayString)
  }

  setStartDate() {

    var startDate :Date = new Date((<HTMLInputElement>document.getElementById("startDate")).value);
    this.newCampaignStartDate = startDate;

  }

  setEndDate () {
    var endDate :Date = new Date((<HTMLInputElement>document.getElementById("endDate")).value);
    this.newCampaignEndDate = endDate;
  }

  setCampaignname () {
    var newName : string =  (<HTMLInputElement>document.getElementById("nameCampaign")).value;
    this.newCampaignName = newName;
  }

  resetAll() : void {
    this.newCampaignName ="";
    this.newCampaignEndDate = undefined;
    this.newCampaignStartDate = undefined;
    this.newCampaignBrand = undefined;
    this.newCreatedCampaign = undefined;
    this.marketingSelection.onClickMarketing.emit(false);
    this.marketingSelection.menuSelection = 0;

  }

  resetStayInComponent() : void {
    this.newCampaignName ="";
    this.newCampaignEndDate = undefined;
    this.newCampaignStartDate = undefined;
    this.newCampaignBrand = undefined;
    this.newCreatedCampaign = undefined;
  }

  parseDate(dateToParse : Date)  :string {
    var minus = "-";
    var correctDateFormat : string =
      (dateToParse.getDate()+1).toString() + minus +(dateToParse.getMonth()+1).toString() +minus + dateToParse.getFullYear().toString() ;
    return correctDateFormat;
  }




}
