import { Injectable } from '@angular/core';
import {Observable, of} from "rxjs";
import {MarketingCampaign} from "../../entitys/MarketingCampaign";
import {DummyCampaign} from "./DummyCampaign";

@Injectable({
  providedIn: 'root'
})
export class MarketingCampaignService {

  constructor() { }

  getCampaigns() : Observable<MarketingCampaign[]>{
    const campaigns = of(DummyCampaign)
    return campaigns;
  }
}
