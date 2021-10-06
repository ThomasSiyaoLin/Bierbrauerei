import {Component, EventEmitter, Injectable, OnInit, Output} from '@angular/core';
import {MarketingCampaignService} from "../Service/marketing-campaign.service";
import {MarketingDetailsComponent} from "../marketing-details/marketing-details.component";
import {CreateMarketingComponent} from "../create-marketing/create-marketing.component";

@Component({
  selector: 'app-marketing',
  templateUrl: './marketing.component.html',
  styleUrls: ['./marketing.component.css']
})
@Injectable()
export class MarketingComponent implements OnInit {

  menuSelection : number = 0;
  @Output() onClickMarketing = new EventEmitter<boolean>();
  reset : boolean = false;

  constructor() { }

  ngOnInit(): void {
  }





}
