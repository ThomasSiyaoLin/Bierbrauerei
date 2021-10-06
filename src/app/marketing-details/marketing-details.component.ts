import {Component, Injectable, Input, OnInit} from '@angular/core';
import {MarketingCampaign} from "../../entitys/MarketingCampaign";

@Injectable()
@Component({
  selector: 'app-marketing-details',
  templateUrl: './marketing-details.component.html',
  styleUrls: ['./marketing-details.component.css']
})
export class MarketingDetailsComponent implements OnInit {

  @Input()marketingCampaign? : MarketingCampaign


  constructor() { }

  ngOnInit(): void {
  }


}
