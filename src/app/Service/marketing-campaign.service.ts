import { Injectable } from '@angular/core';
import {Observable, of} from "rxjs";
import {MarketingCampaign} from "../../entitys/MarketingCampaign";


import {HttpClient,} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class MarketingCampaignService {

  readonly MARKETING_SERVICE_URL = "http://localhost:8090/MarketingCampaignService"
  constructor(private http : HttpClient) { }

  getCampaigns() : Observable<MarketingCampaign[]>{
    return  this.http.get<MarketingCampaign[]>(this.MARKETING_SERVICE_URL);
 }

 createCampaign(startDate : string, endDate : string, brand : string, campaignName : string) {
    var backSlash : string = '/';
    var campaignID;
   return this.http.post<MarketingCampaign>(this.MARKETING_SERVICE_URL+backSlash+startDate+backSlash+endDate+backSlash+brand,"");


 }

  setCampaignName(campaignID : string, campaignName : string) {
    var backSlash : string = '/';
    this.http.patch<MarketingCampaign>(this.MARKETING_SERVICE_URL+backSlash+campaignName+backSlash+campaignID, "")
      .subscribe();
  }

  checkIfBoxesAreFilled() : boolean {
    // @ts-ignore
    if(document.getElementById("couponID").value=="")
      return false;
    return true;
  }
}
