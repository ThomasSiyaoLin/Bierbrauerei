import {PartialObserver, Subscribable, Unsubscribable, UnsubscriptionError} from "rxjs";
import {Unary} from "@angular/compiler";

export class MarketingCampaign {

  campaignID : string = "";
  campaignName : string;
  startDate : Date;
  endDate : Date;
  brand : string;

  constructor(campaignID : string, campaignName : string, startDate : Date, endDate :Date, brand : string) {
    this.campaignID = campaignID;
    this.campaignName = campaignName;
    this.startDate = startDate;
    this.endDate = endDate;
    this.brand = brand;

  }



}
