import {Component, Input, OnInit} from '@angular/core';
import {MarketingCampaign} from "../../entitys/MarketingCampaign";

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

  showDetails() :void {

  }

}
