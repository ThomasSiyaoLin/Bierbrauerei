export class MarketingCampaign{

  campaignID : string;
  campaignName : string;
  startDate : string;
  endDate : string;
  brand : string;

  constructor(campaignID : string, campaignName : string, startDate : string, endDate :string, brand : string) {
    this.campaignID = campaignID;
    this.campaignName = campaignName;
    this.startDate = startDate;
    this.endDate = endDate;
    this.brand = brand;

  }



}
