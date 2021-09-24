import { Injectable } from '@angular/core';
import {Observable, of} from "rxjs";
import {map, isEmpty, mapTo} from 'rxjs/operators';
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

  copyFuncktion(campi : MarketingCampaign){
    console.log(campi);
  }

  checkIfBoxesAreFilled() : boolean {
    // @ts-ignore
    if(document.getElementById("couponID").value=="")
      return false;
    return true;
  }
}
